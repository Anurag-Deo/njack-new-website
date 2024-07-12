import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
function App() {
  const [bgImage, setBgImage] = useState('url("/entry.jpg")') // initial background image

  return (
    <div style={{ backgroundImage: bgImage, backgroundSize: 'cover', minHeight: '100vh' }}>
      <div className="center text-8xl p-8 popup-text ">
      Welcome to College Simulator: IIT PATNA VERSION
      </div>
      <button className="center text-3xl min-w-20 play-button">
        <Link to="/intro">Play</Link>
      </button>
    </div>
  )
}

export default App
