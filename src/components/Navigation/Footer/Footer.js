import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <nav>
        <ul>
          <li className="main-footer__item">
            <a href="/support">Support</a>
          </li>
          <li className="main-footer__item">
            <a href="/terms-of-use">Terms of Use</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
