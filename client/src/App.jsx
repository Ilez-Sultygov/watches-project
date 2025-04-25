import React, { useEffect } from "react";
import CustomOrderPage from "./pages/CustomOrderPage/CustomOrderPage";
import UserApi from "./entities/user/UserApi";
import { setAccessToken } from "./shared/lib/axiosInstance";
import("./App.css");
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./app/Root";
import AuthPage from "./pages/auth/AuthPage";
import { useState } from "react";
import Mainpage from "./pages/Mainpage/mainpage";
import AdminProfilePage from "./pages/AdminProfilePage/AdminProfilePage";
import WatchDetails from "./pages/Mainpage/WatchDetails";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import OrderConfirmation from './pages/Mainpage/OrderConfirmation';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserApi.refreshTokens()
      .then(({ error, data, statusCode }) => {
        if (error) {
          setUser(null);
          return;
        }
        if (statusCode === 200) {
          setUser(data.user);
          setAccessToken(data.accessToken);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root user={user} setUser={setUser} />}>
          <Route index element={<Mainpage user={user} />} />
          <Route path="/watch/:id" element={<WatchDetails user={user} />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route
            path="/userProfile"
            element={<UserProfilePage user={user} />}/>
          <Route path='/customOrder' element={<CustomOrderPage />} />
          <Route path='/adminProfile' element={<AdminProfilePage  user={user}/>} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
