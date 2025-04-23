import React, { useState } from "react";
import axios from "axios";

export default function CustomOrderPage () {
  const [phone, setPhone] = useState("");
    const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !phone) {
      alert("Заполните номер и загрузите файл");
      return;
    }

    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("image", file); 

    try {
      const res = await axios.post("/api/customOrder", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Файл успешно загружен");
    } catch (err) {
      console.error(err);
      alert("Ошибка загрузки");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 max-w-md mx-auto">
      <div>
        <label>Номер телефона:</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border p-2 rounded w-full mt-1"
        />
      </div>

      <div>
        <label>Загрузите изображение:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="block mt-1"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Отправить
      </button>
    </form>
  );
};


