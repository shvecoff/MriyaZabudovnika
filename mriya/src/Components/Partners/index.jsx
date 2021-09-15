import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default function Partners({ DB }) {
  return (
    <section className="partner">
      <div className="container">
        <h2 className="title">Партнери</h2>
        <Swiper
          className="partner__containe"
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
        >
          {DB.partners.map((partner, index) => (
            <SwiperSlide className="partner__slide" key={index}>
              <img
                src={partner.img}
                alt={partner.alt}
                width={250}
                height={60}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
