import React from 'react';
import DeptLayout from './deptLayout';
import { members } from '../../data/members';
import { eventsArr } from '../../data/events';

const devos = () => {
  const coordArr = [];
  const subCoordArr = [];
  const devEvents = [];
  for (let i = 0; i < members[0].length; i++) {
    if (members[0][i].committee === 'Dev&OS') {
      coordArr.push({
        key: i + 1,
        coordName: members[0][i].name,
        coordImage: members[0][i].image,
        coordCommittee: members[0][i].committee,
        coordLinkedIn: members[0][i].linkedin,
        coordGitHub: members[0][i].github
      });
    }
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < members[1].length; i++) {
    if (members[1][i].committee === 'Dev&OS') {
      subCoordArr.push({
        key: i + 1,
        coordName: members[1][i].name,
        coordImage: members[1][i].image,
        coordCommittee: members[1][i].committee,
        coordLinkedIn: members[1][i].linkedin,
        coordGitHub: members[1][i].github
      });
    }
  }
  for (let i = 0; i < eventsArr.length; i++) {
    if (eventsArr[i].dept === 'Dev&OS') {
      devEvents.push(eventsArr[i]);
    }
  }

  const deptName = 'Development & Open Source';
  const deptCoordName = coordinators;
  const deptImage = '/home/NJACK.png';
  const deptDesc =
    "NJACK Dev and OS is a distinguished department with a primary focus on the realm of development and open source contributions. Our core activities revolve around conducting informative sessions and workshops on a wide range of topics such as web development, app development, game development, and open source contributions. These sessions are designed to enhance participants' knowledge and skills in their respective fields.\
		At NJACK Dev and OS, we are committed to creating a conducive environment for learning, skill development, and fostering a sense of camaraderie among developers. By organizing informative sessions, engaging events, and nurturing an active community, we aim to empower individuals in their pursuit of excellence in the field of development and open source contributions.";
  return (
    <DeptLayout
      deptName={deptName}
      deptCoordName={deptCoordName}
      deptImage={deptImage}
      deptDesc={deptDesc}
      eventsArr={devEvents}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
    />
  );
};

export default devos;
