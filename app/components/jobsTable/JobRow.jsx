import React, { useState } from 'react';
import JobStage from './JobStage.jsx';

const domainRegex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/i;

/**
 * simple memoized function for formatting a link
 * regex can be slow so it is memoized 
 * @param {string} link url link to format
 */
function formatLink(link) {
  let cache = {};

  return (function (link) {
    if (!cache[link]) {
      cache[link] = link.match(domainRegex);
    }

    return cache[link];
  })(link);
}

/**
 * JobRow renders a job using the job prop
 *  job prop is an object of this shape:
 *    { company: companyName, title: jobTitle, link: jobLink, starred: bool, active: bool, stages: []}
 *       stages is an array of stages with this shape: { name: stageName, data: [{field: data}]}
 * 
 *  
 * 
 * @param {object} props props object received 
 */
const JobRow = ({ job, setEditing, editing, key }) => {
  const { company, title, link, starred, active, stages } = job;

  /*
  shape of job object:
   job: { company, title, link, starred, active, stages } } = props;

   */
  const [ jobState, setJobState ] = useState(job);
  const jobRowClass = `job-row__wrapper ${active ? '' : '--inactive'} ${editing ? '--editing' : ''}`;
  const starClass = starred ? 'job-row__star --starred' : 'job-row__star';

  function handleStageChange(idx, value) {
    const newJob = job;
    newJob.stages[idx].value = value;
    setJobState(newJob);
  }

  function handleJobChange(val) {
    const newJob = {...job, ...val};
    setJobState(newJob);
  }

  return (
    <div className={jobRowClass}>
      <div className="job-row__basic-info">
        <span className={starClass} onClick={() => handleJobChange({ starred: !starred })}>&#9733;</span>
        {editing ?
          <>
            <input onChange={e => handleJobChange({ company: e.target.value })}>{company}</input>
            <input onChange={e => handleJobChange({ title: e.target.value })}>{title}</input>
            <input onChange={e => handleJobChange({ link: e.target.value })}>{formatLink(link)}</input>
          </> :
          <>
            <p>{company}</p>
            <p>{title}</p>
            <a href={link} className="job-row__link">{formatLink(link)}</a>
          </>}
      </div>
      <div className="job-row__stages" onClick={() => setEditing(key)}>
        {
          stages.map((stage, index) => {
            return <JobStage index={index} handleChange={handleStageChange} />
          })
        }
      </div>
    </div>
  )
}

export default JobRow;
