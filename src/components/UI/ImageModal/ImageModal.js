import React from 'react';

import './imageModal.css';

const ImageModal = (props) => {
  return (
    <div className="image-modal">
      <img src={props.imgSrc} alt="" />
    </div>
  );
};

export default ImageModal;
