import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, where } from 'firebase/firestore/lite';
import styles from '../../styles/view-submissions.module.css';
import { Header, Footer } from '@/components';
import Head from 'next/head';
import Background from '@/components/Background';
import Loader from '@/components/Loader';
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

export default function ViewSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // Authentication check
  useEffect(() => {
    const adminCheck = localStorage.getItem('hackmatrix_admin');
    if (adminCheck === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Fetch submissions if authenticated
  useEffect(() => {
    if (isAdmin) {
      fetchSubmissions();
    }
  }, [isAdmin]);

  // Filtering and sorting effect
  useEffect(() => {
    if (submissions.length > 0) {
      let filtered = [...submissions];
      
      // Filter by track
      if (selectedTrack !== 'all') {
        filtered = filtered.filter(sub => sub.track === selectedTrack);
      }
      
      // Filter by search term
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(sub => 
          sub.teamName.toLowerCase().includes(term) || 
          sub.description.toLowerCase().includes(term)
        );
      }
      
      // Sorting
      filtered.sort((a, b) => {
        let aValue = a[sortBy];
        let bValue = b[sortBy];
        
        // Handle special cases for sorting
        if (sortBy === 'timestamp') {
          aValue = new Date(aValue).getTime();
          bValue = new Date(bValue).getTime();
        }
        
        if (sortDirection === 'asc') {
          return aValue > bValue ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });
      
      setFilteredSubmissions(filtered);
    }
  }, [submissions, selectedTrack, sortBy, sortDirection, searchTerm]);

  // Fetch submissions from Firestore
  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const submissionsRef = collection(db, 'hackmatrix_submissions');
      const q = query(submissionsRef, orderBy('timestamp', 'desc'));
      const submissionsSnapshot = await getDocs(q);
      
      const submissionsList = submissionsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setSubmissions(submissionsList);
      setFilteredSubmissions(submissionsList);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions. Please try again later.');
      setLoading(false);
    }
  };

  // Handle admin login
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, use a secure authentication method
    const adminPassword = 'hm2025admin'; // Replace with secure auth in production
    
    if (password === adminPassword) {
      localStorage.setItem('hackmatrix_admin', 'true');
      setIsAdmin(true);
    } else {
      alert('Invalid password');
    }
  };

  // Handle admin logout
  const handleLogout = () => {
    localStorage.removeItem('hackmatrix_admin');
    setIsAdmin(false);
  };

  // Handle viewing a submission in detail
  const viewSubmission = (submission) => {
    setSelectedSubmission(submission);
  };

  // Close detailed view
  const closeDetailView = () => {
    setSelectedSubmission(null);
  };

  // Track options for filter
  const trackOptions = [
    { value: 'all', label: 'All Tracks' },
    { value: 'blockchain', label: 'Blockchain & Web3' },
    { value: 'quantum', label: 'Quantum Technology' },
    { value: 'education', label: 'Education' },
    { value: 'sustainability', label: 'Sustainability' },
    { value: 'open', label: 'Open Innovation' }
  ];

  // Submission Detail View Component
  const SubmissionDetailView = ({ submission }) => {


      if (!submission) return null;
    
    return (
      <div className={styles.detailView}>
        <div className={styles.detailViewContent}>
          <button className={styles.closeButton} onClick={closeDetailView}>×</button>
          
          <h2>{submission.teamName}</h2>
          <div className={styles.submissionMeta}>
            <span className={styles.track}>
              {trackOptions.find(t => t.value === submission.track)?.label || submission.track}
            </span>
            <span className={styles.timestamp}>
              Submitted: {new Date(submission.timestamp).toLocaleString()}
            </span>
          </div>
          
          <div className={styles.submissionSection}>
            <h3>Project Description</h3>
            <p className={styles.description}>{submission.description}</p>
          </div>
          
          <div className={styles.submissionSection}>
            <h3>Project Links</h3>
            <div className={styles.linkGrid}>
              <div className={styles.linkItem}>
                <strong>GitHub Repository:</strong>
                <a href={submission.githubRepo} target="_blank" rel="noopener noreferrer">
                  {submission.githubRepo}
                </a>
              </div>
              
              <div className={styles.linkItem}>
                <strong>Demo Video:</strong>
                <a href={submission.demoVideo} target="_blank" rel="noopener noreferrer">
                  {submission.demoVideo}
                </a>
              </div>
              
              {submission.pptLink && (
                <div className={styles.linkItem}>
                  <strong>Presentation:</strong>
                  <a href={submission.pptLink} target="_blank" rel="noopener noreferrer">
                    {submission.pptLink}
                  </a>
                </div>
              )}
              
              {submission.extraFiles && (
                <div className={styles.linkItem}>
                  <strong>Additional Files:</strong>
                  
                    {submission.extraFiles}
             
                </div>
              )}
            </div>
          </div>
          
          <div className={styles.submissionId}>
            <strong>Submission ID:</strong> {submission.id}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Hackmatrix 2025 - View Submissions</title>
      </Head>
      <Header />
      <Background />
      
      <div className={styles.container}>
        <h1 className={styles.title}>Hackmatrix 2025 Submissions</h1>
        
        {!isAdmin ? (
          <div className={styles.loginContainer}>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="password">Admin Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.loginButton}>Login</button>
            </form>
          </div>
        ) : (
          <>
            {loading ? (
              <Loader />
            ) : error ? (
              <div className={styles.error}>{error}</div>
            ) : (
              <div className={styles.submissionsContainer}>
                <div className={styles.filtersContainer}>
                  <div className={styles.filterGroup}>
                    <input
                      type="text"
                      placeholder="Search by team name or description"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={styles.searchInput}
                    />
                  </div>
                  
                  <div className={styles.filterGroup}>
                    <select
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className={styles.trackSelect}
                    >
                      {trackOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className={styles.filterGroup}>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className={styles.sortSelect}
                    >
                      <option value="timestamp">Sort by Date</option>
                      <option value="teamName">Sort by Team Name</option>
                      <option value="track">Sort by Track</option>
                    </select>
                    
                    <button
                      onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                      className={styles.sortDirectionButton}
                      title={sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                    >
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </button>
                  </div>
                  
                  <button onClick={handleLogout} className={styles.logoutButton}>
                    Logout
                  </button>
                </div>
                
                <div className={styles.submissionCount}>
                  Showing {filteredSubmissions.length} of {submissions.length} submissions
                </div>
                
                <div className={styles.submissionsGrid}>
                  {filteredSubmissions.length > 0 ? (
                    filteredSubmissions.map(submission => (
                      <div
                        key={submission.id}
                        className={styles.submissionCard}
                        onClick={() => viewSubmission(submission)}
                      >
                        <h3 className={styles.teamName}>{submission.teamName}</h3>
                        <div className={styles.submissionCardMeta}>
                          <span className={styles.submissionTrack}>
                            {trackOptions.find(t => t.value === submission.track)?.label || submission.track}
                          </span>
                          <span className={styles.submissionDate}>
                            {new Date(submission.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                        <p className={styles.submissionPreview}>
                          {submission.description.substring(0, 150)}
                          {submission.description.length > 150 ? '...' : ''}
                        </p>
                        <div className={styles.viewDetails}>View Details</div>
                      </div>
                    ))
                  ) : (
                    <div className={styles.noSubmissions}>
                      No submissions match your search criteria
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {selectedSubmission && (
              <SubmissionDetailView submission={selectedSubmission} />
            )}
          </>
        )}
      </div>
      
      <Footer />
    </>
  );
}