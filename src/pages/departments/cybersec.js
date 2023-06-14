import React from 'react'
import DeptLayout from './deptLayout'
import { members } from '../../members'
import { eventsArr } from '../../events'

const cybersec = () => {
	const coordArr = []
	const subCoordArr = []
	const events = []
	for (let i = 0; i < members[0].length; i++) {
		if (members[0][i].committee === 'Cybersec') {
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
		if (members[1][i].committee === 'Cybersec') {
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
		if (eventsArr[i].dept === 'Cybersec') {
			events.push(eventsArr[i])
		}
	}
	const deptName = 'Cyber Security'
	const deptCoordName = coordinators
	const deptImage = '/home/Instagram.png'
	const deptDesc = "The Cybersecurity Department at NJACK focuses on promoting awareness and understanding of the crucial field of cybersecurity. This department conducts workshops, seminars, and hands-on sessions to educate members about various cybersecurity threats, techniques, and countermeasures. Through practical exercises and simulated scenarios, students gain insights into ethical hacking, network security, cryptography, and more. The Cybersecurity Department also emphasizes the significance of ethical practices in cybersecurity and encourages members to contribute to the development of secure systems and protect against potential vulnerabilities."

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

export default cybersec
