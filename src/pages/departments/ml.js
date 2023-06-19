import React from 'react';
import DeptLayout from './deptLayout';
import { eventsArr } from '../../data/events';
import subCoordsML from "@/data/sub-coordinators";
import coordML from "@/data/coordinators";

const ml = () => {
  const coordArr = [];
  const subCoordArr = [];
  const events = [];
  for (let i = 0; i < coordML.length; i++) {
    if (coordML[i].committee === 'ML') {
      coordArr.push({
        key: i + 1,
        coordName: coordML[i].name,
        coordImage: coordML[i].image,
        coordCommittee: coordML[i].committee,
        coordLinkedIn: coordML[i].linkedin,
        coordGitHub: coordML[i].github
      });
    }
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < subCoordsML.length; i++) {
    if (subCoordsML[i].committee === 'ML') {
      subCoordArr.push({
        key: i + 1,
        coordName: subCoordsML[i].name,
        coordImage: subCoordsML[i].image,
        coordCommittee: subCoordsML[i].committee,
        coordLinkedIn: subCoordsML[i].linkedin,
        coordGitHub: subCoordsML[i].github
      });
    }
  }
  for (let i = 0; i < eventsArr.length; i++) {
    if (eventsArr[i].dept === 'ML') {
      events.push(eventsArr[i]);
    }
  }

  const deptName = 'Machine Learning';
  const deptCoordName = coordinators;
  const deptImage = '/home/NJACK.png';
  const deptDesc =
    'The Machine Learning Department of NJACK is dedicated to exploring the vast field of artificial intelligence and machine learning. Through workshops, lectures, and practical sessions, this department equips members with the knowledge and tools required to tackle complex problems using machine learning algorithms. Students in this department delve into areas such as data preprocessing, model selection, and optimization techniques. By organizing hackathons and machine learning competitions, the Machine Learning Department provides opportunities for members to showcase their skills and creativity in this rapidly evolving domain.';

  return (
    <DeptLayout
      deptName={deptName}
      deptCoordName={deptCoordName}
      deptImage={deptImage}
      deptDesc={deptDesc}
      eventsArr={events}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
    />
  );
};

export default ml;
