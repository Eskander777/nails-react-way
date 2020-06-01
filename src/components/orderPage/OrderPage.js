import React from 'react';

import './orderPage.css';

const OrderPage = () => {
  return (
    <div className="order-page__background">
      <form action="index.html" className="order-form">
        <label htmlFor="last-name">Фамилия</label>
        <input type="text" id="last-name" />
        <label htmlFor="first-name">Имя</label>
        <input type="text" id="first-name" />
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" />
        <label htmlFor="phone-number">Телефон</label>
        <input type="tel" id="phone-number" />
        <div className="order-form__button-container">
          <button type="submit" disabled>Записаться</button>
        </div>
      </form>
    </div>
  );
};

export default OrderPage;
