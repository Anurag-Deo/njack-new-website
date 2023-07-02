import React from 'react';
import DeptLayout from './_layout';

const ML = ({ coords, subcoords, events }) => {
  const coordML = coords;
  const subCoordsML = subcoords;
  const coordArr = [];
  const subCoordArr = [];
  const eventsML = [];
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
  for (let i = 0; i < events.length; i++) {
    if (events[i].dept === 'ML') {
      eventsML.push(events[i]);
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
      events={eventsML}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      pageLink='/departments/ml'
    />
  );
};

export default ML;
