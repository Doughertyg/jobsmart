import React, { useEffect, useState } from 'react';
import Notification from './components/notification/notification.jsx';
import Button from './components/button/button.jsx';
import JobsTable from './components/jobsTable/jobsTable.jsx';
import HeaderBar from './components/headerBar/HeaderBar.jsx';

import './styles/reset.scss';
import './styles/main.scss';


function App(props) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) setTimeout(() => setNotification(null), 5000);
  }, [ notification ])

  function triggerNotification(type, message) {
    setNotification({ type, message });
  }

  return (
    <div className="app-wrapper">
      {notification && <Notification notification={notification} />}
      <HeaderBar />
      <JobsTable alert={triggerNotification} />
    </div>
  )
};

export default App;
