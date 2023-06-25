import React from 'react';
import styles from './coordCard.module.css';
import Image from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const CoordCard = ({ coordName, coordImage, coordCommittee, coordLinkedIn, coordGitHub }) => {
  return (
    <div className={styles.coordCard}>
      <Image width={100} height={100} className={styles.coordImage} src={coordImage} alt="Image" />
      <div className={styles.coordName}>{coordName}</div>
      <p>{coordCommittee}</p>
      <div className={styles.coordIcon}>
        <a target="_blank" referrerPolicy="no-referrer" href={coordLinkedIn}>
          <BsLinkedin color="white" />
        </a>
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href={coordGitHub}
          style={{ marginLeft: '10px' }}
        >
          <BsGithub color="white" />
        </a>
      </div>
    </div>
  );
};

const SubCoordCard = ({ coordName, coordLinkedIn }) => {
  return (
    <div className={styles.subCoordCard}>
      {/* <div className={styles.coordIcon}> */}
      <a href={coordLinkedIn} target="_blank" referrerPolicy="no-referrer">
        <BsLinkedin color="white" />
      </a>
      {/* </div> */}
      <p>{coordName}</p>
    </div>
  );
};

export { CoordCard, SubCoordCard };
