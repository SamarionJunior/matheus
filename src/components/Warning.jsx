import './Warning.css';

import React from 'react';

const Warning = (props) => {
  return (
    <div className='Warning-Txt' style={{top: props.newValue}}>
      <div className="ContentWarning">
        <div className="WarningTitle">
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default (Warning)