import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobRow from './JobRow.jsx';
import { fetchJobsURI } from '../../../server/endpoints.js';

import './jobsTable.scss';


/**
 * JobsTable
 * fetches and populates jobs on state as an array of job objects
 * iterates over jobs array to render a JobRow for each
 * clicking on a row will toggle edit mode which will make the row a modal
 *   toggle modal background cover on table and 'editing' state
 *   pass editing prop to row, expand element, make editable, add class
 * 
 * when editing a job row, user changes state on row and on 'save' passes state
 *   to save fn passed down from JobsTable
 * 
 * Each row receives:
 *   fn to update job:
 *     set loading state,
 *     update job, 
 *     set loading state false,
 *     set success state if success,
 *     re-fetch jobs if success,
 *     set error if error
 *   pass in fn to set editing state
 * 
 * shape of job json:
 * 
 * {
 *    company:
 *    title:
 *    link:
 *    starred:
 *    active:
 *    stages: [
 *      {
 *        stage: 'outreach' || 'application' || ...
 *        data: { title, type, value }
 *      }
 *    ]
 * }
 * 
 * 
 * 
 */
const JobsTable = ({ alert }) => {
  const [ jobs, setJobs ] = useState([]);
  const [ editing, setEditing ] = useState(null);

  function fetchJobsAndSetState() {
    axios.get(`/api/v1${fetchJobsURI}`)
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
      {jobs.map((row, index) => (
        <JobRow idx={index} key={`job-table__row${index}`} refresh={fetchJobsAndSetState} editing={index === editing} setEditing={setEditing} job={row} alert={alert} /* pass functions here */ />
      ))}
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

  // return (
  //   <Table cols={columns} colGroups={columnGroups} data={props.data} class="--jobs" />
  // )
}

export default JobsTable;
