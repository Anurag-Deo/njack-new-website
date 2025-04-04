import { useEffect, useState } from 'react';
import styles from '../../styles/hackathon-submission.module.css';

import { Footer, Header } from '@/components';
import Loader from '@/components/Loader';

import Head from 'next/head';
import Background from '@/components/Background';
import { useRouter } from 'next/router';
import Link from 'next/link';



export default function HackathonSubmission({}) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{`Hackmatrix 2025 - Submission`}</title>
      </Head>
      <Header />
      <Background />
      <div className={styles.parentDiv}>
        <SubmissionForm></SubmissionForm>
        <Footer />
      </div>
    </>
  );
}

const SubmissionForm = ({ children, style }) => {
  const [loading, setLoading] = useState(false);
  const [submissionURL, setSubmissionURL] = useState(null);
  const [timeLeft, setTimeLeft] = useState({});
  const [isExpired, setIsExpired] = useState(false);
  const [wordCountLocal, setWordCount] = useState(0);
  const [submissionId, setSubmissionId] = useState(null);

  // Set your deadline date here
  const deadlineDate = new Date('March 23, 2025 19:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadlineDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Add word counter functionality
    const descriptionField = document.getElementById('description');
    const wordCountDisplay = document.getElementById('currentCount');
    
    if (descriptionField && wordCountDisplay) {
      const countWords = () => {
        const text = descriptionField.value.trim();
        const wordCount = text === '' ? 0 : text.split(/\s+/).length;
        setWordCount(wordCount)
        wordCountDisplay.textContent = wordCount;
        
        // Visual feedback for word count
        if (wordCount > 900) {
          wordCountDisplay.style.color = '#ffbb88';
        } else if (wordCount > 950) {
          wordCountDisplay.style.color = '#ff9f69';
        } else {
          wordCountDisplay.style.color = '#ccc';
        }
      };
      
      descriptionField.addEventListener('input', countWords);
      countWords(); // Initial count
      
      return () => {
        descriptionField.removeEventListener('input', countWords);
      };
    }
  }, [submissionURL, isExpired]);


  const saveToFirestoreViaAPI = async (formData) => {
    try {
      const response = await fetch('/api/hackmatrix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report: formData,
          pwd: "", // Not using password for regular submissions
          id: ""   // Let the system generate an ID
        }),
      });
      console.log(formData)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }else{
        alert(
          "Solution Submitted Successfully"
        )
      }
      
      const data = await response.json();
      return {
        success: true,
        id: data.id,
      };
    } catch (error) {
      console.error('Error saving to Firestore via API:', error);
      throw error;
    }
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    if(wordCountLocal > 1000){
      alert("Word count exceeded 1000 words");
      return;
    }
    setLoading(true);
    
    // Form data
    const formData = {
      teamName: e.target.teamName.value,
      track: e.target.track.value,
      description: e.target.description.value,
      pptLink: e.target.pptLink.value,
      githubRepo: e.target.githubRepo.value,
      demoVideo: e.target.demoVideo.value,
      extraFiles: e.target.extraFiles.value
    };
    
    try {

      const result = await saveToFirestoreViaAPI(formData);
      
      if (result.success) {
        setSubmissionId(result.id);
        setSubmissionURL(result.submissionUrl);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting your project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const CountdownTimer = () => {
    return (
      <div className={styles.countdownContainer}>
      <img src="/hackmatrix/hackmatrix.png" alt="" className=''/>
          <>
            <div className={styles.expired}>Results</div>
            <Link href="/hackmatrix/leaderboard">
              <button className={styles.leaderboardButton}>View Leaderboard</button>
            </Link>
            <Link href="/hackmatrix/submission">
              <button className={styles.leaderboardButton}>View submissions</button>
            </Link>
          </>
      </div>
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CountdownTimer />
{/*           
          {submissionURL != null ? (
            <SuccessCard />
          ) : (
            <div style={style} className={styles.formContainer}>
              <h1>Hackmatrix 2025 - Project Submission</h1>
              
              {isExpired ? (
                <div className={styles.expiredMessage}>
                  <p>The submission deadline has passed. No more submissions are being accepted.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmission} id="hackathonSubmissionForm">
                  <div className={styles['input-container']}>
                    <label htmlFor="teamName">
                      <span className={styles.mainLabel}>Team Name</span>
                    </label>
                    <input type="text" id="teamName" name="teamName" required />
                  </div>
                  
                  <div className={styles['input-container']}>
                    <label htmlFor="track">
                      <span className={styles.mainLabel}>Track of PS</span>
                    </label>
                    <select id="track" name="track" required>
                      <option value="">Select a track</option>
                      <option value="blockchain">Track 1: Blockchain & Web3</option>
                      <option value="quantum">Track 2: Quantum Technology</option>
                      <option value="education">Track 3: Education</option>
                      <option value="sustainability">Track 4: Sustainability</option>
                      <option value="open">Track 5: Open Innovation</option>
                    </select>
                  </div>
                  
                  <div className={styles['input-container']}>
                    <label htmlFor="description">
                      <span className={styles.mainLabel}>Short description of PS</span>
                      <span className={styles.hint}>(1000 words max)</span>
                    </label>
                    <textarea 
                      id="description" 
                      name="description" 
                      rows="6"
                      required
                    ></textarea>
                    <div className={styles.wordCount}>
                      <span id="currentCount">0</span>/1000 words
                    </div>
                  </div>
                  
                  <div className={styles['input-container']}>
                    <label htmlFor="pptLink">
                      <span className={styles.mainLabel}>PPT submission (drive link)</span>
                      <span className={styles.hint}>(optional)</span>
                    </label>
                    <input type="text" id="pptLink" name="pptLink" />
                  </div>
                  
                  <div className={styles['input-container']}>
                    <label htmlFor="githubRepo">
                      <span className={styles.mainLabel}>GitHub repo of project</span>
                      <span className={styles.hint}>(No commits after the deadline will be considered)</span>
                    </label>
                    <input type="text" id="githubRepo" name="githubRepo" required />
                  </div>
                  
                  <div className={styles['input-container']}>
                    <label htmlFor="demoVideo">
                      <span className={styles.mainLabel}>Demo video (drive link)</span>
                    </label>
                    <input type="text" id="demoVideo" name="demoVideo" required />
                  </div>
                  
                  <div className={styles['input-container']}>
                    <label htmlFor="extraFiles">
                      <span className={styles.mainLabel}>Any extra files (links)</span>
                    </label>
                    <textarea type="text" id="extraFiles" name="extraFiles" />
                  </div>
                  
                  <input type="submit" value="Submit" />
                </form>
              )}
              {children}
            </div>
          )} */}
        </>
      )}
    </>
  );
};
