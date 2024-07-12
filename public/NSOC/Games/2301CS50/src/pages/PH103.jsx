
import React, { useState, useEffect } from 'react';
import './Treasurehuntbegin.css';
import { Link } from 'react-router-dom';
const questions = [
    {
        question: "If a machine is lubricated with oil",        
        options: [
        "the mechanical advantage of the machine increases",
        "the mechanical efficiency of the machine increases",
        "both its mechanical advantage and efficiency increases",
        "its efficiency increases, but its mechanical advantage decreases"
        ],
        answer: "the mechanical efficiency of the machine increases"
    },

    {
        question: "A wind-powered generator converts wind energy into electrical energy. Assume that the generator converts a fixed fraction of the wind energy intercepted by its blades into electrical energy. For wind speed v, the electrical power output will be proportional to",
        options: [
            "v",
            "v^2",
            "v^3",
            "v^4"
        ],
        answer: "v^3"
    },
    {
        question: "Two small particles of equal masses start moving in opposite directions from a point A in a horizontal circular orbit. Their tangential velocities are v and 2v, respectively, as shown in the figure. Between collisions, the particles move with constant speeds. After making how many elastic collisions, other than that at A, these two particles will again reach the point A?",
        options: [
            "4",
            "3",
            "2",
            "1"
        ],
        answer: "2"
    }
];

const PH103 = () => {
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
      <div className='underline'><Link to="/midsem/EE101">Move on to give EE101 exam</Link></div>
    </div>
    
  );

  return (
    <div className='main' style={{ padding: '20px', maxWidth: '600px', margin: '32px auto' }}>
      {quizComplete ? renderResult() : renderQuestion()}
    </div>
  );
};



export default PH103;
