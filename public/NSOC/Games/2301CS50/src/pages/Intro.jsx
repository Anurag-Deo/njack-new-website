import React, { useState } from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [showSecond, setShowSecond] = useState(false);
  const [bgImage, setBgImage] = useState('url("/intro2.jpg")'); 
  const [showThird, setShowThird] = useState(false);
  const [showForth, setShowForth] = useState(false);
  const [showFifth, setShowFifth] = useState(false);
  const [showSixth, setShowSixth] = useState(false);
  const [showSeventh, setShowSeventh] = useState(false);

  const handleClick = () => {
    setShowSecond(true);
    setBgImage('url(/11th.jpg)'); 
  };
  const handleClick2 = () => {
    setShowSecond(false);
    setShowThird(true);
    setBgImage('url(/11th.jpg)'); 
  };
  const handleClick3 = () => {
    setShowSecond(false);
    setShowThird(false);
    setShowForth(true);
    setBgImage('url(/12th.jpg)'); 
  };
  const handleClick4 = () => {
    setShowSecond(false);
    setShowThird(false);
    setShowForth(false);
    setShowFifth(true);
    setBgImage('url(/examday.jpg)'); 
  };
  const handleClick5 = () => {
    setShowSecond(false);
    setShowThird(false);
    setShowForth(false);
    setShowFifth(false);
    setShowSixth(true);
    setBgImage('url(/resultday.jpg)'); 
  };
  const handleClick6 = () => {
    setShowSecond(false);
    setShowThird(false);
    setShowForth(false);
    setShowFifth(false);
    setShowSixth(false);
    setShowSeventh(true);
    setBgImage('url(/journey_starts.jpg)'); 
  };


  return (
    <div style={{ backgroundImage: bgImage, backgroundSize: 'cover', minHeight: '100vh',minWidth:"100vw"}}>
      {!showSecond && !showThird && !showForth && !showFifth && !showSixth && !showSeventh && (
        <div className="introduction center ">
          Introduction
        </div>
      )}
      
      {!showSecond && !showThird && !showForth&& !showFifth && !showSixth && !showSeventh && (
        
        <div
          onClick={handleClick}
          className="int flex justify-center bg-slate-900/60 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
        >
          You stand at the gates of IIT Patna, one of the most prestigious institutions in India. As you gaze at the magnificent campus, a sense of accomplishment washes over you. This moment is the culmination of years of relentless dedication, countless sleepless nights, and unwavering determination. Your journey to get here was anything but easy, but it was worth every ounce of effort..............
          <div className='blink'>click to continue</div>
        </div>
      )}
      {showSecond && !showThird &&!showForth&&!showFifth && !showSixth && !showSeventh &&(
        <div
        onClick={handleClick2}
          className="inta flex justify-center align-middle bg-slate-900/80 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
        >
          <div style={{textAlign:"center", textDecoration:"underline"}}>Flashback: The Preparation Phase</div>
          <div>Two years ago, you decided to set your sights on getting into IIT Patna. The competition was fierce, with thousands of students vying for a limited number of spots. You knew that to succeed, you would need to give it your all.............</div>
          <div className="blink">click to continue</div>
        </div>
      )}
      {showThird && !showForth &&!showFifth && !showSixth && !showSeventh &&(
        <div
          onClick={handleClick3}
          className="intb flex justify-center align-middle bg-slate-900/60 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
        >
          <div style={{textAlign:"center", textDecoration:"underline"}}>Year 1: Laying the Foundation</div>
          <div>Study Routine: You began with a strict study schedule, dedicating at least six hours a day to your academics. Your mornings started with refreshing your memory on subjects you found challenging, followed by solving previous years' question papers.</div>
          <div>Extra Classes: Weekends were reserved for coaching classes, where you delved deeper into complex topics and clarified your doubts with experienced tutors.</div>
          <div>Practice and Persistence: Every evening, you spent time practicing mock tests, analyzing your mistakes, and working on improving your weak areas.......</div>
          <div className="blink">Click to continue</div>
        </div>
      )}
      {showForth && !showFifth && !showSixth && !showSeventh &&(
        <div
          onClick={handleClick4}
          className="intc flex justify-center align-middle bg-slate-900/60 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
        >
          <div style={{textAlign:"center",textDecoration:"underline"}}>Year 2: Intensifying the Effort</div>
          <div>Increased Study Hours: As the entrance exam approached, you intensified your efforts, increasing your study hours to ten per day. Late-night study sessions became a norm, fueled by cups of coffee and sheer willpower.</div>
          <div>Revision and Testing: You revisited every topic, ensuring you left no stone unturned. Regular self-assessment tests helped you gauge your progress and stay on track.</div>
          <div>Physical and Mental Health: Amidst the rigorous preparation, you made sure to take short breaks for physical exercise and meditation, keeping your mind and body in balance........</div>
          <div className="blink">Click to continue</div>
        </div>
      )}
      {showFifth && !showSixth && !showSeventh &&(
        <div
          onClick={handleClick5}
          className="intd flex justify-center align-middle bg-slate-900/80 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
        >
          <div style={{textAlign:"center",textDecoration:"underline"}} >The Day of the Exam</div>
          <div>Finally, the day of the entrance exam arrived. You walked into the examination hall with a mix of nerves and confidence. The months of preparation had equipped you with the knowledge and skills to tackle the questions head-on. You carefully managed your time, ensuring you answered every question to the best of your ability......</div>
          <div className="blink">Click to continue</div>
        </div>
      )}
      {showSixth && !showSeventh &&(
        <div
          onClick={handleClick6}
          className="inte flex justify-center align-middle bg-slate-900 absolute bottom-32 rounded-3xl p-3 m-16 text-3xl"
        >
          <div style={{textAlign:"center", textDecoration:"underline"}}>Receiving the Results</div>
          <div>Weeks later, the results were announced. Your heart pounded as you logged in to check your score. A sense of euphoria surged through you when you saw your name on the list of successful candidates. You had done it – you had secured a place at IIT Patna......</div>
          <div className="blink">Click to continue</div>
        </div>
      )}
      {showSeventh && (
        <div className="intf flex justify-center align-middle bg-slate-900/60 absolute bottom-48 rounded-3xl p-3 m-16 text-3xl">
        <div style={{textAlign:"center",textDecoration:"underline"}}>The Journey Begins</div>
        <div>Standing at the gates now, you take a deep breath and step forward. This is where your new journey begins. The next few years will be filled with learning, growth, and countless experiences that will shape your future.</div>

        <div>Welcome to IIT Patna. Your story is just beginning.</div>
        </div>
        
      )}
      {showSeventh && (
        <button className='absolute bottom-16 p-4 m-16 play flex justify-center align-middle'>
          <Link to="/game">Play</Link>
        </button>
      )
      }

    </div>
  );
};

export default Intro;

