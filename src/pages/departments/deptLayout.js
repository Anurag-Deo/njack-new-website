import React from 'react'
import styles from '../../styles/department.module.css'
import { EventCard, CoordCard, Footer, Header } from '@/components'

const DeptLayout = ({ deptName, deptCoordName, deptImage, deptDesc, eventsArr, coordArr, subCoordArr }) => {
	return (
		<>
			<Header selected={'Departments'} />
			<div className={styles.parentDiv}>
				<DeptTitle deptName={deptName} deptCoordName={deptCoordName} deptImage={deptImage} />
				<DeptDescription deptDesc={deptDesc} />
				<EventCards eventsArr={eventsArr} />
				<CoordSection coordArr={coordArr} subCoordArr={subCoordArr} />
				<Footer />
			</div>
		</>
	)
}

const DeptTitle = ({ deptName, deptCoordName, deptImage }) => {
	return (
		<div className={styles.deptTitle}>
			<div>
				<h1>{deptName}</h1>
				<h4>Coordinator: {deptCoordName}</h4>
			</div>
			<img src={deptImage} />
		</div>
	)
}

const DeptDescription = ({ deptDesc }) => {
	return (
		<div className={styles.deptDesc}>
			<p>{deptDesc}</p>
		</div>
	)
}

const EventCards = ({ eventsArr }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.sectionHeading}>Events</h2>
			<div className={styles.cardSection}>
				{eventsArr ? eventsArr.map((event) => {
					return <EventCard key={event.key} old={event.old} eventName={event.eventName} desc={event.desc} image={event.image} registerLink={event.registerLink} />
				}): <h2>No Events</h2>}
			</div>
		</div>
	)
}

const CoordSection = ({ coordArr, subCoordArr }) => {
	return (
		<div className={styles.section}>
			<h2 className={styles.sectionHeading}>Team</h2>
			<div className={styles.cardSectionTeams}>
				{coordArr?coordArr.map((coord) => {
					return <CoordCard key={coord.key} coordName={coord.coordName} coordImage={"https://drive.google.com/uc?export=view&id="+coord.coordImage} coordCommitee={coord.coordCommitee} coordLinkedIn={coord.coordLinkedIn} coordGitHub={coord.coordGitHub} />
				}): <h2>No Coordinators</h2>}
			</div>
			<div className={styles.cardSectionTeams}>
				{subCoordArr?subCoordArr.map((subCoord) => {
					return <CoordCard key={subCoord.key} coordName={subCoord.coordName} coordImage={"https://drive.google.com/uc?export=view&id="+subCoord.coordImage} coordCommitee={subCoord.coordCommitee} coordLinkedIn={subCoord.coordLinkedIn} coordGitHub={subCoord.coordGitHub} />
				}): <h2>No Sub Coordinators</h2>}
			</div>
		</div>
	)
}

export default DeptLayout
