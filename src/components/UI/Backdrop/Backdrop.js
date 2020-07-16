import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './backdrop.css';

const Backdrop = ({ setBackdropState, backdropState }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={backdropState}
      timeout={300}
      classNames="open"
    >
      <div className="backdrop" onClick={setBackdropState}></div>
    </CSSTransition>
  );
};

export default Backdrop;
