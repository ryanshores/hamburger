import React from 'react';

import classes from './Button.css'

const button = (props) => {
  return ( 
    <button
      className={
        [
          classes.Button, 
          classes[props.btnType]
        ].join(' ')
      }
      onClick={props.clicked}
      // onClick={() => alert('Clicked')}
      >{props.children}</button>
   );
}
 
export default button;