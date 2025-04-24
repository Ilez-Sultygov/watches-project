import { NavLink, useNavigate } from "react-router";
import UserApi from "../../entities/user/UserApi";
import "./Header.css";
import { setAccessToken } from "../../shared/lib/axiosInstance";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await UserApi.signOut();
      if (response.statusCode === 200) {
        setUser(null);
        setAccessToken("");
        navigate("/");
      } else {
        // console.log(response.data.error);
        alert(response.error || "Ошибка при выходе");
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка при выходе");
    }
  };

  return (
    <header className="header prosto-one-regular">
      <div className="company-info">
        <div className="company-name kablammo-watchCompany">
          Часики-то тикают!
        </div>
        <div className="company-subname">
          Магазин эксклюзивных часов ручной работы
        </div>
      </div>
      <div className="navbar">
        <NavLink to="/">
          <div className="user-info">
            {user ? `Привет, ${user.username}!` : "Привет, гость!"}
          </div>
          <div className="user-status">
            Статус:
            {user && user.isAdmin ? " администратор" : " пользователь"}
          </div>
        </NavLink>
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
      </div>
    </header>
  );
}
