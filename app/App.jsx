import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchJobsURI } from '../server/endpoints';
import Notification from './components/notification/notification.jsx';
import Button from './components/button/button.jsx';
import JobsTable from './components/jobsTable/jobsTable.jsx';

function App(props) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) setTimeout(() => setNotification(null), 5000);
  }, notification)

  function triggerNotification(type, message) {
    setNotification({ type, message });
  }

  return (
    <div className="app-wrapper">
      {notification && <Notification notification={notification} />}
      <JobsTable alert={triggerNotification} />
    </div>
  )
};

export default App;
