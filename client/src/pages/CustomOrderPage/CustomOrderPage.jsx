import React, { useState } from "react";
import axios from "axios";
import './CustomOrderPage.css'

export default function CustomOrderPage() {
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); // ← для отображения картинки

//   console.log(imageUrl);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !phone) {
      alert("Заполните номер телефона и загрузите файл");
      return;
    }

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("image", file);


    try {
      const res = await axios.post("/api/customOrder", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    //   console.log(res.data)
      
        const uploadedImageUrl = res.data.data.imageUrl;
        // console.log(uploadedImageUrl);
        
      setImageUrl(uploadedImageUrl);
      alert("Файл успешно загружен");
    } catch (err) {
      console.error(err);
      alert("Ошибка загрузки");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="form">
        <div className="form-group">
          <label>Номер телефона:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          Отправить
        </button>
      </form>

      {imageUrl && (
        <div className="preview">
          <h3>Загруженное изображение:</h3>
          <img src={`http://localhost:3000${imageUrl}`} alt="Загруженное изображение" className="preview-img" />
        </div>
      )}
    </div>
  );
}