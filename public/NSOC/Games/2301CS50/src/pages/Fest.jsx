import React from 'react'
import { Link } from 'react-router-dom'
import './Fest.css'

const Fest = () => {
  return (
    <div className="App">
        <header className="App-header">
          <h1>Tech Fest Celesta</h1>
          <p>
            As the excitement builds for Tech Fest Celesta at our college, anticipation is high among seniors for your participation—whether as a volunteer or as a candidate. Your involvement promises to add vibrancy to the event, showcasing your talents and enthusiasm. Join us as we gear up for an exhilarating experience filled with innovation, creativity, and spirited competition. Let's make this year's Tech Fest Celesta a memorable celebration of knowledge and skill! What role will you choose to play?
          </p>
          <div className='buttons'>
            <Link to="/fest/volunteer">
              <button className='p-2'>Volunteer</button>
            </Link>
            <Link to="/fest/candidate">
              <button className='p-2'>Candidate</button>
            </Link>
            <Link to="/fest/spectator">
              <button className='p-2'>Spectator</button>
            </Link>
          </div>
        </header>
    </div>
  )
}

export default Fest
