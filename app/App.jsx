import React from 'react';
import axios from 'axios';
import { fetchJobsURI } from '../server/endpoints';
import Notification from './components/notification.jsx';
import Button from './components/button.jsx';
import JobsTable from './components/jobsTable.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorState: '',
      jobs: []
    }
  }

  componentDidMount() {
    axios.get(fetchJobsURI)
      .then(data => {
        this.setState({
          jobs: data
        })
      })
      .catch(err => {
        // set error on state
        // TODO: error state and message should be separate and explicit
        this.setState({
          errorState: err
        })
      })
  }

  render () {

    return (
      <div className="app-wrapper">
        {this.state.errorState && <Notification msg={this.state.errorState} />}
        <Button>"Refresh"</Button>
        <JobsTable data={this.state.jobs} />
      </div>
    )
  }
}

export default App;
