import React, { useState, useEffect } from "react";
import "../styles/Quiz.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Quiz(props) {
  const questions = [
    {
      // questionText: 'screenshot of sample post for user tutorial to be displayed here. Remember to let the audience know that we intend to include 5 questions as part of onboarding, but we are only showing 1 sample question for the sake of time on demo day.',
      questionText:
        "Select the most appropriate comment for this post. Remember to think about how the person sharing this might feel when they read your comment.",
      answerOptions: [
        { answerText: "Cats are stupid.", isCorrect: false, id: 1 },
        { answerText: "Ummmmmm no.", isCorrect: false, id: 2 },
        { answerText: "🙄", isCorrect: false, id: 3 },
        { answerText: "I like your positive outlook!", isCorrect: true, id: 4 },
      ],
    },
  ];

  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [user, setUser] = useState(props.user);
  const userId = user.id;

  //move to the next question once the button is clicked
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/users/${userId}`, { level: event.target.value })
      .then((res) => {
        props.updateLevel(res.data.level);
        navigate("/my-posts");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className="page-container"> 
    <div className="quiz-container">
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            <img
              src="https://i.ibb.co/273DF24/confetti-flat.gif"
              className="confetti"
            />
            <div>
              <h2>Congrats! You've leveled up to Mini Martian!!👽</h2>
              <button
                type="submit"
                name="level"
                className="set-user-level-one-button"
                onClick={handleSubmit}
                value={1}
              >
                Proceed to LiftOff
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <h1>Complete the quiz to activate your account</h1>
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
              <div className="post--container">
                <article className="post">
                  <header className="post--header">
                    <img
                      src="https://i.ibb.co/BPrr6fn/lvl-admin.jpg"
                      className="post-avatar"
                    />
                    <h2 className="post--name">Quizcat</h2>
                  </header>

                  <div className="post--body">
                    <p>Things are looking up! 😺 </p>
                    <div className="img--container">
                      <img
                        src="https://i.ibb.co/HFHFZKb/quiz-cat.jpg"
                        alt="error"
                        className="post--img"
                      />
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText.id}
                  className="quiz-button"
                  onClick={() =>
                    handleAnswerButtonClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}
