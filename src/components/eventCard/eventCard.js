import React from 'react';
import Image from 'next/image';
import styles from './eventCard.module.css';

const EventCard = ({ image, eventName, desc, registerLink, old }) => {
  return (
    <div className={`${styles.card} ${old == 'TRUE' ? styles.old : undefined}`}>
      <img src={image} />
      <h2>{eventName}</h2>
      {/* <p>{desc && desc.length > 115 ? desc.slice(0, 115) + '...' : desc} </p> */}
      <p>{desc}</p>
      <a style={{ textDecoration: 'none' }} href={registerLink}>
        <div className={styles.registerBtn}>
          <span>Session Details</span>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
