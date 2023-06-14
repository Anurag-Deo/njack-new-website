import React from 'react'
import DeptLayout from './deptLayout'
import { members } from '../../members'
import { eventsArr } from '../../events'

const cp = () => {
	const coordArr = []
	const subCoordArr = []
	const events = []
	for (let i = 0; i < members[0].length; i++) {
		if (members[0][i].committee === 'CP') {
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
		if (members[1][i].committee === 'CP') {
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
		if (eventsArr[i].dept === 'CP') {
			events.push(eventsArr[i])
		}
	}

	const deptName = 'Competitive Programming'
	const deptCoordName = coordinators
	const deptImage = '/home/Instagram.png'
	const deptDesc = "The Competitive Programming Department at NJACK is committed to honing students' problem-solving skills, algorithmic thinking, and programming prowess. Through regular coding contests, workshops, and practice sessions, this department helps participants develop their abilities to solve complex programming challenges efficiently. By organizing competitions and training sessions, the Competitive Programming Department ensures that members are well-prepared to participate in national and international coding competitions, representing IIT Patna with excellence."

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

export default cp
