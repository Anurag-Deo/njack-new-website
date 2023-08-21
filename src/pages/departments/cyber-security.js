import React from 'react';
import DeptLayout from './_layout';

const CyberSec = ({ coords, subcoords, events }) => {
  const coordCyberSec = coords;
  const subCoordCyberSec = subcoords;
  const coordArr = [];
  const subCoordArr = [];
  const eventsCyber = [];
  for (let i = 0; i < coordCyberSec.length; i++) {
    if (coordCyberSec[i].committee === 'Cybersec') {
      coordArr.push({
        key: i + 1,
        coordName: coordCyberSec[i].name,
        coordImage: coordCyberSec[i].image,
        coordCommittee: coordCyberSec[i].committee,
        coordLinkedIn: coordCyberSec[i].linkedin,
        coordGitHub: coordCyberSec[i].github,
		coordCFHandle: coordCyberSec[i].cfhandle
      });
    }
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < subCoordCyberSec.length; i++) {
    if (subCoordCyberSec[i].committee === 'Cybersec') {
      subCoordArr.push({
        key: i + 1,
        coordName: subCoordCyberSec[i].name,
        coordImage: subCoordCyberSec[i].image,
        coordCommittee: subCoordCyberSec[i].committee,
        coordLinkedIn: subCoordCyberSec[i].linkedin,
        coordGitHub: subCoordCyberSec[i].github,
		coordCFHandle: subCoordCyberSec[i].cfhandle
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
