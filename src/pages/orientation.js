import { Header } from '@/components';
import React from 'react';
import styles from '../styles/contactus.module.css';
import Background from '@/components/Background';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

const ContactUs = () => {
    const mapCenter = [25.5372633, 84.8472938];
    return (
        <>
            <Header selected={''} />
            <Background />
            <div className={styles.parentDiv}>
                <h1 style={{ marginBottom: '50px', textAlign: 'center' }}>ORIENTATION QUIZ FORM</h1>
                <div className={styles.body}>
                    <iframe width="1200" height="700" title="Panorama Viewer" scrolling="no" src="https://renderstuff.com/tools/360-panorama-web-viewer-embed/?image=https://res.cloudinary.com/dmc7njn59/image/upload/v1693666808/Frame_1_uztwuf.jpg"></iframe>
                    <iframe style={{marginTop: "50px"}} width="1200" height="1200" scrolling="no"  title="Google Form" src="https://forms.gle/6nexjxBvwdYt2CH69"></iframe>

                </div>
            </div>
        </>
    );
};

export default ContactUs;
