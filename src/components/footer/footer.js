import { useState } from 'react'
import styles from './footer.module.css'
const Footer = ({}) => {
	const [isVisible, setVisibility] = useState(false)
	const handleMouse = (event) => {
		setVisibility((current) => !current)
	}
	const handleClick = (event) => {
		setVisibility(false)
	}
	return (
		<footer onMouseLeave={handleClick} className={styles.footer}>
			<div>
				<div>
					<h4>NJACK</h4>
					<a href='mailto:njack@iitp.ac.in'>njack@iitp.ac.in</a>
					<p>+91 XXXXX XXXXX</p>
				</div>
				<div>
					<p>IIT Patna</p>
					<p>Address</p>
				</div>
			</div>
			<div>
				<div>
					{isVisible && <DeptDrawer isVisible={isVisible} />}
					<h3>Important Links</h3>
					<a href='\resources'>Resources</a>
					<br />
					<section onClick={handleMouse}>
						<a style={{ cursor: 'pointer' }}>Departments</a>
					</section>
					<a href='\gallery'>Gallery</a>
					<br />
					<a href='\contactus'>Contact</a>
				</div>
			</div>
			<div>
				<div>
					<h3>Social Links</h3>
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
			</div>
		</footer>
	)
}

const DeptDrawer = ({ isVisible }) => {
	return (
		<section className={`${styles.drawer} ${isVisible ? styles.isVisible : ''}`}>
			<a href='\departments\cp'>Competitive Programming</a>
			<a href='\departments\devos'>Dev & OS</a>
			<a href='\departments\ml'>Machine Learning</a>
			<a href='\departments\cybersec'>Cyber Securities</a>
		</section>
	)
}

export default Footer
