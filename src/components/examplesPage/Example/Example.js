import React from 'react';

import './example.css';

const Example = ({path, clicked}) => {
  return (
    <div className="example">
      <img
        className="example-image"
        src={'assets/' +  path}
        alt=""
        onClick={clicked}
      />
    </div>
  );
};

export default Example;
