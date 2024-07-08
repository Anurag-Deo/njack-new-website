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

// Get a list of cities from your database
async function getReport(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject();
      return;
    }
    const docRef = doc(db, 'reports', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      resolve([docSnap.data()]);
      return;
    } else {
      // docSnap.data() will be undefined in this case
      reject();
      return;
    }
  });
}
async function getAllReports() {
  return new Promise(async (resolve, reject) => {
    const reportsCol = collection(db, 'reports');
    const reportsSnapshot = await getDocs(reportsCol);
    const reports = reportsSnapshot.docs.map((doc) => {
      let data = doc.data();
      data.id = doc.id;
      return data;
    });
    resolve(reports);
    return;
  });
}

async function handler(req, res) {
  // Run the cors middleware
  await cors(req, res);

  const pwdHash = '$2a$10$wfdsUgoEYU16YzBy8lvWteOBS2On0OA0jJpu3b5.gjO//PxTuhd7y';
  if (req.method === 'POST') {
    try {
      const body = JSON.parse(req.body);
      const id = body.id;
      let response;
      bcrypt.compare(id, pwdHash, async (err, result) => {
        if (!err && result) {
          response = await getAllReports();
          res.status(200).json(response);
        } else {
          response = await getReport(id);
          res.status(200).json(response);
        }
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
