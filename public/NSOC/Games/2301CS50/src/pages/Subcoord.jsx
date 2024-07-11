
import React, { useState, useEffect } from 'react';
import './Treasurehuntbegin.css';
import { Link } from 'react-router-dom';
const questions = [
    {
        question: "This subcoord is known for taking GPLs. It doesn't matter whose bday it is. He is always eaager to take GPLs. He also won bronze medal in India Skills. Who is he?",        
        options: [
        "IITian Rishi Kumar",
        "Hemant Kumar",
        "Maganjot Singh",
        "Sashwat Suman",
        "Vinay Khedkar"
        ],
        answer: "IITian Rishi Kumar"
    },

    {
        question: "This subcoord is always eager to know what's happening around him. He is also known for his love for pastry. He is bronze medalist in India Skills Junior. Who is he?",
        options: [
            "IITian Rishi Kumar",
            "Hemant Kumar",
            "Maganjot Singh",
            "Sashwat Suman",
            "Vinay Khedkar"
        ],
        answer: "Hemant Kumar"
    },
    {
        question: "He is more famous among seniors for his kaand. Who is he?",
        options: [
            "IITian Rishi Kumar",
            "Hemant Kumar",
            "Maganjot Singh",
            "Sashwat Suman",
            "Vinay Khedkar"

        ],
        answer: "Maganjot Singh"
    },
    {
        question: "He is known for his love for basketball. He also shares the same name as the Tallest boy in Sophomore Year Who is he?",
        options: [
            "IITian Rishi Kumar",
            "Hemant Kumar",
            "Maganjot Singh",
            "Sashwat Suman",
            "Vinay Khedkar"
        ],
        answer: "Sashwat Suman"
    },
    {
        question: "He is known for his love for basketball. He scores three pointers like its nothing. Who is he?",
        options: [
            "IITian Rishi Kumar",
            "Hemant Kumar",
            "Maganjot Singh",
            "Sashwat Suman",
            "Vinay Khedkar"
        ],
        answer: "Vinay Khedkar"
    }

];

const Subcoord = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
//   const [bgImage, setBgImage]= useState('url(./src/images/treasure_hunt.jpg)');
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
      <p>Answers are given below:-</p>
      <p>1. IITian Rishi Kumar</p>
      <p>2. Hemant Kumar</p>
      <p>3. Maganjot Singh</p>
      <p>4. Sashwat Suman</p>
      <p>5. Vinay Khedkar</p>
      <p>If any subcoord is missed, it is Hemant's responsibility.</p>
      <p>I asked him 3 times</p>
      <div className='underline'><Link to="/fest">Move on to next phase</Link></div>
    </div>
    
  );

  return (
    <div className='main' style={{ padding: '20px', maxWidth: '600px', margin: '32px auto' }}>
      {quizComplete ? renderResult() : renderQuestion()}
    </div>
  );
};



export default Subcoord;
