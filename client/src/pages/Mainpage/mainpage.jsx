import React, { useEffect, useState } from "react";
import "./mainpage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../shared/lib/axiosInstance";

const WatchCard = ({ setWatches, watch, user }) => {
  async function deleteWatchHandler(id) {
    try {
      const deleteWatch = await axiosInstance.delete(`/watch/${id}`);

      if (deleteWatch.statusCode !== 200) {
        setWatches((prev) => prev.filter((watch) => watch.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="watch-card">
      <div className="watch-image-container">
        <img
          src={`http://localhost:3000/uploadsAdmin/${watch.img}`}
          alt={watch.model}
          className="watch-image"
        />
      </div>
      <div className="watch-info">
        <h3>{watch.model}</h3>
        <p className="price">${watch.price}</p>
        <div className="card-actions">
          <button className="details-button">
            <Link to={`/watch/${watch.id}`}>Подробнее</Link>
          </button>
          {user && user.isAdmin && (
            <button
              type="button"
              onClick={() => deleteWatchHandler(watch.id)}
              className="delete-button"
            >
              Удалить
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const WatchCatalog = ({ user }) => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("/api/watch");
        setWatches(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="watch-app">
      <div 
        className="parallax-banner"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        }}
      >
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h1>Эксклюзивная коллекция часов</h1>
          <p>Откройте для себя мир точности и стиля</p>
        </div>
      </div>

      <div className="catalog-container">
        <div className="watch-catalog">
          <h2>Каталог часов</h2>
          <div className="watch-grid">
            {watches.map((watch) => (
              <WatchCard
                key={watch.id}
                user={user}
                setWatches={setWatches}
                watch={watch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchCatalog;