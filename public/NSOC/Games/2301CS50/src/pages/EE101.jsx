
import React, { useState, useEffect } from 'react';
import './Treasurehuntbegin.css';
import { Link } from 'react-router-dom';
const questions = [
    {
        question: "What will happen to the resistance of a semiconductor when its temperature is increased?",        
        options: [
        "It will increase",
        "It will decrease",
        "It will remain constant",
        "It will become zero"
        ],
        answer: "It will decrease"
    },

    {
        question: "What is added in intrinsic semiconductor for making extrinsic semiconductor.",
        options: [
            "Impurity",
            "Electrons",
            "Holes",
            "Protons"
        ],
        answer: "Impurity"
    },
    {
        question: "Which of the following has the largest number of free electrons?",
        options: [
            "Insulator",
            "Semiconductor",
            "Conductor",
            "Intrinsic semiconductor"
        ],
        answer: "Conductor"
    }
];

const EE101= () => {
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
      <div className='underline'><Link to="/fest">Move on to next phase</Link></div>
    </div>
    
  );

  return (
    <div className='main' style={{ padding: '20px', maxWidth: '600px', margin: '32px auto' }}>
      {quizComplete ? renderResult() : renderQuestion()}
    </div>
  );
};



export default EE101;