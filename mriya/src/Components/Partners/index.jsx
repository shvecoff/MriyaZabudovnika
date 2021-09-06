import React from 'react'


export default function Partners({DB}){
    return(
    <section className="partner">
    <div className="container">
      <h2 className="title">Партнери</h2>
      <div className="partner__containe">
        <div className="partner__wrapper">
            {
                DB.partners.map((partner, index)=> 
                <div className="partner__slide" key={index}>
                    <img src={partner.img} alt={partner.alt} width={250} height={60}/>
                </div>
              )
            }
        </div>
      </div>
    </div>
  </section>
  )
}