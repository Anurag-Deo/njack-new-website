import React from 'react';
import './v.css';
import { Link } from 'react-router-dom';
const Volunteer = () => {
  return (
    <div className='main' style={{background:"black"}}>
      <h2 className='text-3xl underline'>Congrats You found the hidden link</h2>
      <p>
        A long journey came to an end. Congrats you have completed this game.........
      </p>
      <button className='p-3 m-3'><Link to="/">Back to home page.</Link></button>
    </div>
  );
};

export default Volunteer;