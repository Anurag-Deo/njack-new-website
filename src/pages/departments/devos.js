import React from 'react'
import DeptLayout from './deptLayout'
import {members} from '../members'
import { eventsArr } from '../events'

const devos = () => {
	const deptName = 'Development & Open Source'
	const deptCoordName = 'Aditya Kumar and Sandeep Mishra'
	const deptImage = '/home/Njackdev.png'
	const deptDesc =
		'NJACK Dev and OS primarily focuses on the feild of development and open source contributions. We periodically take sessions on various topics like web development, app development, game development, open source contributions, etc. We also conduct various events like Hackathons, HackItOut etc. We also have a very active community of developers who are always ready to help each other.'

	// const eventsArr = [
	// 	{ key: 1, old: true, eventName: 'Workshop on Git and Github', desc: 'Git and github are important aspects of the open source contribution. This begginer friendly session primarily focuses on giving all the attendies basic knowledge of version control systems', image: 'https://www.freecodecamp.org/news/content/images/2022/07/git-github.png', registerLink: '#' },
	// 	{ key: 2, old: true, eventName: 'Workshop on HTML and CSS', desc: 'HTML and CSS are the basic fundamentals of web development. The knowledge of HTML and CSS helps to learn web development', image: 'https://png.pngitem.com/pimgs/s/206-2069813_file-css-and-html-css-logo-svg-hd.png', registerLink: '#' },
	// 	{ key: 3, old: true, eventName: 'Workshop on Introduction to Android Development', desc: 'Android is a fast growing market and the knowledge of android development helps in making cool looking apps on your own', image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1146429/retina_1708x683_0917-kotlin-boost-android-development-Waldek_Newsletter-02f7acf50c2d6c342af8ff367498b7b8.png', registerLink: '#' },
	// 	{ key: 4, old: true, eventName: 'Workshop on Game Development', desc: 'Games like BGMI, Valorant are quite exciting to play but its much more exciting to develop those games. In this session we will learn basics of game development', image:'https://www.pngkit.com/png/detail/296-2966473_mobile-game-development-mobile-game-development-png.png', registerLink: '#' },
	// ]

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
