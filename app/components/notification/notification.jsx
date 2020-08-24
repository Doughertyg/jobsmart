import React from 'react';

const Notification = (props) => {
  return (
    <div className="app__notification">
      <p>{props.msg}</p>
    </div>
  )
}

export default Notification;
