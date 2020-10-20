import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobStage from './JobStage.jsx';
import Button from '../button/button.jsx';

const domainRegex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/i;

/**
 * simple memoized function for formatting a link
 * regex can be slow so it is memoized 
 * @param {string} link url link to format
 */
function formatLink(link) {
  let cache = {};

  // return (function (link) {
  //   if (!cache[link]) {
  //     cache[link] = link.match(domainRegex);
  //   }

  //   return cache[link];
  // })(link);

  return link.match(domainRegex);
}

/**
 * JobRow renders a job using the job prop
 *  job prop is an object of this shape:
 *    { company: companyName, title: jobTitle, link: jobLink, starred: bool, active: bool, stages: []}
 *       stages is an array of stages with this shape: { stage: stageName, data: [{title: title, type: type, value: value}]}
 * @param {object} props props object received 
 */
const JobRow = ({ alert, job, setEditing, editing, idx, refresh }) => {
  const jobPropCopy = JSON.parse(JSON.stringify(job));
  const [ jobState, setJobState ] = useState(jobPropCopy);
  const { _id, company, title, link, starred, active, stages } = jobState;
  const jobRowClass = `job-row ${active ? '' : '--inactive'} ${editing ? '--modal --editing' : ''}`;
  const starClass = starred ? 'job-row__star --starred' : 'job-row__star';

  function deleteJob() {
    /* delete job */
  }

  function fetchJob(fn) {    
    axios.get(`/api/v1/jobs/${_id}`)
      .then(({ data }) => {
        setJobState(data[0]);
        fn();
      })
      .catch(err => {
        fn();
        // set error on state
        // TODO: error state and message should be separate and explicit
        alert({ type: 'error', message: err });
      })
  }

  function createJob() {
    /* create job */
  }

  function updateJob(fn) {
    axios.put(`/api/v1/jobs/${jobState._id}`, { job: jobState })
      .then(({ data }) => {
        setJobState(data);
        fn();
      })
      .catch(err => {

        alert({ type: 'error', message: err })
      });
  }

  function handleStageChange(stageIdx, colIdx, value) {
    const newJob = {...jobState};

    newJob.stages[stageIdx].data[colIdx].value = value;
    setJobState(newJob);
  }

  function handleJobChange(val) {
    const newJob = {...jobState, ...val};
    setJobState(newJob);
  }

  return (
    <>
      <div className="job-row__wrapper">
        <span className={starClass} onClick={() => handleJobChange({ starred: !starred })}>&#9733;</span>
        <div className={jobRowClass}>
          <div className="job-row__basic-info">
            {editing ?
              <>
                <input onChange={e => handleJobChange({ company: e.target.value })} value={company} />
                <input onChange={e => handleJobChange({ title: e.target.value })} value={title} />
                <input onChange={e => handleJobChange({ link: e.target.value })} value={formatLink(link)} />
              </> :
              <>
                <p>{company}</p>
                <p>{title}</p>
                <a href={link} className="job-row__link">{formatLink(link)}</a>
              </>}
          </div>
          <div className="job-row__stages" onClick={() => setEditing(idx)}>
            {
              stages.map((stage, index) => {
                return <JobStage stage={stage} key={`job-stage__${index}`} index={index} handleChange={handleStageChange} />
              })
            }
          </div>
        </div>
      </div>
      {editing && (
        <>
          <Button classes="--modal" onClick={() => fetchJob(() => setEditing(null))}>X</Button>
          <Button classes="--modal" onClick={() => updateJob(() => setEditing(null))}>SAVE</Button>
        </>
      )}
    </>
  )
}

export default JobRow;
