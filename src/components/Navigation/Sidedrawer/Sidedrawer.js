import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './sidedrawer.css';

const Sidedrawer = ({close, sideShowState}) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={sideShowState}
      timeout={200}
      classNames='open-sidedrawer'
    >
      <nav className="mobile-nav">
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to="/" onClick={close}>
              Главная
            </Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="../exapmles" onClick={close}>
              Примеры работ
            </Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="../order_page" onClick={close}>
              Записаться сейчас
            </Link>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default Sidedrawer;
