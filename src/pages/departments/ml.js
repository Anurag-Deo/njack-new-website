import React from 'react'
import DeptLayout from './deptLayout'
import { members } from '../../members'
import { eventsArr } from '../../events'

const ml = () => {

	const coordArr = []
	const subCoordArr = []
	const events = []
	for (let i = 0; i < members[0].length; i++) {
		if (members[0][i].committee === 'ML') {
			coordArr.push({
				key: i + 1,
				coordName: members[0][i].name,
				coordImage: members[0][i].image,
				coordCommitee: members[0][i].committee,
				coordLinkedIn: members[0][i].linkedin,
				coordGitHub: members[0][i].github
			})
		}
	}

	let coordinators = "";
	for (let item of coordArr) {
		coordinators += item.coordName + ", "
	}
	coordinators = coordinators.slice(0, -2);

	for (let i = 0; i < members[1].length; i++) {
		if (members[1][i].committee === 'ML') {
			subCoordArr.push({
				key: i + 1,
				coordName: members[1][i].name,
				coordImage: members[1][i].image,
				coordCommitee: members[1][i].committee,
				coordLinkedIn: members[1][i].linkedin,
				coordGitHub: members[1][i].github
			})
		}
	}
	for (let i = 0; i < eventsArr.length; i++) {
		if (eventsArr[i].dept === 'ML') {
			events.push(eventsArr[i])
		}
	}

	const deptName = 'Machine Learning'
	const deptCoordName = coordinators
	const deptImage = '/home/NJACK.png'
	const deptDesc = "The Machine Learning Department of NJACK is dedicated to exploring the vast field of artificial intelligence and machine learning. Through workshops, lectures, and practical sessions, this department equips members with the knowledge and tools required to tackle complex problems using machine learning algorithms. Students in this department delve into areas such as data preprocessing, model selection, and optimization techniques. By organizing hackathons and machine learning competitions, the Machine Learning Department provides opportunities for members to showcase their skills and creativity in this rapidly evolving domain."

	return (
		<DeptLayout
			deptName={deptName}
			deptCoordName={deptCoordName}
			deptImage={deptImage}
			deptDesc={deptDesc}
			eventsArr={events}
			coordArr={coordArr}
			subCoordArr={subCoordArr}
		/>
	)
}

export default ml
