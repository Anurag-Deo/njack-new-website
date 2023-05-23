import React from 'react'
import DeptLayout from './deptLayout'
import {members} from '../members'
import { eventsArr } from '../events'

const devos = () => {

	const coordArr = []
	const subCoordArr = []
	const devEvents = []
	for(let i=0;i<members[0].length;i++){
		if(members[0][i].committee === 'Dev&OS'){
			coordArr.push({
				key: i+1,
				coordName: members[0][i].name,
				coordImage: members[0][i].image,
				coordCommitee: members[0][i].committee,
				coordLinkedIn: members[0][i].linkedin,
				coordGitHub: members[0][i].github
			})
		}
	}

	let coordinators="";
	for(let item of coordArr){
		coordinators += item.coordName+", "
	}
	coordinators = coordinators.slice(0, -2);

	for(let i=0;i<members[1].length;i++){
		if(members[1][i].committee === 'Dev&OS'){
			subCoordArr.push({
				key: i+1,
				coordName: members[1][i].name,
				coordImage: members[1][i].image,
				coordCommitee: members[1][i].committee,
				coordLinkedIn: members[1][i].linkedin,
				coordGitHub: members[1][i].github
			})
		}
	}
	for(let i=0;i<eventsArr.length;i++){
		if(eventsArr[i].dept === 'Dev&OS'){
			devEvents.push(eventsArr[i])
		}
	}

	const deptName = 'Development & Open Source'
	const deptCoordName = coordinators
	const deptImage = '/home/Njackdev.png'
	const deptDesc =
		'NJACK Dev and OS primarily focuses on the feild of development and open source contributions. We periodically take sessions on various topics like web development, app development, game development, open source contributions, etc. We also conduct various events like Hackathons, HackItOut etc. We also have a very active community of developers who are always ready to help each other.'

	return (
		<DeptLayout
			deptName={deptName}
			deptCoordName={deptCoordName}
			deptImage={deptImage}
			deptDesc={deptDesc}
			eventsArr={devEvents}
			coordArr={coordArr}
			subCoordArr={subCoordArr}
		/>
	)
}

export default devos
