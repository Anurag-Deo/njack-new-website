import Cors from 'cors';
import initMiddleware from '../../../lib/init-middleware';
var bcrypt = require('bcryptjs');

const cors = initMiddleware(
  Cors({
    methods: ['POST'] // Specify the allowed HTTP methods
  })
);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, getDocs, getDoc, setDoc, doc } from 'firebase/firestore/lite';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfM3WcfsTVz0-FtIEoos6mb6dHJCLTgtw',
  authDomain: 'njack-cheating-report.firebaseapp.com',
  projectId: 'njack-cheating-report',
  storageBucket: 'njack-cheating-report.appspot.com',
  messagingSenderId: '89908767469',
  appId: '1:89908767469:web:55a3ff44cb4bc77106bae4',
  measurementId: 'G-GWF6RPN75H'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

async function setReport(report, id = null) {
  return new Promise(async (resolve, reject) => {
    if (id) {
      let reportsRef = collection(db, 'reports');
      let reportRef = doc(reportsRef, id);

      await setDoc(reportRef, report);
      //return the id of created document
      resolve(id);
      return;
    } else {
      const reportsRef = collection(db, 'reports');
      let reportRef = doc(reportsRef);
      await setDoc(reportRef, report);
      resolve(reportRef.id);
      return;
    }
  });
}

async function handler(req, res) {
  // Run the cors middleware
  await cors(req, res);

  const pwdHash = '$2a$10$yRTweO.3SY9pEo.iZp99GeHAAYv3sftmEDR8PVCuOIPyvvBRbEuD2';
  if (req.method == 'POST') {
    try {
      //body = {report, pwd:"", id:""}
      const body = JSON.parse(req.body);
      console.log(body);
      if (!body.pwd || !body.id) {
        let createdID = await setReport(body.report);
        res.status(200).json({ id: createdID });
        return;
      }

      bcrypt.compare(body.pwd, pwdHash, async (err, result) => {
        let createdID;
        if (!err && result) {
          createdID = await setReport(body.report, body.id);
        } else {
          createdID = await setReport(body.report);
        }
        res.status(200).json({ id: createdID });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default handler;
