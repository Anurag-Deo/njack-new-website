import { React, useState } from 'react'
import styles from './header.module.css'
const HeaderComp = ({ selected }) => {
	const [isDrawerVisible, setDrawerVisibility] = useState(false)
	const [isResourceDrawerVisible, setResourceDrawerVisibility] = useState(false)
	const drawerHandleMouse = (event) => {
		setDrawerVisibility((current) => !current)
	}
	const resourcedrawerHandleMouse = (event) => {
		setResourceDrawerVisibility((current) => !current)
	}
	const [isMenuVisible, setMenuVisibility] = useState(false)
	const menuHandleMouseClick = (event) => {
		setMenuVisibility((current) => !current)
	}
	
	const menuHandleMouseLeave = (event) => {
		setMenuVisibility(false)
		setDrawerVisibility(false)
		setResourceDrawerVisibility(false)
	}
	
	return (
		<>
			<a style={{ marginLeft: '5%' }} href='\#'>
				<img id={styles.logo} loading='lazy' src='/home/NJACK logo.svg' alt='NJACK Logo' />
			</a>
			<section>
				<a id={selected == 'Home' ? styles.selected : undefined} href='\#'>
					HOME
				</a>
				{/* 480 for Home + 4 */}
				{/* Change @media (max-width: __px) accordingly <a id={selected == 'Resources' ? styles.selected : undefined} href='\resources'>
					RESOURCES
				</a> */}
				{/* 400 for Home + 3*/}
				<div onMouseEnter={drawerHandleMouse} onMouseLeave={drawerHandleMouse} style={{ display: 'flex' }}>
					<a id={selected == 'Departments' ? styles.selected : undefined} href='#'>
						DEPARTMENTS
					</a>
					{isDrawerVisible && <DeptDrawer isVisible={isDrawerVisible} />}
				</div>
				<div onMouseEnter={resourcedrawerHandleMouse} onMouseLeave={resourcedrawerHandleMouse} style={{ display: 'flex' }}>
					<a id={selected == 'Resources' ? styles.selected : undefined} href='#'>
						RESOURCES
					</a>
					{isResourceDrawerVisible && <ResourceDrawer isVisible={isResourceDrawerVisible} />}
				</div>
				<a id={selected == 'Gallery' ? styles.selected : undefined} href='\gallery'>
					GALLERY
				</a>
				<a id={selected == 'Contact' ? styles.selected : undefined} href='\contactus'>
					CONTACT
				</a>
			</section>
			<div id={styles.menuButton} onMouseLeave={menuHandleMouseLeave}>
				<img loading='lazy' src='/home/MenuIcon.png' alt='Menu' onClick={menuHandleMouseClick} />
				{isMenuVisible && <MenuDrawer selected={selected} isDrawerVisible={isDrawerVisible} drawerHandleMouse={drawerHandleMouse} resourcedrawerHandleMouse={resourcedrawerHandleMouse} isResourceDrawerVisible={isResourceDrawerVisible} />}
			</div>
			{/* {isMenuVisible && <MenuDrawer selected={selected} vertical={true} />} */}
		</>
	)
}

const MenuDrawer = ({ selected, isDrawerVisible, drawerHandleMouse, resourcedrawerHandleMouse, isResourceDrawerVisible }) => {
	return (
		<section id={styles.menuDrawerVisible}>
			<a id={selected == 'Home' ? styles.selected : undefined} href='\#'>
				HOME
			</a>
			{/* 480 for Home + 4 */}
			{/* Change @media (max-width: __px) accordingly <a id={selected == 'Resources' ? styles.selected : undefined} href='\resources'>
					RESOURCES
				</a> */}
			{/* 400 for Home + 3*/}
			<div onMouseEnter={drawerHandleMouse} onMouseLeave={drawerHandleMouse} style={{ display: 'flex' }}>
				<a id={selected == 'Departments' ? styles.selected : undefined} href='#'>
					DEPARTMENTS
				</a>
				{isDrawerVisible && <DeptDrawer isVisible={isDrawerVisible} />}
			</div>
			<div onMouseEnter={resourcedrawerHandleMouse} onMouseLeave={resourcedrawerHandleMouse} style={{ display: 'flex' }}>
				<a id={selected == 'Resources' ? styles.selected : undefined} href='#'>
					RESOURCES
				</a>
				{isResourceDrawerVisible && <ResourceDrawer isVisible={isResourceDrawerVisible} />}
			</div>
			<a id={selected == 'Gallery' ? styles.selected : undefined} href='\gallery'>
				GALLERY
			</a>
			<a id={selected == 'Contact' ? styles.selected : undefined} href='\contactus'>
				CONTACT
			</a>
		</section>
	)
}

const DeptDrawer = ({ isVisible }) => {
	return (
		<div className={`${styles.drawer} ${isVisible ? styles.isVisible : ''}`}>
			<a href='\departments\cp'>Competitive Programming</a>
			<a href='\departments\devos'>Dev & OS</a>
			<a href='\departments\ml'>Machine Learning</a>
			<a href='\departments\cybersec'>Cyber Securities</a>
		</div>
	)
}
const ResourceDrawer = ({ isVisible }) => {
	return (
		<div className={`${styles.resourcedrawer} ${isVisible ? styles.isVisible : ''}`}>
			<a href='\resources\cp_resources'>Competitive Programming Resources</a>
			<a href='\resources\dev_resources'>Dev & OS Resources</a>
			<a href='\resources\ml_resources'>Machine Learning Resources</a>
			<a href='\resources\cybersec_resources'>Cyber Securities Resources</a>
		</div>
	)
}

const Header = ({ selected }) => {
	return (
		<>
			<header className={styles.header}>
				<HeaderComp selected={selected} />
			</header>
			<header className={styles.header} id={styles.copy}>
				<HeaderComp selected={selected} />
			</header>
		</>
	)
}

export default Header
