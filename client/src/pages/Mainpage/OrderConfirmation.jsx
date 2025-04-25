import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { watchModel } = location.state || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <h1>Спасибо заказ!</h1>
        {watchModel && <p>Вы заказали: <strong>{watchModel}</strong></p>}
        <p>Наш менеджер свяжется с вами в ближайшее время для подтверждения заказа.</p>
        <button 
          onClick={() => navigate('/')}
          className="back-to-catalog"
        >
          Вернуться в каталог
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;