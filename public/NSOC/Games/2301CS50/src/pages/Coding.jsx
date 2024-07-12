import React from 'react';
import { Link } from 'react-router-dom';

const Coding= () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 className='text-5xl underline m-6'>Time to Shine!</h1>
      <p>You invested your time doing coding.</p>
      <p>Now it's your time to shine.</p>
      <p>NJACK, your coding club, is organizing NSOC.</p>
      <p>Show that you are worthy.</p>
      <Link to="/final-challenge">
        <button 
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            cursor: 'pointer', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            marginTop: '20px'
          }}>
          Accept the Challenge
        </button>
      </Link>
    </div>
  );
}

export default Coding;

