import React from 'react'
import Maps from '../Components/Map'
  

export default function Contact(){
    return (
        <section className="contact">
            <div className="container">
                <h2 className="title">Контакти</h2>
                <div className="contact__flex">
                    <div className="contact__left">
                        <div className="map">
                            <div className="map__title">
                                <h3>Адрес</h3>
                                <p>Хмельницький вулиця Чорновола, 31/1</p>
                            </div>
                            <div className="map__geolocation">
                                <Maps />
                            </div>
                        </div>
                        <div className="contact__work">
                            <div className="work__day">
                                <h4>День</h4>
                                <ul>
                                    <li>Пн,Вт,Ср,Чт,Пт</li>
                                    <li>Сб</li>
                                    <li>Нд</li>
                                </ul>
                            </div>
                            <div className="work__hour">
                                <h4>Години роботи</h4>
                                <ul>
                                    <li>09:00 - 18:00</li>
                                    <li>09:00 - 15:00</li>
                                    <li>Вихідний</li>
                                </ul>
                            </div>
                            <div className="work__break">
                                <h4>Перерва</h4>
                                <ul>
                                    <li>13:00 - 14:00</li>
                                    <li>Без перерви</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="contact__right">
                        <div className="left__top">
                            <div className="top__info">
                                <ul>
                                    <h3>Металопластикові вироби</h3>
                                    <li><a href="tel:+380676738289">+38 (067) 673-82-89</a></li>
                                </ul>
                                <ul>
                                    <h3>Виробництво</h3>
                                    <li><a href="tel:+380673111980">+38 (067) 311-19-80</a></li>
                                </ul>
                                <ul>
                                    <h3>Двері та вікна</h3>
                                    <li><a href="+380676738289">+38 (067) 673-82-89</a></li>
                                    <li><a href="+380382644555">+38 (0382) 64-45-55</a></li>
                                    <li><a href="+380382644093">+38 (0382) 64-40-93</a></li>
                                </ul>
                                <ul>
                                    <h3>Бугхалтер</h3>
                                    <li><a href="+380676738289">+38 (067) 673-82-89</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="left__bottom">
                            <div className="contact__form">
                                <h3>Залиште нам повідомлення</h3>
                                <form action="">
                                    <div className="form__top">
                                        <input type="text" placeholder="Ім’я"/>
                                        <input type="tel" placeholder="Номер телефону"/>
                                    </div>
                                    <textarea name="massage" id=""  placeholder="Повідомлення" ></textarea>
                                    <button type="submit">Надіслати</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}