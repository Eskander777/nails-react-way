import React from 'react';

import './example.css';

const Example = (props) => {
  return (
    <div className="example">
      <img
        className="example-image"
        src={props.path}
        alt=""
        onClick={props.clicked}
      />
    </div>
  );
};

export default Example;
