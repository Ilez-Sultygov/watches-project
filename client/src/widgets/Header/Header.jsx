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
        <div
          className="user-profile"
          onClick={() => {
            user ? navigate("/userProfile") : alert("Требуется авторизация!");
          }}
        >
          <div className="user-info">{user ? `${user.username}` : "Гость"}</div>
          <div className="user-status">
            Статус:
            {user && user.isAdmin ? " администратор" : " пользователь"}
          </div>
        </div>
        {user && user.isAdmin ? (
          <div
            className="cms"
            onClick={() => {
              navigate("/adminProfile");
            }}
          >
            Управление
          </div>
        ) : (
          ""
        )}
        <div
          className="custom-page-link"
            onClick={() => {
              user ? navigate("/customOrder") : alert("Требуется авторизация!");
            }}
        >
          Предложить свой эскиз
        </div>  
        <NavLink
          to="/"
          className='ok'
        >
          Главная
        </NavLink>
        {user ? (
          <button className="btn-logout" onClick={handleSignOut}>Выйти</button>
        ) : (
          <NavLink to="/auth">Войти</NavLink>
        )}
      </div>
    </header>
  );
}
