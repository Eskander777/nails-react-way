import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './imageModal.css';

const ImageModal = ({ imgSrc, imageClicked, imgShowState }) => {
  const [imageToShow, setImageToShow] = useState();

  if (imgShowState && (!imageToShow || imageToShow !== imgSrc)) {
    setImageToShow(imgSrc);
  } else if (!imgShowState && imageToShow) {
    setTimeout(() => {
      setImageToShow(imgSrc);
    }, 300);
  }

  const imgShowModule = (
    <div className="image-modal">
      <img src={imageToShow} alt="" onClick={imageClicked} />
    </div>
  );

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={imgShowState}
      timeout={300}
      classNames="open-img-modal"
    >
      {imgShowModule}
    </CSSTransition>
  );
};

export default ImageModal;
