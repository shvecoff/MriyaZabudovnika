import React from 'react'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainForm from '../Components/MainForm';
import stortz from '../assets/img/stortz.png'

export default function MetalPlasticProducts(){
    SwiperCore.use([Autoplay]);
    const newLineSlide = [
        {
            img:"./assets/img/newLine.png",
            alt:"slide"
        },
        {
          img:"./assets/img/newLine.png",
          alt:"slide"
        }
    ]
    return <React.Fragment>
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
                    <Swiper className="newLIne__slider" slidesPerView={"auto"} loop={true} autoplay={{ delay: 3000 }}>
                        {newLineSlide.map((item, index)=>
                            <SwiperSlide key={index}>
                                <img src={item.img} alt={item.alt} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className="newLine__info">
                        <h3>Нова сучасна лінія</h3>
                        <p>Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих условий активизации. Сложно сказать, почему представители современных социальных резервов, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов! </p>
                        <img src={stortz} alt="stortz" />
                    </div>
                </div>
            </div>
        </section>
        <MainForm/>
    </React.Fragment>;
}