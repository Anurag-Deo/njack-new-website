import { useEffect, useState } from 'react';
import styles from '../styles/department.module.css';
import { EventCard, CoordCard, Footer, Header } from '@/components';
import { motion } from 'framer-motion';
import DisplayLottie from '@/components/Lottie';
import Head from 'next/head';
import Background from '@/components/Background';
import { useRouter } from 'next/router';
import ApeireonCard from '@/components/apeireonCard/apeireonCard';

export default function apeireon({ events, coords, subcoords }) {
  const coordDevOS = coords;
  const subCoordDevOS = subcoords;
  const coordArr = [];
  const subCoordArr = [];
  const apeireonEvents = [];
  for (let i = 0;i < coordDevOS.length;i++) {
    coordArr.push({
      key: i + 1,
      coordName: coordDevOS[i].name,
      coordImage: coordDevOS[i].image,
      coordCommittee: coordDevOS[i].committee,
      coordLinkedIn: coordDevOS[i].linkedin,
      coordGitHub: coordDevOS[i].github,
      coordCFHandle: coordDevOS[i].cfhandle
    });
  }

  let coordinators = '';
  for (let item of coordArr) {
    coordinators += item.coordName + ', ';
  }
  coordinators = coordinators.slice(0, -2);

  for (let i = 0;i < subCoordDevOS.length;i++) {
    subCoordArr.push({
      key: i + 1,
      coordName: subCoordDevOS[i].name,
      coordImage: subCoordDevOS[i].image,
      coordCommittee: subCoordDevOS[i].committee,
      coordLinkedIn: subCoordDevOS[i].linkedin,
      coordGitHub: subCoordDevOS[i].github,
      coordCFHandle: subCoordDevOS[i].cfhandle
    });
  }

  for (let i = 0;i < events.length;i++) {
    if (events[i].dept === 'Apeireon') {
      apeireonEvents.push(events[i]);
    }
  }
  const router = useRouter();
  //   useEffect(() => {
  //     if (router.pathname !== pageLink) router.replace('/');
  //   }, []);
  return (
    <>
      <Head>
        <title>{`NJACK | Apeireon`}</title>
      </Head>
      <Header selected={'Apeireon'} />
      <Background />
      <div className={styles.parentDiv}>
        <div className={styles.aboutDept}>
          <DeptTitle
            deptName="Apeireon"
            deptImage="/home/apeireon.png"
          />
          <DeptDescription
            deptDesc="Apeireon name is created from the Greek word Apeiron meaning unlimited, boundless, infinite. Thus, the aim and the vision of the fest are to create such an opportunity which aligns with its name in the coding domain. Join us as we push the boundaries of possibility and dive deep into the heart of the coding culture of IIT Patna. Let's code, connect, and create unforgettable memories together at Apeireon! 🚀"
          />
        </div>
        <EventCards events={apeireonEvents} />
        <Footer />
      </div >
    </>
  );
}

const DeptTitle = ({ deptName, deptCoordName, deptImage }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    }; s

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={styles.deptTitle} style={{ justifyContent: 'center', marginTop: isMobile ? '90px' : 0 }}>
      <img
        src={deptImage}
        loading="lazy"
        style={{ height: 'auto', width: '70vw', minWidth: '350px' }}
      />
    </div>
  );
};

const DeptDescription = ({ deptDesc }) => {
  return (
    <div className={`${styles.deptDesc2} `}>
      <p>{deptDesc}</p>
    </div>
  );
};


const EventCards = ({ events }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>Events</h2>

      <motion.div className={styles.cardSection}>
        {events?.length > 0 ? (
          events.map((event, index) => (
            //   {event.old === false && (
            <motion.div
              key={event.key}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
              }}>
              <ApeireonCard
                key={event.key}
                old={event.old}
                eventName={event.eventName}
                desc={event.desc}
                image={event.image}
                registerLink={event.registerLink}
              />
            </motion.div>
          ))
        ) : (
          <h2 style={{ color: 'gainsboro' }}>No Events</h2>
        )}
      </motion.div>
    </div>
  );
};

