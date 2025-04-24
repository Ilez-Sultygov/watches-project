import React, { useEffect, useState } from 'react';
import './mainpage.css';
import axios from 'axios'
import { Link } from 'react-router';

const WatchCard = ({ watch }) => {
  return (
    <div className="watch-card">
      <img src={`http://localhost:3000/static/images/${watch.img}`} alt={watch.model} className="watch-image" />
      <h3>{watch.model}</h3>
      <p>{watch.description}</p>
      <p className="price">${watch.price}</p>
      <Link to={`/watch/${watch.id}`} className="details-button">
        Подробнее
      </Link>
    </div>
  );
};

export const WatchCatalog = () => {
  const [watches, setWatches] = useState([])
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
    <div className="catalog-container">
      <div className="watch-catalog">
        <h2>Каталог часов</h2>
        <div className="watch-grid">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default WatchCatalog;
