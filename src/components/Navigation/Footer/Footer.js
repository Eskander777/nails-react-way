import React from 'react';
import {Link} from 'react-router-dom'

import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <nav>
        <ul>
          <li className="main-footer__item">
            <Link to="/support">Support</Link>
          </li>
          <li className="main-footer__item">
            <Link to="/terms-of-use">Terms of Use</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
