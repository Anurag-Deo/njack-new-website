import { Header } from '@/components';
import React from 'react';
import styles from '../styles/contactus.module.css';
import Background from '@/components/Background';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const ContactUs = () => {
  const mapCenter = [25.5372633, 84.8472938];
  return (
    <>
      <Header selected={'Contact'} />
      <Background />
      <div className={styles.parentDiv}>
        <div className={styles.sectionHeading}>
          <h2>Contact Us</h2>
        </div>
        <div className={styles.body}>
          <section className={styles.leftSection}>
            <h2>NJACK IIT Patna</h2>
            <a href="mailto:njack@iitp.ac.in">njack@iitp.ac.in</a>
            <p>+91 63880 17215</p>
            <br />
            <p>Address</p>
            <p id={styles.address}>Gymkhana, Indian Institute of Technology Patna, Bihta, Bihar</p>
            <br />
            <p>Social Media</p>
            <div className={styles.social}>
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.facebook.com/njack.iitp/"
              >
                <BsFacebook />
              </a>
              <br />
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.instagram.com/njackiitp/"
              >
                <BsInstagram />
              </a>
              <br />
              <a
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://in.linkedin.com/company/njack-iit-patna"
              >
                <BsLinkedin />
              </a>
            </div>
          </section>
          <section className={styles.rightSection}>
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14399.37835508978!2d84.8434447170254!3d25.54355318850096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d567a193702ff%3A0xc9c527c7faec3056!2sIIT+Patna+Administration+Block!5e0!3m2!1sen!2sin!4v1539177184721"
              width="500px"
              height="500px"
              frameBorder="0"
              style={{ borderRadius: '5px' }}
              allowFullScreen
            ></iframe>
          </section>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default ContactUs;
