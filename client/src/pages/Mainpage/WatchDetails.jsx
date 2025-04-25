import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './WatchDetails.css';

const WatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWatchDetails = async () => {
      try {
        const { data } = await axios.get(`/api/watch/${id}`);
        setWatch(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchWatchDetails();
  }, [id]);

  const handleOrder = () => {
    navigate('/order-confirmation', {
      state: { 
        watchModel: watch.model,
        watchPrice: watch.price,
        watchImage: watch.img
      }
    });
  };

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;
  if (!watch) return <div className="error">Часы не найдены</div>;

  return (
    <div className="watch-details-container">
      <div className="watch-details">
        <div className="watch-image-container">
          <img 
            src={`http://localhost:3000/static/images/${watch.img}`} 
            alt={watch.model} 
            className="watch-details-image" 
          />
        </div>
        <div className="watch-info">
          <h1>{watch.model}</h1>
          <p className="watch-price">${watch.price}</p>
          
          {/* <div className="watch-specs">
            <h3>Характеристики:</h3>
            <ul>
              <li><strong>Бренд:</strong> {watch.brand || 'Не указано'}</li>
              <li><strong>Механизм:</strong> {watch.movement || 'Не указано'}</li>
              <li><strong>Материал корпуса:</strong> {watch.caseMaterial || 'Не указано'}</li>
              <li><strong>Размер корпуса:</strong> {watch.caseSize || 'Не указано'} мм</li>
              <li><strong>Водозащита:</strong> {watch.waterResistance || 'Не указано'}</li>
            </ul>
          </div> */}

          <div className="watch-description">
            <h3>Описание:</h3>
            <p>{watch.description || 'Описание отсутствует'}</p>
          </div>

          <div className="watch-actions">
            <button className="back-button" onClick={() => window.history.back()}>
              Вернуться в каталог
            </button>
            <button className="order-button" onClick={handleOrder}>
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;