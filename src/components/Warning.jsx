import './Warning.css';

import React from 'react';

const Warning = (props) => {

  return (
    <div className='Warning-Txt'>
        {props.text}
    </div>
  );
}

export default (Warning)