import React from 'react';
import styles from './coordCard.module.css';
import Image from 'next/image';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const CoordCard = ({ coordName, coordImage, coordCommittee, coordLinkedIn, coordGitHub, coordCFHandle }) => {
  return (
    <div className={styles.coordCard}>
      <Image width={100} height={100} className={styles.coordImage} src={coordImage} alt="Image" />
      <div className={styles.coordName}>{coordName}</div>
      <p>{coordCommittee}</p>
      <div className={styles.coordIcon}>
        <a target="_blank" referrerPolicy="no-referrer" href={coordLinkedIn}>
          <BsLinkedin color="white" />
        </a>
        {coordGitHub!='NA' && (
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href={coordGitHub}
            style={{ marginLeft: '10px' }}>
            <BsGithub color="white" />
          </a>
        )}
        {coordCFHandle!='NA' && (
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href={coordCFHandle}
            style={{ marginLeft: '10px' }}>
			<Image src={"/home/Codeforces.png"} width={16} height={16} style={{filter: "invert(1)"}}/>
          </a>
        )}
      </div>
    </div>
  );
};

const SubCoordCard = ({ coordName, coordLinkedIn }) => {
  return (
    <div className={styles.subCoordCard}>
      <a href={coordLinkedIn} target="_blank" referrerPolicy="no-referrer">
        <BsLinkedin color="white" />
      </a>
      <p>{coordName}</p>
    </div>
  );
};

export { CoordCard, SubCoordCard };
