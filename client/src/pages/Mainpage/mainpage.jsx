
import React, { useEffect, useState } from 'react';
import './mainpage.css';
import axios from 'axios'
import path from 'path'



const WatchCard = ({ watch }) => {
  return (
    <div className="watch-card">
      <img src={`http://localhost:3000/${watch.image}`} alt={watch.name} className="watch-image" />
      <h3>{watch.name}</h3>
      <p>{watch.description}</p>
      <p className="price">${watch.price}</p>
      <button className="buy-button">Купить</button>
    </div>
  );
};

export const WatchCatalog = () => {
  // const watches = [
  //   {
  //     id: 1,
  //     name: 'Classic Elegance',
  //     description: 'Классические часы с кожаным ремешком',
  //     price: 249.99,
  //     image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  //   },
  //   {
  //     id: 2,
  //     name: 'Sport Pro',
  //     description: 'Спортивные часы с водонепроницаемостью',
  //     price: 199.99,
  //     image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  //   },
  //   {
  //     id: 3,
  //     name: 'Luxury Gold',
  //     description: 'Роскошные золотые часы премиум класса',
  //     price: 899.99,
  //     image: 'https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  //   },
  //   {
  //     id: 4,
  //     name: 'Minimalist',
  //     description: 'Современный минималистичный дизайн',
  //     price: 179.99,
  //     image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  //   }
  // ];

  const [watches, setWatches] = useState([])

  useEffect (() => {
    async function getData() {
      try {
        const {data} = await axios.get('/api/watch')
        setWatches(data)
      }
      catch(error) {
        console.log(error)
      }
    }
    getData()
  }, [])


  return (
    <div className="catalog-container">
      <div className="watch-catalog">
        <h2>Каталог часов</h2>
        <div className="watch-grid">
          {watches.map(watch => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchCatalog;