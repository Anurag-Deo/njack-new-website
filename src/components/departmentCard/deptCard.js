import React from 'react';
import styles from './deptCard.module.css';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const DeptCard = ({ deptName, deptImage, deptDesc, deptLink, bgColor }) => {
  return (
    <div>
      <div className={styles.deptName} style={{ backgroundColor: bgColor }}>
        {deptName}
      </div>
      <div className={styles.deptcard} style={{ backgroundColor: bgColor, position: 'relative' }}>
        <img src={deptImage} alt="Image" />
        <p>{deptDesc}</p>
        <Link
          href={deptLink}
          style={{
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: '100px'
          }}
        >
          Know More
          <FiArrowUpRight size={21} />
        </Link>
      </div>
    </div>
  );
};

export default DeptCard;
