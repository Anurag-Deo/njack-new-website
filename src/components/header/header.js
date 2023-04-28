import React from 'react'
import styles from './header.module.css'
const Header = ({ selected }) => {
	return (
		<header className={styles.header}>
			<img loading='lazy' src='/home/NJACK logo.svg' alt='NJACK Logo' />
			<div>
				<a id={selected == 'Home' ? styles.selected : undefined} href='\#'>
					HOME
				</a>
				{/* 450 for Home + 4<a href='\resources\'>RESOURCES</a> */}
				{/* 360 for Home + 3*/}
				<a id={selected == 'Departments' ? styles.selected : undefined} href='\departments\'>
					DEPARTMENTS
				</a>
				<a id={selected == 'Gallery' ? styles.selected : undefined} href='\gallery'>
					GALLERY
				</a>
				<a id={selected == 'Contact' ? styles.selected : undefined} href='\contactus'>
					CONTACT
				</a>
			</div>
		</header>
	)
}

export default Header
