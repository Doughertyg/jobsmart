import React from 'react';

const Button = (props) => {
  const classes = `btn ${props.classes ? props.classes : ''} ${props.primary ? 'primary' : ''}`;

  return (
    <div className={classes} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button;
