import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Категории</h2>
            <span>Графика & Дизайн</span>
            <span>Цифровой & Маркетинг</span>
            <span>Писательство & Перевод</span>
            <span>Видео & Анимация</span>
            <span>Музыка & Аудио</span>
            <span>Программирование & Технологии</span>
            <span>Данные</span>
            <span>Бизнес</span>
            <span>Образ жизни</span>
            <span>Фотография</span>
            <span>Карта сайта</span>
          </div>
          <div className="item">
            <h2>О сайте</h2>
            <span>Пресса & Новости</span>
            <span>Партнерские отношения</span>
            <span>Политика конфиденциальности</span>
            <span>Условия предоставления услуг</span>
            <span>Претензии по интеллектуальной собственности</span>
            <span>Отношения с инвесторами</span>
            <span>Контактные отделы продаж</span>
          </div>
          <div className="item">
            <h2>Поддержка</h2>
            <span>Помощь & Поддержка</span>
            <span>Доверие & Безопасность</span>
            <span>Продажа на WorkWave</span>
            <span>Покупка на WorkWave</span>
          </div>
          <div className="item">
            <h2>Сообщество</h2>
            <span>Истории успеха клиентов</span>
            <span>Общественный центр</span>
            <span>Форум</span>
            <span>События</span>
            <span>Блог</span>
            <span>Влияние</span>            
            <span>Подкаст</span>
            <span>Пригласить друга</span>
            <span>Стать продавцом</span>
            <span>Стандарты сообщества</span>
          </div>
          <div className="item">
            <h2>Больше от WorkWave</h2>
            <span>Бизнес WorkWave</span>
            <span>WorkWave Pro</span>
            <span>WorkWave Изготовление логотипа</span>
            <span>WorkWave Руководства</span>
            <span>Вдохновляйтесь</span>
            <span>WorkWave Выберите</span>
            <span>WorkWave Рабочее пространство</span>
            <span>Узнать</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>WorkWave</h2>
            <span>© Dzhumaboev Masrur. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/Telegram.png" alt="" />
              <img src="/img/vk.png" alt="" />
              <img src="/img/yandex.png" alt="" />
              <img src="/img/youtube.png" alt="" />
              <img src="/img/viber.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>Русский</span>
            </div>
            <div className="link">
              <img src="/img/rub.png" alt="" />
              <span>РУБ</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
