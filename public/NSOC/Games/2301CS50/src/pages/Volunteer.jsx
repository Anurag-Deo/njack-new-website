import React from 'react';
import './v.css';
import { Link } from 'react-router-dom';
const Volunteer = () => {
  return (
    <div className='main' style={{background:"black"}}>
      <h2 className='text-3xl underline'>Volunteer Page</h2>
      <p>
        By volunteering at Tech Fest Celesta, you have the incredible opportunity to connect with your amazing seniors. 
        You'll get to know them better, understand their experiences, and learn from their guidance. Volunteering isn't 
        just about helping out; it's a chance to build valuable relationships with those who have navigated the path 
        before you.
      </p>
      <p>
        Moreover, you'll develop essential management skills. Organizing events, coordinating with teams, and handling 
        unexpected situations will enhance your ability to manage both projects and people. This hands-on experience 
        will prepare you for future leadership roles, teaching you how to plan, execute, and oversee tasks effectively.
      </p>
      <p>
        In addition to learning management, volunteering also allows you to acquire various soft skills. Communication, 
        teamwork, and problem-solving are integral parts of the experience. You'll learn how to work collaboratively 
        with a diverse group of individuals, improving your ability to convey ideas clearly and resolve conflicts 
        efficiently.
      </p>
      <p>
        Overall, volunteering at Tech Fest Celesta is a rewarding experience that goes beyond the event itself. It's 
        an opportunity to grow both personally and professionally, gaining skills and experiences that will benefit 
        you throughout your career. Join us as a volunteer and make a meaningful impact while learning and growing!
      </p>
      <div className="blink"><Link to="/EndSem">click to continue</Link></div>
    </div>
  );
};

export default Volunteer;

