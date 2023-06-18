import React from 'react'
import styles from './deptCard.module.css'
import Link from 'next/link'
const deptCard = ({deptName, deptImage, deptDesc, deptLink, bgColor}) => {
  return (
    <div>
      <div className={styles.deptName} style={{backgroundColor: bgColor}}>{deptName}</div>
      <div className={styles.deptcard} style={{backgroundColor: bgColor}}>
        <img src={deptImage} alt="Image" />
        <p>{deptDesc}</p>
        <Link href={deptLink}>Go to Page</Link>
      </div>
    </div>
  )
}

export default deptCard
