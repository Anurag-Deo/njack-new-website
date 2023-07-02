import DeptLayout from './_layout';
import events from '@/data/events';
// import coordDevOS from '@/data/coordinators';
// import subCoordDevOS from '@/data/sub-coordinators';

const DevOS = ({coords, subcoords}) => {
  const coordDevOS = coords;
  const subCoordDevOS = subcoords;
  const coordArr = [];
  const subCoordArr = [];
  const devEvents = [];
  for (let i = 0; i < coordDevOS.length; i++) {
    if (coordDevOS[i].committee === 'Dev&OS') {
      coordArr.push({
        key: i + 1,
        coordName: coordDevOS[i].name,
        coordImage: coordDevOS[i].image,
        coordCommittee: coordDevOS[i].committee,
        coordLinkedIn: coordDevOS[i].linkedin,
        coordGitHub: coordDevOS[i].github
      });
    }
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0; i < subCoordDevOS.length; i++) {
    if (subCoordDevOS[i].committee === 'Dev&OS') {
      subCoordArr.push({
        key: i + 1,
        coordName: subCoordDevOS[i].name,
        coordImage: subCoordDevOS[i].image,
        coordCommittee: subCoordDevOS[i].committee,
        coordLinkedIn: subCoordDevOS[i].linkedin,
        coordGitHub: subCoordDevOS[i].github
      });
    }
  }
  for (let i = 0; i < events.length; i++) {
    if (events[i].dept === 'Dev&OS') {
      devEvents.push(events[i]);
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
      events={devEvents}
      coordArr={coordArr}
      subCoordArr={subCoordArr}
      pageLink="/departments/dev-os"
    />
  );
};

export default DevOS;
