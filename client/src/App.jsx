import("./App.css");
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./app/Root";
import AuthPage from "./pages/auth/AuthPage";
import { useState } from "react";
// import Mainpage from './pages/Mainpage/mainpage'

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root user={user} setUser={setUser} />}>
          {/* <Route index element={<Mainpage user={user} />} /> */}
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//      <Mainpage />
//     </div>
//   );
// }
// export default App;
