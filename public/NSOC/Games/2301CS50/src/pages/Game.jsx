import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';
const Game = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [bgImage, setBgImage] = useState('url(/hostel.jpg)');

  const handleClick = () => {
    setShowSecond(true);
    setBgImage('url(/announcement.jpg)');
  };

  const handleNo = () => {
    alert("This is your first event in college, you can't miss it. Click on Yes to participate.");
  };

  return (
    <div
      style={{
        backgroundImage: bgImage,
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      {!showSecond && (
        <div
          onClick={handleClick}
          className="int flex justify-center bg-slate-900/80 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
          style={{ cursor: 'pointer' }}
        >
          <div>
            <div style={{ textAlign: 'center', textDecoration: 'underline', color: 'gold' }}>Your First Day at College</div>
            <div>
              Stepping onto campus for the first time, you feel a mix of excitement and nerves. The bustling environment is full of new faces and opportunities. You navigate through orientation sessions, meet your enthusiastic peers, and explore the impressive campus grounds. Amidst the excitement, your seniors surprise you with an intriguing treasure hunt. It's the perfect start to an unforgettable college journey!......
            </div>
            <div className="blink announcement">Click to see a surprise announcement from your seniors</div>
          </div>
        </div>
      )}
      {showSecond && (
        <div className='flex some'>
          <div
            className="int flex justify-center bg-slate-900/80 absolute bottom-44 rounded-3xl p-3 m-16 text-3xl"
            style={{ cursor: 'pointer' }}
          >
            <div style={{ textAlign: 'center', textDecoration: 'underline', color: 'gold' }}>The Treasure Hunt Begins</div>
            <div>
            Your seniors have organized an exciting treasure hunt just for you. Explore the campus, solve challenging puzzles, and collect hidden treasures. Prove your skills and uncover all the secrets hidden around the college. Are you ready to embark on this thrilling adventure? Let the hunt begin!......
            </div>
          </div>

          <div className="question absolute bottom-12 flex justify-center align-middle">
            <div>Do you want to participate?</div>
            <div className="flex gap-4">
            <button className='p-2'>
              <Link to="/treasure">Yes</Link>
            </button>
            <button className='p-2' onClick={handleNo}>No</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
