import React from 'react';
import { Link } from 'react-router-dom';
import './GoodResults.css';

const GoodResults = () => {

  return (
    <div className='container'>
      <h2>Your Exams Went Well!</h2>
      <p>Congratulations on achieving a good CPI. Now, it's time to test your coding skills.</p>
      <p>Your college coding club, Njack, is organizing Nsoc.</p>
      <button className='challenge-button'><Link to="/final-challenge">Accept the Challenge</Link></button>
    </div>
  );
};

export default GoodResults;

