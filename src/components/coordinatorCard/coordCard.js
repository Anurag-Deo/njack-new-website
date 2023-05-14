import React from 'react'
import styles from './coordCard.module.css'
const CoordCard = ({ coordName, coordImage, coordCommitee, coordLinkedIn, coordGitHub }) => {
	return (
		<div className={styles.coordCard}>
			<img className={styles.coordImage} src={coordImage} alt='Image' />
			<div className={styles.coordName}>{coordName}</div>
			<p>{coordCommitee}</p>
			<div className={styles.coordIcon}>
				<a href={coordLinkedIn}>
					<img src='/home/LinkedIn.png' alt='LinkedIn Page' />
				</a>
				<a href={coordGitHub}>
					<img src='/home/GitHub.png' alt='GitHub Page' />
				</a>
			</div>
		</div>
	)
}

const SubCoordCard = ({ coordName, coordLinkedIn }) => {
	return (
		<div className={styles.subCoordCard}>
			<div className={styles.coordIcon}>
				<a href={coordLinkedIn}>
					<img src='/home/LinkedIn.png' alt='LinkedIn Page' />
				</a>
			</div>
			<p>{coordName}</p>
		</div>
	)
}

export { CoordCard, SubCoordCard }
