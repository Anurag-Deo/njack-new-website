
import React, { useState, useEffect } from 'react';
import './Treasurehuntbegin.css';
import { Link } from 'react-router-dom';
const questions = [
    {
        question: "Which of the following sentences demonstrates correct subject-verb agreement?",
        options: [
        "The collection of books were on the shelf.",
        "Each of the boys were playing in the park.",
        "The team of players is practicing hard.",
        "My friends and family is coming over."
        ],
        answer: "The team of players is practicing hard."
    },

    {
        question: "Choose the sentence with the correct usage of pronoun case:",
        options: [
          "Him and I went to the store.",
          "Between you and I, it was a misunderstanding.",
          "She gave the prize to he and I.",
          "Between you and me, it's a difficult decision."
        ],
        answer: "Between you and me, it's a difficult decision."
    },
    {
        question: "Which sentence demonstrates correct parallel structure?",
        options: [
          "She likes reading, writing, and to paint.",
          "He enjoys swimming, running, and to play tennis.",
          "They can either go for a walk or taking a nap.",
          "The company focuses on innovation, quality, and customer satisfaction."
        ],
        answer: "The company focuses on innovation, quality, and customer satisfaction."
    }
];

const HS = () => {
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
      <div className='underline'><Link to="/midsem/MA101">Move on to give MA101 exam</Link></div>
    </div>
    
  );

  return (
    <div className='main' style={{ padding: '20px', maxWidth: '600px', margin: '32px auto'}}>
      {quizComplete ? renderResult() : renderQuestion()}
    </div>
  );
};



export default HS;


