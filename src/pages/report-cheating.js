import { useEffect, useState } from 'react';
import styles from '../styles/report-cheating.module.css';

import { Footer, Header } from '@/components';

import Head from 'next/head';
import Background from '@/components/Background';
import { useRouter } from 'next/router';
var bcrypt = require('bcryptjs');

export default function reportCheating({}) {
  const router = useRouter();
  //   useEffect(() => {
  //     if (router.pathname !== pageLink) router.replace('/');
  //   }, []);
  return (
    <>
      <Head>
        <title>{`Report Cheating`}</title>
      </Head>
      <Header selected={'Report'} />
      <Background />
      <div className={styles.parentDiv}>
        <ReportingForm></ReportingForm>
        <Footer />
      </div>
    </>
  );
}
const ReportingForm = ({ children, style }) => {
  // Testing SetReport
  // useEffect(() => {
  //   console.log('Creating document');
  //   fetch('/api/setCheatingReport/', {
  //     method: 'POST',
  //     body: JSON.stringify({ report: { a: '123' }, pwd: '', id: '' })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // Testing GetStatus
  // useEffect(() => {
  //   fetch('/api/getCheatingReport/', {
  //     method: 'POST',
  //     body: JSON.stringify({ id: 'gCEEJz4joJfjpF9wVBDu' })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <div style={style}>
      <h1>Anonymous Codeforces Plagiarism Reporting </h1>
      <form>
        <div className={styles['input-container']}>
          <label htmlFor="cfId">
            <span className={styles.mainLabel}>Codeforces ID of the suspected User</span>
          </label>
          <input type="text" id="cfId" name="cfId" required />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="submissionLink">
            <span className={styles.mainLabel}>Submission Link of the Copied Solution</span>
          </label>
          <input type="text" id="submissionLink" name="submissionLink" required />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="reference">
            <span className={styles.mainLabel}>References, if any</span> <br />
            <span className={styles.hint}>(Link of other solutions it matches with)</span>
          </label>
          <input type="text" id="reference" name="reference" />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="otherProofs">
            <span className={styles.mainLabel}>Other Proofs, if any</span> <br />{' '}
            <span className={styles.hint}>
              (Please share the URL after uploading image(s) on
              <a href="https://postimages.org/"> Post Images</a>)
            </span>
          </label>
          <input type="text" id="otherProofs" name="otherProofs" />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="comments">
            <span className={styles.mainLabel}>Comments, if any</span>
          </label>
          <input type="text" id="comments" name="comments" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      {children}
    </div>
  );
};
