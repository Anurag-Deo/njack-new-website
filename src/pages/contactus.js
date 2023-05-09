import { Footer, Header } from '@/components'
import React from 'react'
import styles from '../styles/contactus.module.css'
import { Map, Marker, ZoomControl } from 'pigeon-maps'

const contactus = () => {
	const mapCenter = [25.5372633, 84.8472938]

	return (
		<>
			<Header selected={'Contact'} />
			<div className={styles.parentDiv}>
				<div className={styles.sectionHeading}>
					<h2>Contact Us</h2>
				</div>
				<div className={styles.body}>
					<section className={styles.leftSection}>
						<h2>NJACK IIT Patna</h2>
						<a href='mailto:njack@iitp.ac.in'>njack@iitp.ac.in</a>
						<p>+91 XXXXX XXXXX</p>
						<br />
						<p>Address</p>
						<p id={styles.address}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<br />
						<div id={styles.social}>
							<p>Social Media</p>
							<a href='https://www.facebook.com/njack.iitp/'>
								<img src='\home\Facebook.png' />
								Facebook
							</a>
							<br />
							<a href='https://www.instagram.com/njackiitp/'>
								<img src='\home\Instagram.png' />
								Instagram
							</a>
							<br />
							<a href='https://in.linkedin.com/company/njack-iit-patna'>
								<img src='\home\LinkedIn.png' />
								LinkedIn
							</a>
						</div>
					</section>
					<section className={styles.rightSection}>
						<Map height={'100%'} defaultCenter={mapCenter} defaultZoom={10}>
							<ZoomControl />
							<Marker width={20} anchor={mapCenter}>
								<Marker width={20} anchor={mapCenter} />
								<br />
								<p>IIT, Patna</p>
							</Marker>
						</Map>
					</section>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default contactus
