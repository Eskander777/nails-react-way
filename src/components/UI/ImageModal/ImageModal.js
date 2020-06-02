import React from 'react';

import './imageModal.css';

const ImageModal = (props) => {
  let pickedImage;
  let classImageModal;

  switch (props.imgSrc) {
    case null:
      classImageModal = 'image-modal';
      pickedImage = null;
      break;
    default:
      pickedImage = <img src={props.imgSrc} alt="" />;
      classImageModal = 'image-modal open';
  }

  return <div className={classImageModal}>{pickedImage}</div>;
};

export default ImageModal;
