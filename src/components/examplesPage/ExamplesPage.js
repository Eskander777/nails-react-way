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
    setPickedImage(false);
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

  let moduleForImage = pickedImage ? <ImageModal imgSrc={pickedImage} /> : null;
  let backdrop = pickedImage ? (
    <Backdrop setBackdropState={backdropStateHandler} />
  ) : null;

  return (
    <Aux>
      {backdrop}
      {moduleForImage}
      <main>
        <div className="examples">{examples}</div>
      </main>
    </Aux>
  );
};

export default Examples;