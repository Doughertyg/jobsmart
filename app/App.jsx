import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchJobsURI } from '../server/endpoints';
import Notification from './components/notification/notification.jsx';
import Button from './components/button/button.jsx';
import JobsTable from './components/jobsTable/jobsTable.jsx';

function App(props) {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  function fetchJobsAndSetState() {
    axios.get(fetchJobsURI)
      .then(({ data }) => {
        setJobs(data);
      })
      .catch(err => {
        // set error on state
        // TODO: error state and message should be separate and explicit
        setError(err);
      })
  }

  useEffect(() => {
    fetchJobsAndSetState();
  }, [])

  function updateJobData() {
    // axios.put...
  }

  return (
    <div className="app-wrapper">
      {error && <Notification msg={error} />}
      <Button>"Refresh"</Button>
      <JobsTable data={jobs} />
    </div>
  )
};

export default App;
