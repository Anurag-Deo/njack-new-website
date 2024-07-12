import React, { useState } from 'react';
import './EndSem.css';
import { Link } from 'react-router-dom';

const EndSem = () => {
  const [showSubOptions, setShowSubOptions] = useState(false);

  const handleTimepassClick = () => {
    setShowSubOptions(!showSubOptions);
  };

  return (
    <div className='container'>
      <h2>End-Semester Preparation</h2>
      <p>As the end-semester exams approach, it's crucial to focus on your preparation strategy. You have two options to consider:</p>
      <div className='option'>
        <h3><Link to="/GoodResults">1. Study Syllabus Oriented</Link></h3>
        <p>Concentrate on understanding and mastering the syllabus. This approach ensures you cover all the necessary topics and are well-prepared for the exam content.</p>
      </div>
      <div className='option'>
        <h3 onClick={handleTimepassClick} style={{ cursor: 'pointer' }}>2. Timepass</h3>
        {showSubOptions && (
          <div className='sub-options'>
            <div className='sub-option'>
              <h4><Link to="/Coding">a. Use that time to improve your coding knowledge</Link></h4>
              {/* <p>Take the opportunity to enhance your coding skills, work on personal projects, or learn new programming languages.</p> */}
            </div>
            <div className='sub-option'>
              <h4><Link to="/MCCodingReels">b. MC coding mai to reels dekhunga</Link></h4>
              {/* <p>Or just chill and watch reels. Sometimes, taking a complete break can help you return with a fresh perspective.</p> */}
            </div>
          </div>
        )}
      </div>
      <p>Choose the approach that suits your priorities best as the exams near!</p>
    </div>
  );
};

export default EndSem;
