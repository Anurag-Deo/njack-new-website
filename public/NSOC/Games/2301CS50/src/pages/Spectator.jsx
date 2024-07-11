import React from 'react';
import './v.css';
import { Link } from 'react-router-dom';

const Spectator = () => {
  return (
    <div className='main' style={{background:"black"}}>
      <h2 className='text-3xl underline'>Spectator Page</h2>
      <p>
        Attending Tech Fest Celesta as a spectator is an exciting experience filled with learning and inspiration. 
        You get the opportunity to witness firsthand the incredible talent and creativity of your peers. Watching 
        various competitions, presentations, and demonstrations can spark new ideas and motivate you to explore 
        different fields.
      </p>
      <p>
        As a spectator, you can engage with the participants, ask questions, and gain insights into their projects 
        and processes. This interaction can provide you with a deeper understanding of various topics and introduce 
        you to new concepts and technologies.
      </p>
      <p> 
        Additionally, attending the event allows you to be part of a vibrant community. You can network with students, 
        faculty, and industry professionals, building connections that can benefit you in your academic and 
        professional journey. The knowledge and inspiration you gain as a spectator can fuel your own pursuits and 
        encourage you to participate more actively in future events.
      </p>
      <p>
        Enjoy the dynamic atmosphere, cheer for your friends, and immerse yourself in the innovative spirit of Tech 
        Fest Celesta. Being a spectator is not just about observing; it's about being part of a community that values 
        knowledge, creativity, and collaboration.
      </p>
      <p>
        Join us and experience the excitement of Tech Fest Celesta from the front row. Witness the best ideas in action 
        and let the energy of the event inspire you to reach new heights!
      </p>
      <div className="blink"><Link to="/EndSem">click to continue</Link></div>
    </div>

  );
};

export default Spectator;

