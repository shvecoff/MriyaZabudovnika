import React from "react";

export default function HomeCatalog({ DB }) {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="title">Каталог</h2>
        {DB.catalog.map((catalog, index) => (
          <div className="catalog__flex" key={index}>
            <div className="catalog__container">
              <div className="catalog__wrapper">
                <div className="catalog__slide">
                  <img src="./assets/img/Catalog/catalog.jpg" alt="" />
                </div>
                <div className="catalog__slide">
                  <img src="./img/Catalog/catalog.jpg" alt="" />
                </div>
                <div className="catalog__slide">
                  <img src="./img/Catalog/catalog.jpg" alt="" />
                </div>
              </div>
              <div className="catalog__navigation">
                <div className="catalog-button-prev"></div>
                <div className="catalog-button-next"></div>
              </div>
            </div>
            <div className="catalog__text">
              <div className="catalog__top">
                <h3 className="catalog__title">{catalog.name}</h3>
                <a href={catalog.link} className="catalog__link">
                  Більше
                </a>
              </div>
              <ul className="catalog__bottom">
                <li className="catalog__list"></li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
