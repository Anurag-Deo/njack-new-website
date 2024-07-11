
import React, { useState, useEffect } from 'react';
import './Treasurehuntbegin.css';
import { Link } from 'react-router-dom';
const questions = [
  {
    question: "In this magical world, often the only thing to do is believe. For at the moment of your greatest need, it shall always appear with what you need. All you need to do then is weasle into the room and seek the glass beyond which, your inner eye may find, a longing wished for in heart and mind. Only then you shall know da wae",
    options: ["Yoga Room", "Temple", "Basketball court", "Flag post"],
    answer: "Basketball court"
  },
  {
    question: "In the depths of dreams where layers unwind,A place of calm your spirit will find.Not the dark land where the ring did call,Nor the starship in the vast where Jedis stand tall.Where a hobbits journey meets a warriors grace,And the Forces power finds its place.A spinning top marks the quiet retreat,Where tension fades and stillness is sweet.",
    options: ["Temple", "Yoga Room", "Basketball court", "Library"],
    answer: "Yoga Room"
  },
  {
    question: "In the realm of knowledge where the wise do seek, A place of silence where the meek do speak. Not where the ballers shoot and score, Nor where the books do line the floor. Where the gods do dwell in" +
    "peace, And the seekers quest for knowledge do cease. A place of quiet where the mind may rest, And the soul may find its true quest.",
    options: ["Library", "Basketball court", "Temple", "Yoga Room"],
    answer: "Library"
  },
  {
    question:"In a game where love means nothing at all,A net divides, and aces fall.Where a wizard with a scar might play,But not on Hogwarts' grounds today.",
    options: ["Badminton court", "Volleyball court", "Dance Room", "Tennis Court"],
    answer:"Tennis Court"
  },
  {
    question:"In a place where the ballers shoot and score, A place where the crowd does roar. Not where the books do line the floor, Nor where the gods do dwell in peace. Where the players run and jump with might, And the ball sails through the air in flight.",
    options: ["Basketball court", "Football ground", "Cricket ground", "Badminton court"],
    answer:"Football ground"
  },
  {
    question:"In a place where strangers lay their heads,Stories whispered in shared beds.Not a home, but close to heart,Where journeys end and new ones start.",
    options: ["Hostel", "Library", "Canteen", "Classroom"],
    answer:"Hostel"
  }
  
  // Add 5 more questions here
];

const Treasurehuntbegin = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  // const [bgImage, setBgImage]= useState('url(/treasure_hunt.jpg)');
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
    <div className='questions '>
      <h2>Quiz Complete!</h2>
      <p>Your total score is: {score}</p>
      {score >= 60 ? <p>Congratulations! You are eligible for a prize.</p> : <p>Sorry, you are not eligible for a prize.</p>}
      <div className='underline'><Link to="/midsem">Move on to next journey</Link></div>
    </div>
    
  );

  return (
    <div className='main' style={{ padding: '20px', maxWidth: '600px', margin: '32px auto', minHeight:"80vh" }}>
      {quizComplete ? renderResult() : renderQuestion()}
    </div>
  );
};



export default Treasurehuntbegin;

