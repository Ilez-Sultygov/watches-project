import { useEffect, useState } from "react";
import "./UserProfilePage.css";
import { axiosInstance } from "../../shared/lib/axiosInstance";

export default function UserProfilePage({ user }) {
  let userName = "";
  const [id, setId] = useState(null);

  console.log(user);
  if (user) {
    userName = user.username;
  } else {
    userName = "Гость";
  }

  const [orders, setOrders] = useState([]);
  const [customOrders, setCustomOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      setId(user.id);
      try {
        const { data } = await axiosInstance.get(`orders/userOrders/${id}`);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    }
    async function getCustomOrders() {
      setId(user.id);
      try {
        const { data } = await axiosInstance.get(`/userCustomOrders/${id}`);
        setCustomOrders(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
    getCustomOrders();
  }, [id, user]);

  console.log("orders ==>", orders);
  console.log("custom orders ==>", customOrders);

  return (
    <div className="user-profile-container">
      <br />
      <div className="greeting">Привет, {userName}!</div>
      <br />
      <div className="orders-headline">
        {orders.length
          ? `Вот твои заказы (${orders.length}):`
          : `Заказы не найдены`}
      </div>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={order.id} className="order-data">
            {index + 1}. Код заказа: {order.id} | Модель: {order.Watch.model} |
            Цена: ${order.Watch.price} | Артикул: {order.Watch.id}
          </div>
        ))}
      </div>
      <br />
      <div className="custom-orders-headline">
        {customOrders.length
          ? `Вот твои особые заказы (${customOrders.length}):`
          : `Особые заказы не найдены`}
      </div>
      <div className="custom-orders-list">
        {customOrders.map((customOrder, index) => (
          <div key={customOrder.id} className="custom-data">
            {index + 1}. Код заказа: {customOrder.id} |{" "}
            {customOrder.phone
              ? `Телефон, который вы указали: ${customOrder.phone}`
              : "Вы не указали телефон для связи!"}
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
