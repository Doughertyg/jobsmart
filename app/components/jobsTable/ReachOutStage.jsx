import React from 'react';

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
function ReachOutStage(props) {
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
              return <input type="text">{cell.value}</input>;
            case 'date':
              return <input type="date">{cell.value}</input>;
            case 'bool':
              return (
                <select value={/* state ref */} onChange={/* something here */}>{contact}
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              );
            default:
              return <input type="text">{cell.value}</input>;
          }
        })}
      </div>
    </div>
  )
}


export default ReachOutStage;
