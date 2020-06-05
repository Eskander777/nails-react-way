import React, { useState } from 'react';
import Aux from '../../hoc/auxilliary/Auxilliary';

import './examplesPage.css';
import ImageModal from '../UI/ImageModal/ImageModal';
import Backdrop from '../UI/Backdrop/Backdrop';
import Example from './Example/Example';

const Examples = () => {
  const images = [
    '87R0QnsacZE.jpg',
    'Ai8pLNvzMLU.jpg',
    'C-fE6t461tQ.jpg',
    'el4MAhzEkgc.jpg',
    'gL9s-8KMDZQ.jpg',
    'kT_B8O2GIyo.jpg',
    'MD1OY-GWdro.jpg',
    'MPywfLbRRLw.jpg',
    'NqCGQ_PhgY0.jpg',
    'ogkmb5RzLyU.jpg',
  ];

  const [pickedImage, setPickedImage] = useState(false);

  const pickImgHandler = (event) => {
    setPickedImage(event.target.src);
  };

  const backdropStateHandler = () => {
    setPickedImage(null);
  };

  const imageClickHandler = () => {
    if (pickedImage) {
      let image = pickedImage.replace('http://localhost:3000/assets/', '');
      let imgIndex = images.indexOf(image);
      let nextImgIndex = imgIndex + 1;
      let nextImage = 'http://localhost:3000/assets/' + images[nextImgIndex];
      if (nextImgIndex >= images.length) {
        setPickedImage(null);
      } else {
        setPickedImage(nextImage);
      }
    }
  };

  let examples = images.map((image, index) => {
    return (
      <Example
        path={'assets/' + image}
        key={index}
        clicked={(event) => pickImgHandler(event)}
      />
    );
  });

  let imgShowState = pickedImage ? true : false;

  return (
    <Aux>
      <Backdrop
        setBackdropState={backdropStateHandler}
        backdropState={pickedImage}
      />
      <ImageModal
        imgSrc={pickedImage}
        imgShowState={imgShowState}
        imageClicked={imageClickHandler}
      />
      <div className="examples">{examples}</div>
    </Aux>
  );
};

export default Examples;
