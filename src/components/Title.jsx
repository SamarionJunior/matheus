import './Title.css';

import React from 'react';

const Title = (props) => {

  return (
    <div className="Title">
      <div className='Content'>
        <h1 className='TitleH1'>
          {props.title}
        </h1>
      </div>
    </div>
  );
}

export default (Title)