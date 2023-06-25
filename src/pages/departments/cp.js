import React from 'react';
import DeptLayout from './(layout)';
import events from '@/data/events';
import subCoordsCP from '@/data/sub-coordinators';
import coordCP from '@/data/coordinators';

const CP = () => {
  const coordArr = [];
  const subCoordArr = [];
  const eventsCP = [];
  for (let i = 0; i < coordCP.length; i++) {
    if (coordCP[i].committee === 'CP') {
      coordArr.push({
        key: i + 1,
        coordName: coordCP[i].name,
        coordImage: coordCP[i].image,
        coordCommittee: coordCP[i].committee,
        coordLinkedIn: coordCP[i].linkedin,
        coordGitHub: coordCP[i].github
      });
    }
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < subCoordsCP.length; i++) {
    if (subCoordsCP[i].committee === 'CP') {
      subCoordArr.push({
        key: i + 1,
        coordName: subCoordsCP[i].name,
        coordImage: subCoordsCP[i].image,
        coordCommittee: subCoordsCP[i].committee,
        coordLinkedIn: subCoordsCP[i].linkedin,
        coordGitHub: subCoordsCP[i].github
      });
    }
  }
  for (let i = 0; i < events.length; i++) {
    if (events[i].dept === 'CP') {
      eventsCP.push(events[i]);
    }
  }

  const deptName = 'Competitive Programming';
  const deptCoordName = coordinators;
  const deptImage = '/home/NJACK.png';
  const deptDesc =
    "The Competitive Programming Department at NJACK is committed to honing students' problem-solving skills, algorithmic thinking, and programming prowess. Through regular coding contests, workshops, and practice sessions, this department helps participants develop their abilities to solve complex programming challenges efficiently. By organizing competitions and training sessions, the Competitive Programming Department ensures that members are well-prepared to participate in national and international coding competitions, representing IIT Patna with excellence.";

  return (
    <DeptLayout
      deptName={deptName}
      deptCoordName={deptCoordName}
      deptImage={deptImage}
      deptDesc={deptDesc}
      events={eventsCP}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
    />
  );
};

export default CP;
