import React from 'react'
import DeptLayout from './deptLayout'
import {members} from '../members'
import { eventsArr } from '../events'

const ml = () => {
	const deptName = 'Machine Learning'
	const deptCoordName = 'Rishikesh Devnathan'
	const deptImage = '/home/Instagram.png'
	const deptDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


	const coordArr = []
	const subCoordArr = []
	const events = []
	for(let i=0;i<members[0].length;i++){
		if(members[0][i].committee === 'ML'){
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
	for(let i=0;i<members[1].length;i++){
		if(members[1][i].committee === 'ML'){
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
		if(eventsArr[i].dept === 'ML'){
			events.push(eventsArr[i])
		}
	}

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
