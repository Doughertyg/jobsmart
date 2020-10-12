import React from 'react';

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
const JobRow = ({ job }) => {
  const { job: { company, title, link, starred, active, stages } } = props;
  const jobRowClass = active ? "job-row__wrapper" : "job-row__wrapper --inactive";
  const starClass = starred ? 'job-row__star --starred' : 'job-row__star';

  return (
    <div className={jobRowClass}>
      <div className="job-row__basic-info">
        <span className={starClass}>&#9733;</span>
        <p>{company}</p>
        <p>{title}</p>
        <a href={link} className="job-row__link">{formatLink(link)}</a>
      </div>
      {
        stages.map(stage => {
          switch (stage.name) {
            case 'outreach':
              return (
                <div />
              );
            case 'application':
              return (
                <div />
              );
          }
        })
      }
    </div>
  )
}

export default JobRow;
