import React from 'react'
import styles from './coordCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CoordCard = ({ coordName, coordImage, coordCommittee, coordLinkedIn, coordGitHub }) => {
	return (
		<div className={styles.coordCard}>
			<Image width={100} height={100} className={styles.coordImage} src={coordImage} alt='Image' />
			<div className={styles.coordName}>{coordName}</div>
			<p>{coordCommittee}</p>
			<div className={styles.coordIcon}>
				<Link href={coordLinkedIn}>
					<img src='/home/LinkedIn.png' alt='LinkedIn Page' />
				</Link>
				<Link href={coordGitHub}>
					<img src='/home/GitHub.png' alt='GitHub Page' />
				</Link>
			</div>
		</div>
	)
}

const SubCoordCard = ({ coordName, coordLinkedIn }) => {
	return (
		<div className={styles.subCoordCard}>
			<div className={styles.coordIcon}>
				<Link href={coordLinkedIn}>
					<img src='/home/LinkedIn.png' alt='LinkedIn Page' />
				</Link>
			</div>
			<p>{coordName}</p>
		</div>
	)
}

export { CoordCard, SubCoordCard }
