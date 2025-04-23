import React, { useEffect, useState } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router';

// import AuthPage from './pages/Auth/AuthPage';
import Root from './app/Root';
import CustomOrderPage from './pages/CustomOrderPage/CustomOrderPage'
// import UserApi from './entities/user/UserApi';
import { setAccessToken } from './shared/lib/axiosInstance';


function App() {
  const [user, setUser] = useState(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root user={user} setUser={setUser} />}>
          {/* <Route index element={<MainPage />} /> */}
          <Route path='/customOrder' element={<CustomOrderPage />} />
          {/* <Route path='/tasks' element={<TasksPage />} />
          <Route path='/tasks/:id' element={<TaskDetailed />} />
          <Route path='/auth' element={<AuthPage setUser={setUser} />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
