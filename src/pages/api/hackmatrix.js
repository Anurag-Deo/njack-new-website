// File: pages/api/submissions.js
import Cors from 'cors';
import initMiddleware from '../../../lib/init-middleware';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore/lite';

const cors = initMiddleware(
  Cors({
    methods: ['POST'] // Specify the allowed HTTP methods
  })
);

// Firebase configuration
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
const db = getFirestore(app);

async function saveSubmission(submissionData, id = null) {
  return new Promise(async (resolve, reject) => {
    try {
      const submissionsRef = collection(db, 'hackmatrix_submissions');
      
      // Use provided ID or generate a new one
      const submissionRef = id ? doc(submissionsRef, id) : doc(submissionsRef);
      
      // Add timestamp to submission data
      const dataWithTimestamp = {
        ...submissionData,
        timestamp: new Date().toISOString(),
        status: 'submitted'
      };
      
      await setDoc(submissionRef, dataWithTimestamp);
      resolve(submissionRef.id);
    } catch (error) {
      reject(error);
    }
  });
}

export default async function handler(req, res) {
  // Run the cors middleware
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      console.log('Received submission:', req.body);
      const body = req.body
      console.log('Received submission:', body);
      
      // Extract submission data
      const submissionData = body.report;
      const id = body.id || null;
      
      // Save submission to Firestore
      const submissionId = await saveSubmission(submissionData, id);
      
      // Return success response with ID
      res.status(200).json({ 
        id: submissionId,
        success: true,
        message: 'Submission received successfully' 
      });
    } catch (error) {
      console.error('Error processing submission:', error);
      res.status(500).json({ 
        success: false,
        error: 'An error occurred while processing your submission' 
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}