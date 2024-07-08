import { useEffect, useState } from 'react';
import styles from '../../styles/report-status.module.css';

import { Footer, Header } from '@/components';
import Loader from '@/components/Loader';

import Head from 'next/head';
import Background from '@/components/Background';
import { useRouter } from 'next/router';
var bcrypt = require('bcryptjs');

export default function CheckStatus({}) {
  const router = useRouter();

  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (!router.query.id) {
      return;
    }
    console.log(router.query.id);
    fetch('/api/getCheatingReport/', {
      method: 'POST',
      body: JSON.stringify({ id: router.query.id })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReports(data);
      });
  }, [router.query.id]);
  return (
    <>
      {reports.length === 0 ? (
        <Loader></Loader>
      ) : (
        <>
          <Head>
            <title>{`Report Cheating`}</title>
          </Head>
          <Header selected={'Report'} />
          <Background />
          <div className={styles.parentDiv}>
            {!reports[0].id ? (
              <Status report={reports[0]}></Status>
            ) : (
              <AdminSec reports={reports} pwd={router.query.id}></AdminSec>
            )}
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
const AdminSec = ({ reports, pwd }) => {
  const [allDone, setAllDone] = useState(true);
  const filtersPossible = ['All', 'Pending', 'Cheater', 'Innocent'];
  const [filter, setFilter] = useState('Pending');
  const updateReport = (report, status) => {
    report.status = status;
    const id = report.id;
    console.log('Updating Id', id);
    delete report.id;
    console.log('data', report);
    fetch('/api/setCheatingReport/', {
      method: 'POST',
      body: JSON.stringify({ report: report, pwd: pwd, id: id })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('https://njack.iitp.ac.in/report/' + data.id);
        location.reload();
      });
  };
  return (
    <div className={styles.adminSec}>
      <div className={styles.tabContainer}>
        {filtersPossible.map((thisFilter) => {
          return (
            <div
              className={
                filter == thisFilter ? (styles.tabButton, styles.active) : styles.tabButton
              }
              onClick={() => {
                setFilter(thisFilter);
              }}>
              {thisFilter}
            </div>
          );
        })}
      </div>

      {reports.map((report) => {
        if (filter != 'All' && report.status != filter) {
          return <></>;
        }
        if (allDone) {
          setAllDone(false);
        }
        return (
          <div className={styles.report}>
            <div>
              CF Handle: <span>{report.cfId}</span>
            </div>
            <div>
              Submission Link:<span> {report.submissionLink}</span>
            </div>
            <div>
              Reference:<span> {report.reference}</span>
            </div>
            <div>
              Other Proofs: <span>{report.otherProofs}</span>
            </div>
            <div>
              Status: <span>{report.status}</span>
            </div>
            <div>
              Timestamp: <span>{report.timestamp}</span>
            </div>
            <div>
              ID: <span>{report.id}</span>
            </div>
            <button
              style={{ backgroundColor: 'orangered' }}
              onClick={() => {
                updateReport(report, 'Cheater');
              }}>
              Cheater
            </button>
            <button
              style={{ backgroundColor: 'lime' }}
              onClick={() => {
                updateReport(report, 'Innocent');
              }}>
              Innocent
            </button>
          </div>
        );
      })}
      {allDone ? <h1 style={{ marginBlock: '3em' }}>No Pending Cheating Reports</h1> : <></>}
    </div>
  );
};

const Status = ({ children, style, report }) => {
  //   report = JSON.parse(report);
  //   console.log(report);
  return (
    <div className={styles.reportStatus}>
      <h1>Cheating Report Status</h1>
      <div style={{ fontSize: '0.7em', fontWeight: '300' }}>CF Handle: </div>
      <div style={{ color: '#00ffea' }}>{report.cfId}</div>
      <div style={{ fontSize: '0.7em', fontWeight: '300' }}>Verification Status: </div>
      <div style={{ color: '#00ffea' }}>{report.status}</div>
      {children}
    </div>
  );
};
