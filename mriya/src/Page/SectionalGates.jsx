import React from "react";
import MainForm from "../Components/MainForm";
import Goal from "../Components/Goal";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
const heroSlide = [
  {
    img: "./assets/img/MAIN1.png",
    alt: "Ворота",
  },
  {
    img: "./assets/img/MAIN1.png",
    alt: "Ворота",
  },
  {
    img: "./assets/img/MAIN1.png",
    alt: "Ворота",
  },
];

export default function SectionalGates() {
  return (
    <>
      <section>
        <div className="container">
          <div className="hero__flex bg-black">
            <div className="text">
              <h1>Ролети та секційні ворота </h1>
              <p>
                Секційні ворота,ролетні ворота, промислові ворота, панорамні
                ворота, в'їзні ворота, відкатні ворота
              </p>
              <img src="./assets/img/alutex-color.png" alt="" />
            </div>
            <Swiper
              className="hero__slider"
              navigation={{
                prevEl: ".catalog-button-prev",
                nextEl: ".catalog-button-next",
                disabledClass: "catalog-button-disable",
              }}
            >
              {heroSlide.map((item, index) => (
                <SwiperSlide className="hero__slider-img" key={index}>
                  <img src={item.img} alt={item.alt} />
                </SwiperSlide>
              ))}

              <div className="catalog__navigation">
                <div className="catalog-button-prev"></div>
                <div className="catalog-button-next"></div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <Goal />
        </div>
      </section>
      <MainForm />
    </>
  );
}
