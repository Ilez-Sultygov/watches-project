import { useEffect, useState } from "react";
import "./UserProfilePage.css";
import { axiosInstance } from "../../shared/lib/axiosInstance";

export default function UserProfilePage({ user }) {
  let userName = "";
  const id = user.id;
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
      try {
        const { data } = await axiosInstance.get(`orders/userOrders/${id}`);
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    }
    async function getCustomOrders() {
      try {
        const { data } = await axiosInstance.get(`/userCustomOrders/${id}`);
        setCustomOrders(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
    getCustomOrders();
  }, []);

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
            {index + 1}. Код заказа: {order.id}
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
            {index + 1}. Код заказа: {customOrder.id}
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
