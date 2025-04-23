import { NavLink, useNavigate } from "react-router";
import UserApi from "../../entities/user/UserApi";
import "./Header.css";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await UserApi.signOut();
      if (response.statusCode === 200) {
        setUser(null);
        navigate("/");
      } else {
        alert(response.error || "Ошибка при выходе");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка при выходе");
    }
  };

  return (
    <header className="header">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `header__link ${isActive ? "header__link--active" : ""}`
        }
      >
        Главная
      </NavLink>
      {user ? (
        <button onClick={handleSignOut}>Выйти</button>
      ) : (
        <NavLink to="/auth">Войти</NavLink>
      )}
    </header>
  );
}
