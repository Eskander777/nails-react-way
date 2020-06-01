import React from 'react';
import { NavLink } from 'react-router-dom';

import './toolbar.css';

const Toolbar = (props) => {
  return (
    <header className="main-header">
      <div className="main-header__brand">
        <button className="toggle-button" onClick={props.showSideDrawerHandler}>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
          <span className="toggle-button__bar"></span>
        </button>
        <NavLink to="/">Главная</NavLink>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <NavLink
              to="../exapmles"
              activeStyle={{ color: 'white', backgroundColor: '#f7338ecc' }}
            >
              Примеры работ
            </NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink
              to="../order_page"
              activeStyle={{ color: 'white', backgroundColor: '#f7338ecc' }}
            >
              Записаться сейчас
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Toolbar;
