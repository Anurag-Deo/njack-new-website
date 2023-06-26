import Head from 'next/head';
import styles from '@/styles/home.module.css';
import { CoordCard, SubCoordCard, DeptCard, EventCard, Footer, Header } from '@/components';
import DisplayLottie from '@/components/Lottie';
import { motion } from 'framer-motion';
import events from '@/data/events';
import departments from '@/data/departments';
import coordinators from '@/data/coordinators';
import subCoordinators from '@/data/sub-coordinators';
import Tilt from 'react-parallax-tilt';
import Background from '@/components/Background';

export default function Home() {
  const filteredEvents = events.filter((event) => event.old === false);
  return (
    <>
      <Head>
        <title>NJACK</title>
        <meta name="description" content="NJACK is a computer science club of IIT Patna." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header selected={'Home'} />
      <Background />
      <div style={{ zIndex: '2', position: 'relative' }}>
        <section className={styles.heroSection}>
          <motion.div
            className={styles.njackhero}
            initial={{ opacity: 0, x: '-100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            <Tilt>
              <img loading="lazy" src="/home/NJACK logo.svg" alt="NJACK Logo" />
            </Tilt>
            <p className={styles.subHeroText}>Not just another Computer Science Klub</p>
          </motion.div>
          <motion.div
            className={styles.lottiehero}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <DisplayLottie animationPath="https://assets3.lottiefiles.com/packages/lf20_mXdqmT1SH2.json" />
          </motion.div>
        </section>
        <section className={styles.aboutSection}>
          <h2>About us</h2>
          <div>
            <motion.div
              className={styles.lottiehero}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}>
              <DisplayLottie animationPath="https://assets1.lottiefiles.com/packages/lf20_v1yudlrx.json" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: '100%' }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}>
              NJACK is the esteemed Computer Science Club at IIT Patna, dedicated to fostering a
              community of passionate computer science enthusiasts. With its wide range of
              departments and initiatives, NJACK aims to provide a platform for students to enhance
              their skills, engage in productive sessions, and participate in fun events. As a
              collective entity, NJACK serves as a nurturing platform for students passionate about
              computer science at IIT Patna. It provides a vibrant community where like-minded
              individuals can come together to share knowledge, collaborate on projects, and stay
              updated with the latest advancements in the field. NJACK organizes guest lectures,
              coding competitions, hackathons, and other events to foster learning and networking
              opportunities for its members. Through its inclusive and supportive environment, NJACK
              strives to empower students, enabling them to excel in their computer science journey
              and make meaningful contributions to the world of technology.
            </motion.p>
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Upcoming Events</h2>
          <div className={styles.cardSection}>
            {filteredEvents.map((event, index) => (
              //   {event.old === false && (
              <motion.div
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
            ))}
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Departments</h2>
          <div className={styles.cardSection}>
            {departments.map((dept, index) => (
              <motion.div
                className={styles.card}
                key={dept.deptName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
                }}>
                <DeptCard
                  deptName={dept.deptName}
                  deptImage={dept.deptImage}
                  deptDesc={dept.deptDesc}
                  deptLink={dept.deptLink}
                  bgColor={dept.bgColor}
                />
              </motion.div>
            ))}
          </div>
        </section>
        <section className={styles.section} style={{ width: '100%' }}>
          <h2 className={styles.sectionHeading}>Our Team</h2>
          <h3>Coordinators</h3>
          <div className={styles.cardSection} style={{ justifyContent: 'center' }}>
            {coordinators.map(
              (member, index) =>
                member.committee === 'Overall Coordinator' && (
                  <motion.div
                    key={member.name}
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
                      coordName={member.name}
                      coordImage={`https://drive.google.com/uc?export=view&id=${member.image}`}
                      coordCommittee={member.committee}
                      coordLinkedIn={member.linkedin}
                      coordGitHub={member.github}
                    />
                  </motion.div>
                )
            )}
          </div>

          <div className={styles.cardSection}>
            {coordinators.map((member, index) => {
              if (member.committee !== 'Overall Coordinator') {
                return (
                  <motion.div
                    key={member.name}
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
                        coordName={member.name}
                        coordImage={`https://drive.google.com/uc?export=view&id=${member.image}`}
                        coordCommittee={member.committee}
                        coordLinkedIn={member.linkedin}
                        coordGitHub={member.github}
                      />
                    )}
                  </motion.div>
                );
              }
            })}
          </div>

          <h3>Sub-Coordinators</h3>
          <div className={styles.cardSection}>
            <div className={styles.committee}>
              <p>Competitive Programming</p>
              {subCoordinators.map((member) => {
                if (member.committee === 'CP') {
                  return (
                    <SubCoordCard
                      key={member.linkedin}
                      coordName={member.name}
                      coordLinkedIn={member.linkedin}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.committee}>
              <p>Development & Open Source</p>
              {subCoordinators.map((member) => {
                if (member.committee === 'Dev&OS') {
                  return (
                    <SubCoordCard
                      key={member.linkedin}
                      coordName={member.name}
                      coordLinkedIn={member.linkedin}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.committee}>
              <p>Machine Learning</p>
              {subCoordinators.map((member) => {
                if (member.committee === 'ML') {
                  return (
                    <SubCoordCard
                      key={member.linkedin}
                      coordName={member.name}
                      coordLinkedIn={member.linkedin}
                    />
                  );
                }
              })}
            </div>
            {/* <div className={styles.committee}>
							<p>Cyber Security</p>
							{subCoordinators.map((member) => {
								if (member.committee === 'CyberSec') {
									return (<SubCoordCard key={member.linkedin} coordName={member.name} coordLinkedIn={member.linkedin}/>)
								}
							})}
						</div> */}
          </div>
        </section>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            alt="TeamWork"
            src="\home\team.png"
            style={{
              marginInline: '5%',
              maxWidth: '90vw',
              maxHeight: '25vh',
              objectFit: 'contain'
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
