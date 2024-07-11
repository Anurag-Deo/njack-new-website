import React from 'react';
import { Link } from 'react-router-dom';

const MCCodingReels = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: 'black', color: 'gold' }}>
      <h2 className='text-3xl underline'>Redemption Arc</h2>
      <p>
        You had a bad CPI and very little coding knowledge. But now, it's time for redemption and making a comeback.
      </p>
      <p>
        The coding club NJACK has given you a challenge to prove your skills and turn things around.
      </p>
      <p>
        Are you ready to take on the challenge and show everyone what you're capable of?
      </p>
      <Link to="/final-challenge">
        <button style={{ marginTop: '20px', padding: '15px 30px', fontSize: '18px', backgroundColor: 'gold', color: 'black', border: '2px solid gold', borderRadius: '5px', cursor: 'pointer' }}>
          Accept the Challenge
        </button>
      </Link>
    </div>
  );
};

export default MCCodingReels;

