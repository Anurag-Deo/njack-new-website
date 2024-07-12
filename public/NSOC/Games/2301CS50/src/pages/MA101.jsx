
import React, { useState, useEffect } from 'react';
import './Treasurehuntbegin.css';
import { Link } from 'react-router-dom';
const questions = [
    {
        question: "The normal line to the surface zlnx+y^2e^z=0 at the point (e,1,-1)(e,1,-1) also passes through the point:",        
        options: [
        "(e-1,3,e)",
        "(e,3,e-1)",
        "(e-1,1,3)",
        "(3,1,e)"
        ],
        answer: "(e-1,3,e)"
    },

    {
        question: "The point on the plane 3x+2y+z=6 which is nearest to the origin is:",
        options: [
            "(1,1,1)",
            "(2,1,3)",
            "(3,2,1)",
            "(9/7,6/7,3/7)"
        ],
        answer: "Between you and me, it's a difficult decision."
    },
    {
        question: "The equation of the plane passing through the point (1,2,3) and perpendicular to the planes x+2y+3z=6 and 2x+3y+4z=5 is:",
        options: [
            "x+2y+3z=6",
            "2x+3y+4z=5",
            "3x+4y+5z=7",
            "3x+4y+5z=6"
        ],
        answer: "3x+4y+5z=6"
    }
];

const MA101 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  // const [bgImage, setBgImage]= useState('url(./src/images/treasure_hunt.jpg)');
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 10);
    }

    setSelectedOption(null);
    setTimer(60);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const renderQuestion = () => (
    <div className='questions'>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`option ${selectedOption === option ? 'selected-option' : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} style={{ padding: '10px 20px', marginTop: '20px' }}>Next</button>
      <div>Time remaining: {timer} seconds</div>
    </div>
  );

  const renderResult = () => (
    <div className='questions'>
      <h2>Quiz Complete!</h2>
      <p>Your total score is: {score}</p>
      <div className='underline'><Link to="/midsem/PH103">Move on to give PH103 exam</Link></div>
    </div>
    
  );

  return (
    <div className='main' style={{ padding: '20px', maxWidth: '600px', margin: '32px auto' }}>
      {quizComplete ? renderResult() : renderQuestion()}
    </div>
  );
};



export default MA101;