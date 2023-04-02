import React from 'react'
import styles from './deptCard.module.css'
const deptCard = ({deptName, deptImage, deptDesc, deptLink, bgColor}) => {
  return (
    <div>
      <div className={styles.deptName} style={{backgroundColor: bgColor}}>{deptName}</div>
      <div className={styles.deptcard} style={{backgroundColor: bgColor}}>
        <img src={deptImage} alt="Image" />
        <p>{deptDesc}</p>
        <a href={deptLink}>Go to Page</a>
      </div>
    </div>
  )
}

export default deptCard
