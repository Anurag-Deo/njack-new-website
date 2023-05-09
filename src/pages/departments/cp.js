import React from 'react'
import DeptLayout from './deptLayout'

const cp = () => {
	const deptName = 'Competitive Programming'
	const deptCoordName = 'Swapnil'
	const deptImage = '/home/Instagram.png'
	const deptDesc =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

	const eventsArr = [
		{ key: 1, old: true, eventName: 'EventName', desc: 'Lorem ipsum do or sit amet consectetur adipiscing elit,', image: '/home/heroImage.png', registerLink: '#' },
		{ key: 2, old: false, eventName: 'EventName', desc: 'Lorem ipsum do or sit amet consectetur adipiscing elit,', image: '/home/heroImage.png', registerLink: '#' },
		{ key: 3, old: false, eventName: 'EventName', desc: 'Lorem ipsum do or sit amet consectetur adipiscing elit,', image: '/home/heroImage.png', registerLink: '#' },
	]

	const coordName = 'Full Name'
	const coordImage = '/home/coordImage.png'
	const coordLinkedIn = 'mark-zuckerberg-618bba58'
	const coordGitHub = 'Anurag-Deo'

	const subCoordArr = [
		{ key: 1, coordName: 'Full Name', coordImage: '/home/coordImage.png', coordCommitee: 'Subcoordinator', coordLinkedIn: 'mark-zuckerberg-618bba58', coordGitHub: 'Anurag-Deo' },
		{ key: 2, coordName: 'Full Name', coordImage: '/home/coordImage.png', coordCommitee: 'Subcoordinator', coordLinkedIn: 'mark-zuckerberg-618bba58', coordGitHub: 'Anurag-Deo' },
		{ key: 3, coordName: 'Full Name', coordImage: '/home/coordImage.png', coordCommitee: 'Subcoordinator', coordLinkedIn: 'mark-zuckerberg-618bba58', coordGitHub: 'Anurag-Deo' },
		{ key: 4, coordName: 'Full Name', coordImage: '/home/coordImage.png', coordCommitee: 'Subcoordinator', coordLinkedIn: 'mark-zuckerberg-618bba58', coordGitHub: 'Anurag-Deo' },
	]

	return (
		<DeptLayout
			deptName={deptName}
			deptCoordName={deptCoordName}
			deptImage={deptImage}
			deptDesc={deptDesc}
			eventsArr={eventsArr}
			coordName={coordName}
			coordImage={coordImage}
			coordLinkedIn={coordLinkedIn}
			coordGitHub={coordGitHub}
			subCoordArr={subCoordArr}
		/>
	)
}

export default cp
