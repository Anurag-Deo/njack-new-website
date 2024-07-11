
import React from 'react';
import './midsem.css'; 
import { Link } from 'react-router-dom';

const Midsem = () => {
  const examSchedule = [
    { subject: 'HS', date: '2024-07-15', time: '09:00 AM' },
    { subject: 'MA101', date: '2024-07-16', time: '09:00 AM' },
    { subject: 'PH103', date: '2024-07-17', time: '09:00 PM' },
    { subject: 'EE101', date: '2024-07-18', time: '09:00 AM' },
  ];

  return (
    <div className="exam-schedule">
      <h1>Mid-Semester Exam Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {examSchedule.map((exam, index) => (
            <tr key={index}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button className='p-2'><Link to="/midsem/HS">Give HS Exam</Link></button>
        <button className='p-2'><Link to="/midsem/PH103">Give PH103 Exam</Link></button>
        <button className='p-2'><Link to="/midsem/EE101">Give EE101 Exam</Link></button>
        <button className='p-2'><Link to="/midsem/MA101">Give MA101 Exam</Link></button>
        <button className='p-2 blink'><Link to="/subcoord-quiz">Leave exams to play guess the sub coord</Link></button>
      </div>
    </div>
  );
};

export default Midsem;

