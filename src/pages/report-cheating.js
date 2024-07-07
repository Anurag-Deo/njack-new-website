import { useEffect, useState } from 'react';
import styles from '../styles/report-cheating.module.css';

import { Footer, Header } from '@/components';
import Loader from '@/components/Loader';

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
  // console.log('Creating document');
  // fetch('/api/setCheatingReport/', {
  //   method: 'POST',
  //   body: JSON.stringify({ report: { a: '123' }, pwd: '', id: '' })
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // }, []);

  // Testing GetStatus
  // useEffect(() => {
  // fetch('/api/getCheatingReport/', {
  //   method: 'POST',
  //   body: JSON.stringify({ id: 'gCEEJz4joJfjpF9wVBDu' })
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // }, []);
  const [statusURL, setStatusURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const setReport = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(document.querySelector('#cheatingReportForm'));
    var report = {};
    formData.forEach((value, key) => (report[key] = value));
    report.status = 'Pending';
    let currTime = new Date();
    report.timestamp = currTime.toString();

    console.log('Creating document');
    fetch('/api/setCheatingReport/', {
      method: 'POST',
      body: JSON.stringify({ report: report, pwd: '', id: '' })
    })
      .then((res) => res.json())
      .then((data) => {
        setStatusURL('https://njack.iitp.ac.in/report/' + data.id);
        console.log('https://njack.iitp.ac.in/report/' + data.id);
      });
  };
  useEffect(() => {
    if (statusURL != null) {
      setLoading(false);
    }
  }, [statusURL]);
  const StatusURLCard = () => {
    return (
      <div className={styles.statusURL}>
        <div className="card">
          <div className="desc">
            We Have Reported the ID, We will soon review it and show you the final status of report
            on the following URL.
          </div>
          <div
            style={{
              padding: '1em',
              background: '#26db93',
              color: 'black',
              fontWeight: '500',
              marginBlock: '1em',
              borderRadius: '5px'
            }}>
            <div>Save This Link:</div>{' '}
            <a href={statusURL} style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
              {statusURL}
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {statusURL != null ? (
            <StatusURLCard></StatusURLCard>
          ) : (
            <div style={style}>
              <h1>Anonymous Codeforces Plagiarism Reporting </h1>
              <form onSubmit={setReport} id="cheatingReportForm">
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
          )}
        </div>
      )}
    </>
  );
};
