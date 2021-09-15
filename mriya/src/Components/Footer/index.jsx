import React from "react";
import logo from "../../assets/img/logo.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__column">
          <div className="footer__logo">
            <img src={logo} alt="logoFoter" />
          </div>
          <div className="footer__deskription">
            <p>
              Виробництво металопластикових виробів вхідних та міжкімнатних
              дверей
            </p>
          </div>
        </div>
        <div className="footer__column">
          <ul className="footer__menu">
            <li>
              <a href="http://google.com.ua/">Каталог</a>
            </li>
            <li>
              <a href="http://google.com.ua/">Галерея</a>
            </li>
            <li>
              <a href="http://google.com.ua/">Партнери</a>
            </li>
            <li>
              <a href="http://google.com.ua/">Про нас</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h5>Слідкуйте за нами</h5>
          <div className="footer__social">
            <a href="http://google.com.ua/">
              <img src="./assets/img/instagram.svg" alt="" />
            </a>
            <a href="http://google.com.ua/">
              <img src="./assets/img/facebook.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="footer__column">
          <div className="footer__adress">
            <p>вулиця Чорновола, 31/1 Хмельницький</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
