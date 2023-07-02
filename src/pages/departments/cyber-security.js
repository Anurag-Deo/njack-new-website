import React from 'react';
import DeptLayout from './_layout';
import events from '../../data/events';
// import cyberSecCoord from '@/data/coordinators';
// import cyberSecSubCoord from '@/data/sub-coordinators';

const CyberSec = ({ coords, subcoords }) => {
  const cyberSecCoord = coords;
  const cyberSecSubCoord = subcoords;
  const coordArr = [];
  const subCoordArr = [];
  const eventsCyber = [];
  for (let i = 0; i < cyberSecCoord.length; i++) {
    if (cyberSecCoord[i].committee === 'Cybersec') {
      coordArr.push({
        key: i + 1,
        coordName: cyberSecCoord[i].name,
        coordImage: cyberSecCoord[i].image,
        coordCommittee: cyberSecCoord[i].committee,
        coordLinkedIn: cyberSecCoord[i].linkedin,
        coordGitHub: cyberSecCoord[i].github
      });
    }
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < cyberSecSubCoord.length; i++) {
    if (cyberSecSubCoord[i].committee === 'Cybersec') {
      subCoordArr.push({
        key: i + 1,
        coordName: cyberSecSubCoord[i].name,
        coordImage: cyberSecSubCoord[i].image,
        coordCommittee: cyberSecSubCoord[i].committee,
        coordLinkedIn: cyberSecSubCoord[i].linkedin,
        coordGitHub: cyberSecSubCoord[i].github
      });
    }
  }
  for (let i = 0; i < events.length; i++) {
    if (events[i].dept === 'Cybersec') {
      eventsCyber.push(events[i]);
    }
  }
  const deptName = 'Cyber Security';
  const deptCoordName = coordinators;
  const deptImage = '/home/NJACK.png';
  const deptDesc =
    'The Cybersecurity Department at NJACK focuses on promoting awareness and understanding of the crucial field of cybersecurity. This department conducts workshops, seminars, and hands-on sessions to educate members about various cybersecurity threats, techniques, and countermeasures. Through practical exercises and simulated scenarios, students gain insights into ethical hacking, network security, cryptography, and more. The Cybersecurity Department also emphasizes the significance of ethical practices in cybersecurity and encourages members to contribute to the development of secure systems and protect against potential vulnerabilities.';

  return (
    <DeptLayout
      deptName={deptName}
      deptCoordName={deptCoordName}
      deptImage={deptImage}
      deptDesc={deptDesc}
      events={eventsCyber}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      pageLink="/departments/cyber-security"
    />
  );
};

export default CyberSec;
