import './Footer.css';

import React from 'react';

const Footer = (props) => {

  return (
    <div className='Footer'>
      <div className="Content">
        {props.footer}
      </div>
    </div>
  );
}

export default (Footer)