import React from "react";
import "./Home.scss";
export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__flex">
          <div className="hero__left">
            <h1 className="hero__title">Мрія стає ближче</h1>
            <p className="hero__description">
              Виробництво металопластикових виробів вхідних та міжкімнатних
              дверей
            </p>
            <div className="hero__form">
              <form action="">
                <input
                  type="tel"
                  className="hero__input"
                  placeholder="Номер телефону"
                />
                <input type="submit" className="hero__button" value="" />
              </form>
              <p className="hero__form-description">
                Залишите свої контактні дані і менеджер зв'яжеться з вами
              </p>
            </div>
          </div>
          <div className="hero__right">
            <div className="right__tab">
              <div className="tab__hover">
                <div className="tab__content">
                  <span>1</span>
                  <div className="tab__detail">
                    <p>Металопластикові вироби</p>
                    <a href="" className="catalog__link">
                      Більше
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right__tab">
              <div className="tab__hover">
                <div className="tab__content">
                  <span>2</span>
                  <div className="tab__detail">
                    <p>Вхідні , міжкімнаті двері</p>
                    <a href="" className="catalog__link">
                      Більше
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right__tab">
              <div className="tab__hover">
                <div className="tab__content">
                  <span>3</span>
                  <div className="tab__detail">
                    <p>Секційні ворота</p>
                    <a href="" className="catalog__link">
                      Більше
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right__tab">
              <div className="tab__hover">
                <div className="tab__content">
                  <span>4</span>
                  <div className="tab__detail">
                    <p>Послуги</p>
                    <a href="" className="catalog__link">
                      Більше
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__bottom">
          <div className="hero__benefits">
            <div className="benefits__block">
              <div className="benefits__img">
                <img src="./img/calendar.svg" alt="" />
              </div>
              <div className="benefits__text">
                <p>20 років на ринку </p>
              </div>
            </div>
            <div className="benefits__block">
              <div className="benefits__img">
                <img src="./img/settings.svg" alt="" />
              </div>
              <div className="benefits__text">
                <p>Cучасне виробництво</p>
              </div>
            </div>
            <div className="benefits__block">
              <div className="benefits__img">
                <img src="./img/shoppingBag.svg" alt="" />
              </div>
              <div className="benefits__text">
                <p>Великий ассортимент</p>
              </div>
            </div>
            <div className="benefits__block">
              <div className="benefits__img">
                <img src="./img/smile.svg" alt="" />
              </div>
              <div className="benefits__text">
                <p>Індивідуальний підхід</p>
              </div>
            </div>
            <div className="benefits__block">
              <div className="benefits__img">
                <img src="./img/percent.svg" alt="" />
              </div>
              <div className="benefits__text">
                <p>Розстрочка платежу </p>
              </div>
            </div>
            <div className="benefits__block">
              <div className="benefits__img">
                <img src="./img/award.svg" alt="" />
              </div>
              <div className="benefits__text">
                <p>Гарантія якості</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
