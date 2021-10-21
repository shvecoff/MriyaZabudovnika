import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MainForm from "../Components/MainForm";
SwiperCore.use([Navigation]);
const manufacturer = [
  {
    img: "./assets/img/partner/Alutex.svg",
    alt: "Alutex",
  },
  {
    img: "./assets/img/partner/Brama.svg",
    alt: "Brama",
  },
  {
    img: "./assets/img/partner/Leadors.svg",
    alt: "Leadors",
  },
  {
    img: "./assets/img/partner/Rodos.svg",
    alt: "Rodos",
  },
  {
    img: "./assets/img/partner/stray.svg",
    alt: "stray",
  },
  {
    img: "./assets/img/partner/Terminus.svg",
    alt: "Terminus",
  },
  {
    img: "./assets/img/partner/papaCarlo.png",
    alt: "papaCarlo",
  },
];
export default function EnterDors() {
  return (
    <>
      <section>
        <div className="container">
          <div className="container__flex">
            <div className="text">
              <h1>Вхідні, міжкімнаті двері</h1>
              <p>Металеві двері, плита мдф, ковка і скло</p>
            </div>
            <Swiper
              className="hero__slider"
              navigation={{
                prevEl: ".catalog-button-prev",
                nextEl: ".catalog-button-next",
                disabledClass: "catalog-button-disable",
              }}
            >
              <SwiperSlide className="hero__slider-slide">
                <img src="./assets/img/dors.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-slide">
                <img src="./assets/img/dors.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className="hero__slider-slide">
                <img src="./assets/img/dors.png" alt="" />
              </SwiperSlide>
              <div className="catalog__navigation">
                <div className="catalog-button-prev"></div>
                <div className="catalog-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="manufacturer">
        <div className="container">
          <h2 className="title">Виробоники</h2>
          <div className="manufacturer__flex">
            {manufacturer.map((item, index) => (
              <div className="manufacturer__img" key={index}>
                <img src={item.img} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Міжкімнатні двері</h2>
          <div className="catalog__navigation">
            <div className="catalog-button-prev"></div>
            <div className="catalog-button-next"></div>
          </div>
          <div className="categorie__flex">
            <div className="categorie__item">
              <div className="categorie__img">
                <img src="./assets/img/categorie.png" alt="" />
              </div>
              <div className="categorie__info">
                <div className="categorie__compani">
                  <img src="./assets/img/partner/Rodos.svg" alt="" />
                </div>
                <div className="categorie__info-title">Сталь і дерево</div>
                <div className="categorie__info-description">
                  Не следует, однако, забывать, что синтетическое тестирование
                  предопределяет высокую востребованность соответствующих
                  условий активизации. Сложно сказать, почему представители
                  современных социальных резервов, превозмогая сложившуюся
                  непростую экономическую ситуацию, указаны как претенденты на
                  роль ключевых факторов!{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h2 className="title">Вхідні двері</h2>
          <div className="catalog__navigation">
            <div className="catalog-button-prev"></div>
            <div className="catalog-button-next"></div>
          </div>
          <div className="categorie__flex">
            <div className="categorie__item">
              <div className="categorie__img">
                <img src="./assets/img/categorie.png" alt="" />
              </div>
              <div className="categorie__info">
                <div className="categorie__compani">
                  <img src="./assets/img/partner/Rodos.svg" alt="" />
                </div>
                <div className="categorie__info-title">Сталь і дерево</div>
                <div className="categorie__info-description">
                  Не следует, однако, забывать, что синтетическое тестирование
                  предопределяет высокую востребованность соответствующих
                  условий активизации. Сложно сказать, почему представители
                  современных социальных резервов, превозмогая сложившуюся
                  непростую экономическую ситуацию, указаны как претенденты на
                  роль ключевых факторов!{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <h2 className="title">Фурнитура</h2>
          <div className="catalog__navigation">
            <div className="catalog-button-prev"></div>
            <div className="catalog-button-next"></div>
          </div>
          <div className="categorie__flex">
            <div className="categorie__item">
              <div className="categorie__img">
                <img src="./assets/img/categorie.png" alt="" />
              </div>
              <div className="categorie__info">
                <div className="categorie__compani">
                  <img src="./assets/img/partner/Rodos.svg" alt="" />
                </div>
                <div className="categorie__info-title">Сталь і дерево</div>
                <div className="categorie__info-description">
                  Не следует, однако, забывать, что синтетическое тестирование
                  предопределяет высокую востребованность соответствующих
                  условий активизации. Сложно сказать, почему представители
                  современных социальных резервов, превозмогая сложившуюся
                  непростую экономическую ситуацию, указаны как претенденты на
                  роль ключевых факторов!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainForm />
    </>
  );
}
