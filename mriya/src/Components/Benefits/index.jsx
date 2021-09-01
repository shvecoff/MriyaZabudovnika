import React from "react";

export default function Benefits({ DB }) {
  return (
    <div className="hero__benefits">
      {DB.benefits.map((benefit, index) => (
        <div className="benefits__block" key={index}>
          <div className="benefits__img">
            <img src={benefit.img} alt={benefit.alt} />
          </div>
          <div className="benefits__text">
            <p>{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
