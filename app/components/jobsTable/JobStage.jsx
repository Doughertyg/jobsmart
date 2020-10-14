import React from 'react';
import { call } from 'file-loader';

/**
 * Reach Out job stage component
 * renders info and fields for the reach out stage
 * props:
 *   stage: "outreach" || "application" || etc...
 *   data: [
 *     {
 *       title: 'who' || 'via' || 'initial' || 'date' || etc...,
 *       type: 'text' || 'bool' || 'date' || etc...,
 *       value: value
 *     },
 *   ]
 */
function JobStage(props) {
  /*
    ______________________________________
  :`_____________reach out________________`;
  | who | via | initial | last | referral? |
  |     |     |         |      |           |
  ':,____________________________________,:'

  shape of reachout stage data:

  data: {
    contact: contact,
    via: contacted via,
    initial: initial contact,
    last: last contacted,
    referral: referral received
  }
  
  
  
  */

  const { handleChange, index } = props;

  const { data, stage } = props;

  return (
    <div className="stage__wrapper">
      <div className="stage__header">
        <div className="stage__header-main">{stage}</div>
        <div className="stage__header-sub">
          {data.map(cols => <spane>{cols.title}</spane>)}
        </div>
      </div>
      <div className="stage__data">
        {data.map(cell => {
          switch (cell.type) {
            case 'text':
            case 'date':
              return <input type={cell.type} onChange={e => handleChange(index, e.target.value)}>{cell.value}</input>;
            case 'bool':
              return (
                <select value={cell.value} onChange={e => handleChange(index, e.target.value)}>{contact}
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              );
            default:
              return <input type="text" onChange={e => handleChange(index, e.target.value)}>{cell.value}</input>;
          }
        })}
      </div>
    </div>
  )
}

export default JobStage;
