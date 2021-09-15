import React from "react";
import ReactDOM from "react-dom";
import MainForm from "../Components/MainForm";

const fillterBtn = [
  "Вікна",
  "Двері",
  "Вхідні двері",
  "Міжкімнатні двері",
  "Ролети",
  "Секційні ворота",
];

export default function Gallery({ DB }) {
  const [filter, setFilter] = React.useState(DB.gallery);
  const filterItem = (filterItem) => {
    const updatedItems = DB.gallery.filter((el) => {
      return el.category === filterItem;
    });
    setFilter(updatedItems);
  };
  const openFullGallery = (img,alt) => {
    setFullGallery(!fullGallery);
    ReactDOM.render(<img src={img} alt={alt} />, document.getElementById("fullGallery"));
  };
  const [fullGallery, setFullGallery] = React.useState(false);
  return (
    <React.Fragment>
      <section className="gallery">
        <div className="container">
          <h2 className="title">Галерея</h2>
          <div className="gallery__filter">
            <ul>
              <button onClick={() => setFilter(DB.gallery)}>Всі</button>
              {fillterBtn.map((btn, index) => (
                <button onClick={() => filterItem(btn)} key={index}>
                  {btn}
                </button>
              ))}
            </ul>
          </div>
          <div className="gallery__flex">
            {filter.map((item, index) => (
              <div
                className="gallery__item"
                key={index}
                onClick={() => openFullGallery(item.img, item.alt)}
              >
                <img src={item.img} alt={item.alt} />
                <div className="gallery__info">
                  <h4>{item.title}</h4>
                  <img src={item.partner} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id="fullGallery"
          className={fullGallery ? "fullGallery" : ""}
          onClick={() => openFullGallery(null)}
        ></div>
      </section>

      <MainForm />
    </React.Fragment>
  );
}
