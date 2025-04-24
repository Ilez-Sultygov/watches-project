import React, { useState } from "react";
import axios from "axios";
import "./AdminProfilePage.css";

export default function AdminProfilePage() {
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState(null);
  const [imageAd, setImageAd] = useState("");

  //   console.log(imageAd);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !model || !description || !price) {
      alert("Заполните модель, описание, цену часов и загрузите файл");
      return;
    }

    const formData = new FormData();
    formData.append("model", model);
    formData.append("image", file);
    formData.append("description", description);
    formData.append("price", price);

    try {
      const res = await axios.post("/api/adminProfile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      //   console.log(res.data)

      const uploadedImageAd = res.data.data.imageAd;
      // console.log(uploadedImageUrl);

      setImageAd(uploadedImageAd);
      alert("Файл успешно загружен");
    } catch (err) {
      console.error(err);
      alert("Ошибка загрузки");
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="form"
      >
        <div className="form-group">
          <label>Модель часов:</label>
          <input
            type="text"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
            className="input"
          />
              </div>
              
              <div className="form-group">
          <label>Описание часов:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="input"
          />
              </div>
              
              <div className="form-group">
          <label>Стоимость:</label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="form-group">
          <label>Загрузите изображение:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="input-file"
          />
        </div>

        <button type="submit" className="button">
          Добавить новые часы
        </button>
      </form>

      {imageAd && (
        <div className="preview">
          <h3>Загруженное изображение:</h3>
          <img
            src={`http://localhost:3000${imageAd}`}
            alt="Загруженное изображение"
            className="preview-img"
          />
        </div>
      )}
    </div>
  );
}
