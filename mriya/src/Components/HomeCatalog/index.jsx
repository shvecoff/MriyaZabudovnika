import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);


export default function HomeCatalog({ DB }) {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="title">Каталог</h2>
        {DB.catalog.map((catalog, index) => (
          <div className="catalog__flex" key={index}>
            <Swiper className="catalog__container"
              navigation={{
                prevEl:".catalog-button-prev",
                nextEl: ".catalog-button-next",
                disabledClass:"catalog-button-disable"
              }}>
                {catalog.slide.map((slide, index) => (
                  <SwiperSlide className="catalog__slide" key={index}>
                    <img src={slide.img} alt="" />
                  </SwiperSlide>
                ))}
              
              <div className="catalog__navigation">
                <div className="catalog-button-prev"></div>
                <div className="catalog-button-next"></div>
              </div>
            </Swiper>
            <div className="catalog__text">
              <div className="catalog__top">
                <h3 className="catalog__title">{catalog.name}</h3>
                <a href={catalog.link} className="catalog__link">
                  Більше
                </a>
              </div>
              <ul className="catalog__bottom">
                {catalog.ul.map((li, index) => (
                  <li className="catalog__list" key={index}>
                    {li.li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
