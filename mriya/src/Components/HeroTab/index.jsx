import React from "react";

export default function HeroTab({ DB }) {
  return (
    <div className="hero__right">
      {DB.homeTab.map((tab, index) => (
        <div className="right__tab" key={index}>
          <div className="tab__hover">
            <div className="tab__content">
              <span>{tab.number}</span>
              <div className="tab__detail">
                <h3>{tab.description}</h3>
                <a href={tab.link} className="catalog__link">
                  Більше
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
