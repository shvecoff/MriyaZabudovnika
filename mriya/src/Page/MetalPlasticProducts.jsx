import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MainForm from "../Components/MainForm";
import stortz from "../assets/img/stortz.png";

export default function MetalPlasticProducts() {
  SwiperCore.use([Autoplay]);
  const newLineSlide = [
    {
      img: "./assets/img/newLine.png",
      alt: "slide",
    },
    {
      img: "./assets/img/newLine.png",
      alt: "slide",
    },
  ];
  const WDS = [
    {
      img: "./assets/img/profileWds1.png",
      alt: "wds Profile",
      profile: "WDS 8S",
      paket:
        "Двокамерний склопакет шириною 44 мм, заповнений аргоном.Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-16Ar-4-16Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
    {
      img: "./assets/img/profileWds2.png",
      alt: "wds Profile",
      profile: "WDS 7S",
      paket:
        "Двокамерний склопакет шириною 40 мм, заповнений аргоном. Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-14Ar-4-14Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
    {
      img: "./assets/img/profileWds3.png",
      alt: "wds Profile",
      profile: "WDS 6S",
      paket:
        "Двокамерний склопакет шириною 40 мм, заповнений аргоном. Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-14Ar-4-14Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
    {
      img: "./assets/img/profileWds4.png",
      alt: "wds Profile",
      profile: "WDS 5S",
      paket:
        "Двокамерний склопакет шириною 40 мм, заповнений аргоном. Зовнішнє та внутрішнє скло з енергозберігаючим напиленням. 4i-14Ar-4-14Ar-4i",
      furnitura: "Протизламна",
      color: "Будь-який із палітри WDS Color",
    },
  ];
  return (
    <React.Fragment>
      <section className="hero hero__page">
        <div className="container">
          <div className="hero__page-flex">
            <div className="hero__page-left">
              <span>Власне виробництво</span>
              <h1>Металопластикові вироби</h1>
              <ul>
                <li>вікна</li>
                <li>двері</li>
                <li>підвіконня</li>
                <li>конструкції для балконів та лоджій</li>
                <li>металопластикові труби</li>
                <li>водостічні системи від виробника</li>
              </ul>
            </div>
            <div className="hero__page-right">
              <div className="couter__block">
                <div>
                  <p>20+</p>
                  <span>років на ринку</span>
                </div>
                <div>
                  <p>3</p>
                  <span>Лінії</span>
                </div>
                <div>
                  <p>30+</p>
                  <span>Працівників</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="newLIne__flex">
            <Swiper
              className="newLIne__slider"
              slidesPerView={"auto"}
              loop={true}
              autoplay={{ delay: 3000 }}
            >
              {newLineSlide.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} alt={item.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="newLine__info">
              <h3>Нова сучасна лінія</h3>
              <p>
                Не следует, однако, забывать, что синтетическое тестирование
                предопределяет высокую востребованность соответствующих условий
                активизации. Сложно сказать, почему представители современных
                социальных резервов, превозмогая сложившуюся непростую
                экономическую ситуацию, указаны как претенденты на роль ключевых
                факторов!{" "}
              </p>
              <img src={stortz} alt="stortz" />
            </div>
          </div>
        </div>
      </section>
      <section className="wdsSlider">
        <div className="container">
          <h2 className="title">Профілі вікон WDS</h2>
          <Swiper
            className="wdsSlider__container"
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 4500 }}
            effect="Coverflow"
          >
            {WDS.map((item, index) => (
              <SwiperSlide className="profileWds__flex" key={index}>
                <div className="profileWds__img">
                  <img src={item.img} alt={item.alt} width={536} height={594} />
                </div>
                <div className="profileWds__text">
                  <ul>
                    <li>
                      <h3>Профіль</h3>
                      <p>{item.profile}</p>
                    </li>
                    <li>
                      <h3>Склопакет</h3>
                      <p>{item.paket}</p>
                    </li>
                    <li>
                      <h3>Фурнітура</h3>
                      <p>{item.paket}</p>
                    </li>
                    <li>
                      <h3>Колір</h3>
                      <p>{item.color}</p>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="quick-form">
            <p>
              Є питання? Залиште свій номер телефона та отримайте безкоштовну
              консультацію
            </p>
            <form action="">
              <input
                type="tel"
                name="tel"
                id=""
                placeholder="Вкажіть ваш номер телефону"
              />
              <button type="submit">Надіслати</button>
            </form>
          </div>
        </div>
      </section>
      <MainForm />
    </React.Fragment>
  );
}
