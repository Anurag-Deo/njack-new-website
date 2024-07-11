import React from 'react';
import { Link } from 'react-router-dom';
import './FinalChallenge.css';

const FinalChallenge = () => {
  return (
    <div className='container'>
      <h2 className='text-3xl underline'>Final Challenge</h2>
      <p>You have to make a game on the theme of IIT Patna. The player's final task is to complete the game however they want and win it.</p>
      <p>Here's the source code: <a href="https://github.com/shashwatvegeta/NSOC" target="_blank" rel="noopener noreferrer" className='source-link'>GitHub Link</a></p>
      <p>Or</p>
      <p>Find the hidden link to win</p>
      <Link to="/" className='home-button'>Back to Home Page</Link>
    </div>
  );
};

export default FinalChallenge;

