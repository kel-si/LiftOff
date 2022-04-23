import React, { useState } from 'react';
import "../styles/Quiz.scss";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Quiz() {

  const questions = [
    {
      questionText: 'screenshot of sample post for user tutorial to be displayed here. Remember to let the audience know that we intend to include 5 questions as part of onboarding, but we are only showing 1 sample question for the sake of time on demo day.',
      answerOptions: [
        { answerText: 'wrong comment#1', isCorrect: false },
        { answerText: 'wrong comment#2', isCorrect: false },
        { answerText: 'wrong comment#3', isCorrect: false },
        { answerText: 'correct response#1', isCorrect: true },
      ],
    },
		// {
			// // questionText: 'How much time does an average child (under the age of 12) spend on social media per day? (as of 2019)',
			// answerOptions: [
				// { answerText: '1', isCorrect: false },
				// { answerText: '3', isCorrect: false },
				// { answerText: '6', isCorrect: true },
				// { answerText: '5', isCorrect: false },
			// ],
		// },
		// {
			// questionText: 'What are some of the risks you can face when using social media?',
			// answerOptions: [
				// { answerText: 'getting free bitcoin and beocming a billionnaire', isCorrect: false },
				// // { answerText: 'identity theft, online predators, access to personal information, cyberbullying', isCorrect: true },
				// // { answerText: 'get contacted by Elon to join the Executive Board of Tesla, Twitter, SpaceX', isCorrect: false },
				// { answerText: 'find zen in life', isCorrect: false },
			// ],
		// },
		// {
			// questionText: 'How may social media usage negatively impact how we view ourselves?',
			// answerOptions: [
				// // // // { answerText: 'we increasingly base our self-worth on the likes, the followers, the reactions, the shares that we get from our social media interactions. Also, unrealistically negative comments from trolls, haters, who are anonymous.', isCorrect: true },
				// // { answerText: 'we feel like we are the king of the world because Elon retweets our message', isCorrect: false },
				// { answerText: 'social media is evil', isCorrect: false },
				// { answerText: 'Mark Zuckerberg is an alien', isCorrect: false },
			// ],
		// },
		// {
			// questionText: 'What are some benefits of using social media?',
			// answerOptions: [
				// { answerText: 'climate change is a hoax', isCorrect: false },
				// { answerText: 'Rick Roll', isCorrect: false },
				// { answerText: 'get free bitcoins', isCorrect: false },
				// // // { answerText: 'connect with others without being bounded by physical distance and national borders, especially amid a global pandemic and looming global climate catastrophe', isCorrect: true },
			// ],
		// },
    // {
      // // questionText: 'Identify the appropriate for the following post:  the post is as follows: "I am feeling down today. Is any of you available for chat?',
      // answerOptions: [
        // { answerText: 'not my problem', isCorrect: false },
        // // { answerText: 'free today. but no time for you, im SO SORRY, not really.', isCorrect: false },
        // { answerText: 'no one cares about you', isCorrect: false },
        // // { answerText: 'I feel you. I have to go for soccer training now. But lets chat later tonight on Discord?!', isCorrect: true },
      // ],
    // }
	];

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);
  
  const [score, setScore] = useState(0);

  const user = localStorage.getItem
("liftoffUser");
const userData = JSON.parse(user);
const userId = userData.user.id;
  
  //move to the next question once the button is clicked
  const handleAnswerButtonClick = (isCorrect) => {
      if(isCorrect===true){
        setScore(score + 1);
      }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion); 
    } else {
      setShowScore(true);
  }
}

const handleSubmit =(event) => {
  event.preventDefault();
  axios 
  .put(`/api/users/${userId}`, {level: event.target.value}) 
  .then((res) => { 
    console.log("from server:", res.data);
    navigate('/my-posts');
  })
  .catch((err) => {
    console.log("error", err); 
  })
 }


	return (
    <div className='quiz-container'>
		<div className='quiz'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
        <button type="submit" name="level" className="set-user-level-one-button" onClick={handleSubmit} value={1} >LiftOff Starts Here</button>
        </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button className="quiz-button" onClick={() =>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
					</div>
				</>
			)}
		</div>
    </div>
	);
}

