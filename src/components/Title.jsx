import './Title.css';

import React from 'react';

const Title = (props) => {

  return (
    <h1 className='Title'>{props.title}</h1>
  );
}

export default (Title)