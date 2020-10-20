import React from 'react';
import { call } from 'file-loader';

/**
 * Job stage component
 * renders info and fields for for any stage based on passed in stage data
 * props:
 *  stage:
 *  {
 *   stage: "outreach" || "application" || etc...
 *   data: [
 *     {
 *       title: 'who' || 'via' || 'initial' || 'date' || etc...,
 *       type: 'text' || 'bool' || 'date' || etc...,
 *       value: value
 *     },
 *   ]
 *  },
 *  handleChange: fn to update the job on state in parent for controlled inputs
 *  index: index of the stage in the job's stages array
 */
function JobStage(props) {
  const { handleChange, index, stage: { stage, data } } = props;

  return (
    <div className="stage__wrapper">
      <div className="stage__header">
        <div className="stage__header-main">{stage}</div>
        <div className="stage__header-sub">
          {data.map((cols, idx) => <span key={`stage-col__${idx}`}>{cols.title}</span>)}
        </div>
      </div>
      <div className="stage__data">
        {data.map((cell, idx) => {
          switch (cell.type) {
            case 'text':
            case 'date':
              return (
                <input key={`stage-cell__${idx}`} value={cell.value} type={cell.type} onChange={e => handleChange(index, idx, e.target.value)} />);
            case 'bool':
              return (
                <select key={`stage-cell__${idx}`} value={cell.value} onChange={e => handleChange(index, idx, e.target.value)}>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              );
            default:
              return (
                <input key={`stage-cell__${idx}`} value={cell.value} type="text" onChange={e => handleChange(index, idx, e.target.value)} />);
          }
        })}
      </div>
    </div>
  )
}

export default JobStage;
