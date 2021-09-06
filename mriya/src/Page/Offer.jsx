import React from "react";
import MainForm from '../Components/MainForm'

export default function Offer({DB}) {
  return(
    <React.Fragment>
      <section className="offer">
        <div className="container">
              <div className="offer__flex">
                {DB.ofer.map((ofer, index)=>
                    <div className="offer__block" key={index}>
                      <div className="offer__img">
                          <img src={ofer.img} alt={ofer.alt}/>
                      </div>
                      <div className="offer__info">
                          <div className="tab__detail">
                              <h3>{ofer.title}</h3>
                              <a href={ofer.link} className="catalog__link">Більше</a>
                          </div>
                          <div className="offer__description">
                              <p>{ofer.description}</p>
                          </div>
                      </div>
                      <div className="offer__partner">
                          {ofer.partner.map((img,index)=>
                              <div className="partner__img"key={index}>
                                <img src={img.img} alt={img.alt}/>
                              </div>
                            )}
                      </div>
                    </div>
                  )}
            </div>
        </div>
      </section>
    <MainForm/>
  </React.Fragment>
  );
}
