import React, { useEffect, useState } from "react";
import "./mainpage.css";
import axios from "axios";
import { Link } from "react-router";
import { axiosInstance } from "../../shared/lib/axiosInstance";

const WatchCard = ({ setWatches, watch, user }) => {
  // console.log(watch.img);
  // console.log(user);

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
      <img
        src={`http://localhost:3000/uploadsAdmin/${watch.img}`}
        alt={watch.model}
        className="watch-image"
      />
      <h3>{watch.model}</h3>
      <p className="price">${watch.price}</p>
      <button className="order-button">
        <Link to={`/watch/${watch.id}`} className="details-button">
          Подробнее
        </Link>
      </button>
      {user && user.isAdmin && (
        <button
          type="button"
          onClick={() => deleteWatchHandler(watch.id)}
          className="watchCard__delete-button"
        >
          Удалить
        </button>
      )}
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
    <div className="catalog-container">
      <div className="watch-catalog">
        <h2>Каталог часов</h2>
        <div className="watch-grid">
          {watches.map((watch) => (
            <>
              <WatchCard
                key={watch.id}
                user={user}
                setWatches={setWatches}
                watch={watch}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchCatalog;
