import React from 'react';
import { Link } from 'react-router-dom';

import './sidedrawer.css';

const Sidedrawer = (props) => {
  let sideDrawerClassName = props.sideShowState.showSideDrawer
    ? 'mobile-nav open'
    : 'mobile-nav';

  return (
    <nav className={sideDrawerClassName}>
      <ul className="mobile-nav__items">
        <li className="mobile-nav__item">
          <Link to="/" onClick={props.close}>
            Главная
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="../exapmles" onClick={props.close}>
            Примеры работ
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="../order_page" onClick={props.close}>
            Записаться сейчас
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidedrawer;
