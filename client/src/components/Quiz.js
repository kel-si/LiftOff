import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: '  ',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: true },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
			],
		},
		{
			questionText: '',
			answerOptions: [
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: false },
				{ answerText: '', isCorrect: true },
			],
		},
	];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);
  
  const [score, setScore] = useState(0);
  
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

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.
length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].
questionText}</div>
					</div>
					<div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={() =>handleAnswerButtonClick(answerOption.
isCorrect)}>{answerOption.answerText}</button>
            ))}
					</div>
				</>
			)}
		</div>
	);
}

