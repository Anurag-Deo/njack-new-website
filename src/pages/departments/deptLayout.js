import React from 'react';
import styles from '../../styles/department.module.css';
import { EventCard, CoordCard, Footer, Header } from '@/components';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import DisplayLottie from '@/components/Lottie';
import Head from 'next/head';

const DeptLayout = ({
  deptName,
  deptCoordName,
  deptImage,
  deptDesc,
  eventsArr,
  coordArr,
  subCoordArr
}) => {
  return (
    <>
      <Head>
        <title>NJACK | {deptName}</title>
      </Head>
      <Header selected={'Departments'} />
      <div className={styles.parentDiv}>
        <div className={styles.aboutDept}>
          <DeptTitle deptName={deptName} deptCoordName={deptCoordName} deptImage={deptImage} />
          <DeptDescription deptDesc={deptDesc} />
        </div>
        <EventCards eventsArr={eventsArr} />
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
        <h4>Coordinator: {deptCoordName}</h4>
      </div>
      <img src={deptImage} />
    </div>
  );
};

const DeptDescription = ({ deptDesc }) => {
  return (
    <div className={styles.deptDesc}>
      <div className={styles.lottie}>
        <DisplayLottie
          animationPath={'https://assets7.lottiefiles.com/packages/lf20_iv4dsx3q.json'}
        />
      </div>
      <p>{deptDesc}</p>
    </div>
  );
};

const EventCards = ({ eventsArr }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>Events</h2>
      <InView>
        {({ inView, ref }) => (
          <motion.div className={styles.cardSection} ref={ref}>
            {eventsArr ? (
              eventsArr.map((event, index) => (
                //   {event.old === false && (
                <motion.div
                  key={event.key}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <EventCard
                    key={event.key}
                    old={event.old}
                    eventName={event.eventName}
                    desc={event.desc}
                    image={event.image}
                    registerLink={event.registerLink}
                  />
                </motion.div>
                //   )}
              ))
            ) : (
              <h2>No Events</h2>
            )}
          </motion.div>
        )}
      </InView>
    </div>
  );
};

const CoordSection = ({ coordArr, subCoordArr }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionHeading}>Team</h2>
      <InView>
        {({ inView, ref }) => (
          <motion.div className={styles.cardSectionTeams} ref={ref}>
            {coordArr ? (
              coordArr.map((member, index) => (
                <motion.div
                  key={member.name}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {member.committee !== 'Overall Coordinator' && (
                    <CoordCard
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
              <h2>No Coordinators</h2>
            )}
          </motion.div>
        )}
      </InView>
      <InView>
        {({ inView, ref }) => (
          <motion.div className={styles.cardSectionTeams} ref={ref}>
            {subCoordArr ? (
              subCoordArr.map((member, index) => (
                <motion.div
                  key={member.name}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {member.committee !== 'Overall Coordinator' && (
                    <CoordCard
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
              <h2>No Sub Coordinators</h2>
            )}
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default DeptLayout;
