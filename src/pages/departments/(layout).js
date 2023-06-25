import React from 'react';
import styles from '../../styles/department.module.css';
import { EventCard, CoordCard, Footer, Header } from '@/components';
import { motion } from 'framer-motion';
import DisplayLottie from '@/components/Lottie';
import Head from 'next/head';
import Background from '@/components/Background';

const Layout = ({
  deptName,
  deptCoordName,
  deptImage,
  deptDesc,
  events,
  coordArr,
  subCoordArr
}) => {
  return (
    <>
      <Head>
        <title>{`NJACK | ${deptName}`}</title>
      </Head>
      <Header selected={'Departments'} />
      <Background />
      <div className={styles.parentDiv}>
        <div className={styles.aboutDept}>
          <DeptTitle deptName={deptName} deptCoordName={deptCoordName} deptImage={deptImage} />
          <DeptDescription deptDesc={deptDesc} />
        </div>
        <EventCards events={events} />
        <CoordSection coordArr={coordArr} subCoordArr={subCoordArr} />
        <Footer />
      </div>
    </>
  );
};

const DeptTitle = ({ deptName, deptCoordName, deptImage }) => {
  return (
    <div className={styles.deptTitle}>
      <div>
        <h1>{deptName}</h1>
        <h4>Coordinator(s): {deptCoordName}</h4>
      </div>
      <img src={deptImage} loading="lazy" />
    </div>
  );
};

const DeptDescription = ({ deptDesc }) => {
  return (
    <div className={styles.deptDesc}>
      <div>
        <DisplayLottie
          animationPath={'https://assets7.lottiefiles.com/packages/lf20_iv4dsx3q.json'}
        />
      </div>
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
              <EventCard
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

const CoordSection = ({ coordArr, subCoordArr }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>Team</h2>

      <motion.div className={styles.cardSectionTeams}>
        {coordArr?.length > 0 ? (
          coordArr.map((member, index) => (
            <motion.div
              key={member.coordName}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}>
              {member.committee !== 'Overall Coordinator' && (
                <CoordCard
                  key={member.coordName}
                  coordName={member.coordName}
                  coordImage={'https://drive.google.com/uc?export=view&id=' + member.coordImage}
                  coordCommittee={member.coordCommittee}
                  coordLinkedIn={member.coordLinkedIn}
                  coordGitHub={member.coordGitHub}
                />
              )}
            </motion.div>
          ))
        ) : (
          <h2 style={{ color: 'gainsboro' }}>No Coordinators</h2>
        )}
      </motion.div>

      <motion.div className={styles.cardSectionTeams}>
        {subCoordArr?.length > 0 ? (
          subCoordArr.map((member, index) => (
            <motion.div
              key={member.coordName}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 }
              }}>
              <CoordCard
                key={member.coordName}
                coordName={member.coordName}
                coordImage={'https://drive.google.com/uc?export=view&id=' + member.coordImage}
                coordCommittee={member.coordCommittee}
                coordLinkedIn={member.coordLinkedIn}
                coordGitHub={member.coordGitHub}
              />
            </motion.div>
          ))
        ) : (
          <h2 style={{ color: 'gainsboro' }}>No Sub Coordinators</h2>
        )}
      </motion.div>
    </div>
  );
};

export default Layout;
