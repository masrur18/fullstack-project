import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">WorkWave</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>WorkWave Бизнес</span>
          <span>Новости</span>
          <span>Русский</span>
          {!currentUser?.isSeller && <span>Стать продавцом</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src={currentUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link" to="/mygigs">
                     Мои услуги
                    </Link>
                    <Link className="link" to="/add">
                    Добавить новый товар
                    </Link>
                  </>
                )}
                <Link className="link" to="/orders">
                Заказы
                </Link>
                <Link className="link" to="/messages">
                Сообщения
                </Link>
                <Link className="link" onClick={handleLogout}>
                Выход
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Войти</Link>
              <Link className="link" to="/register">
                <button>Зарегистрироваться</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
            Графика & Дизайн
            </Link>
            <Link className="link menuLink" to="/">
            Видео & Анимация
            </Link>
            <Link className="link menuLink" to="/">
            Писательство & Перевод
            </Link>
            <Link className="link menuLink" to="/">
            Услуги ИИ
            </Link>
            <Link className="link menuLink" to="/">
            Цифровой Маркетинг
            </Link>
            <Link className="link menuLink" to="/">
            Музыка & Аудио
            </Link>
            <Link className="link menuLink" to="/">
            Программирование & Технологии
            </Link>
            <Link className="link menuLink" to="/">
            Бизнес
            </Link>
            <Link className="link menuLink" to="/">
            Образ жизни
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
