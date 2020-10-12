import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../table/table.jsx';
import JobRow from './JobRow.jsx';
import { fetchJobsURI } from '../server/endpoints';



/**
 * NEW jobsTable
 * 
 * simple table that iterates over data array and renders rows for each entry
 * Job element will render row and as many categories/columns as needed
 * clicking on a row will toggle edit mode which will make the row a modal
 *   toggle modal background cover on table
 *   toggle edit mode on row, expand element, make editable, add class
 * 
 * jobsTable will encompass entire jobs table app for adding, editing, sorting job apps
 * 
 * onMount (useEffect) fetch jobs from backend and set array of jobs (json) to state
 * render array of jobRow for each job in state, passing in the job
 *   also pass in fn to update job:
 *     set loading state,
 *     update job, 
 *     set loading state false,
 *     set success state if success,
 *     re-fetch jobs if success,
 *     set error if error
 *   also pass in fn to set editing state (render editing modal cover)
 * 
 * 
 * 
 * 
 */
const JobsTable = (props) => {
  const { alert } = props;
  const [jobs, setJobs] = useState([]);

  function fetchJobsAndSetState() {
    axios.get(fetchJobsURI)
      .then(({ data }) => {
        setJobs(data);
      })
      .catch(err => {
        // set error on state
        // TODO: error state and message should be separate and explicit
        alert({ type: 'error', message: err });
      })
  }

  useEffect(() => {
    fetchJobsAndSetState();
  }, [])

  function updateJobData() {
    // axios.put...
  }

  return (
    <div className="table-wrapper">
      {/* filter, sort buttons */}
      {jobs.map(row => {
        <JobRow job={row} /* pass functions here */ />
      })}
      {/* add job button */}
    </div>
  )



  /**
   * array of every column to render in the table
   */
  const columns = [
    {
      title: 'Company',
      key: 'company'
    },
    {
      title: 'position',
      key: 'position'
    },
    {
      title: 'link',
      key: 'link'
    },
    {
      title: 'contact',
      key: 'contact'
    },
    {
      title: 'via',
      key: 'via'
    },
    {
      title: 'first contact',
      key: 'first-contact'
    },
    {
      title: 'last contact',
      key: 'last-contact'
    },
    {
      title: 'referral?',
      key: 'referral'
    },
    {
      title: 'applied',
      key: 'applied'
    },
    {
      title: 'date',
      key: 'ph-date',
      classes: '--phone-screen'
    },
    {
      title: 'follow up / thanks',
      key: 'ph-follow-up',
      classes: '--phone-screen'
    },
    {
      title: 'success/fail?',
      key: 'ph-success',
      classes: '--phone-screen'
    },
    {
      title: 'date received',
      key: 'code-received',
      classes: '--challenge'
    },
    {
      title: 'date submitted',
      key: 'code-submitted',
      classes: '--challenge'
    },
    {
      title: 'follow up / thanks',
      key: 'code-follow-up',
      classes: '--challenge'
    },
    {
      title: 'success/fail?',
      key: 'code-success',
      classes: '--challenge'
    },
    {
      title: 'date',
      key: 'onsite-date',
      classes: '--onste'
    },
    {
      title: 'follow up / thanks',
      key: 'onsite-thanks',
      classes: '--onste'
    },
    {
      title: 'success/fail?',
      key: 'onsite-success',
      classes: '--onste'
    },
    {
      title: 'type',
      key: 'offer-type',
      classes: '--offer'
    },
    {
      title: 'comp',
      key: 'offer-comp',
      classes: '--offer'
    },
    {
      title: 'negotiated',
      key: 'offer-negotiated',
      classes: '--offer'
    },
    {
      title: 'final comp',
      key: 'offer-final-comp',
      classes: '--offer'
    },
    {
      title: 'accepted/rejected?',
      key: 'offer-accepted',
      classes: '--offer'
    }
  ]

  /**
   * column groups array indicates the column grouping and their title
   * will be rendered as column master headers/groups 
   */
  const columnGroups = [
    {
      title: '',
      colSpan: 8
    },
    {
      title: 'phone screen',
      colSpan: 3,
      classes: ['--phone-screen']
    },
    {
      title: 'coding challenge',
      colSpan: 4,
      classes: ['--challenge']
    },
    {
      title: 'onsite',
      colSpan: 3,
      classes: ['--onsite']
    },
    {
      title: 'offer',
      colSpan: 5,
      classes: ['--offer']
    }
  ]

  return (
    <Table cols={columns} colGroups={columnGroups} data={props.data} class="--jobs" />
  )
}

export default JobsTable;
