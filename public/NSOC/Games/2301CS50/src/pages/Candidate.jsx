import React from 'react';
import './v.css';
import { Link } from 'react-router-dom';

const Candidate = () => {
  return (
    <div className='main' style={{background:"black"}} >
      <h2 className='text-3xl underline'>Candidate Page</h2>
      <p>
        Participating as a candidate at Tech Fest Celesta provides an excellent platform to showcase your skills and 
        talents. Whether you're competing in coding challenges, presenting innovative projects, or demonstrating 
        your creativity in various competitions, this is your chance to shine.
      </p>
      <p>
        Engaging in these competitions allows you to push your limits, think critically, and solve complex problems 
        under pressure. It's a fantastic way to enhance your technical knowledge and apply what you've learned in 
        real-world scenarios. The experience will boost your confidence and help you stand out in your future 
        academic or professional pursuits.
      </p>
      <p>
        As a candidate, you'll also have the opportunity to receive feedback from judges and mentors who are experts 
        in their fields. This constructive criticism will help you identify areas for improvement and guide you on 
        your journey towards excellence.
      </p>
      <p>
        Moreover, participating in Tech Fest Celesta fosters a sense of camaraderie among fellow participants. You'll 
        meet like-minded peers, share experiences, and build lasting friendships. These connections can lead to 
        future collaborations, opening doors to exciting opportunities in your academic and professional life.
      </p>
      <p>
        Embrace the challenge, showcase your talents, and make the most of your experience as a candidate at Tech Fest 
        Celesta. It's not just about winning; it's about growing, learning, and making a mark in the community!
      </p>
        <div className="blink"><Link to="/EndSem">click to continue</Link></div>
    </div>
  );
};

export default Candidate;

