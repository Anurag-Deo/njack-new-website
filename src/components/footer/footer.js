import { useState } from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
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
						<Link href='mailto:njack@iitp.ac.in'>njack@iitp.ac.in</Link>
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
						<Link href='\resources'>Resources</Link>
					<br />
					<section onClick={handleMouse}>
							<Link style={{ cursor: 'pointer' }}>Departments</Link>
					</section>
						<Link href='\gallery'>Gallery</Link>
					<br />
						<Link href='\contactus'>Contact</Link>
				</div>
			</div>
			<div>
				<div>
					<h3>Social Links</h3>
						<Link href='https://www.facebook.com/njack.iitp/'>
						<img src='\home\Facebook.png' />
						Facebook
						</Link>
					<br />
						<Link href='https://www.instagram.com/njackiitp/'>
						<img src='\home\Instagram.png' />
						Instagram
						</Link>
					<br />
						<Link href='https://in.linkedin.com/company/njack-iit-patna'>
						<img src='\home\LinkedIn.png' />
						LinkedIn
						</Link>
				</div>
			</div>
		</footer>
	)
}

const DeptDrawer = ({ isVisible }) => {
	return (
		<section className={`${styles.drawer} ${isVisible ? styles.isVisible : ''}`}>
			<Link href='/departments/cp'>Competitive Programming</Link>
			<Link href='/departments/devos'>Dev & OS</Link>
			<Link href='/departments/ml'>Machine Learning</Link>
			<Link href='/departments/cybersec'>Cyber Securities</Link>
		</section>
	)
}

export default Footer
