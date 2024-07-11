import React, { useState } from 'react'
import './Treasure.css'
import { Link } from 'react-router-dom'

const Treasure = () => {
    const [showSecond, setShowSecond] = useState(false);
    const [bgImage, setBgImage] = useState('url(/treasure_hunt.jpg)');
  return (
    <div
        style={{
            backgroundImage: bgImage,
            backgroundSize: 'cover',
            minHeight: '100vh',
        }}
    >
      <div className="rules">
        <h2>Treasure Hunt Rules</h2>
        <ol type='1'>
            <li>1. Single Attempt Per Question: Each question must be answered without retries. Once an answer is submitted, it cannot be changed.</li>
            <li>2. Time Limit: There will be a time limit for each question. If the participant does not answer within the given time, the question is considered incorrect, and no points will be awarded.</li>
            <li>3. Sequential Questions: Questions must be answered in sequence. Participants cannot skip a question and come back to it later.</li>
            <li>4. Hints: No hints will be provided for any question.</li>
            <li>5. Scoring: Each correct answer awards 10 points. The maximum score a participant can achieve is based on the total number of questions.</li>
            <li>6. Winning Criteria: To win the prize, a participant must score at least 60 points, which means correctly answering at least 6 questions.</li>
            <li>7. Tie-Breaker: In case of a tie (multiple participants scoring 60 or more), the fastest completion time will determine the winner.</li>
            <li>8. Cheating: Any form of cheating (e.g., using external help, discussing answers with others) will result in immediate disqualification.</li>
            <li>9. Technical Issues: If a participant encounters technical issues, they must notify the organizer immediately. Decisions regarding reattempts due to technical problems will be at the organizer's discretion.</li>
            <li>10. Prize Distribution: Prizes will be distributed to the winners at the end of the event. The organizer's decision on the winners is final.</li>
            {/* <li>11. Participation Fee: If applicable, mention the participation fee and payment method.</li> */}
            <li>11. Registration: Participants must register before the event starts. Late registrations will not be accepted.</li>
        </ol>
        <button className='underline p-2'><Link to="/treasure/begin">Start</Link></button>
    </div>
    </div>
  )
}

export default Treasure
