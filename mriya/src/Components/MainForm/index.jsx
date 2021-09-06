import React from "react";

export default function MainForm() {
  return (
    <section className="main__form">
      <div className="container">
        <div className="form__flex">
          <div className="form__title">
            <h2 className="title">Залиште замовлення</h2>
            <p className="form__description">
              Замовити заміри, доставку, отримати інформацію про
              металопластикові вироби, міжкімнатні та вхідні двері, секційні
              ворота, замір, монтаж - заповніть форму і менеджер зважиться з
              вами найближчим часом{" "}
            </p>
          </div>
          <div className="form__main">
            <form action="">
              <input
                type="text"
                placeholder="Ім`я"
                className="form__main-input"
              />
              <input
                type="tel"
                placeholder="Номер телефону"
                className="form__main-input"
              />
              <select name="select" className="form__main-input">
                <option>Вас цікавить..</option>
                <option value="Металопластикові вироби">
                  Металопластикові вироби
                </option>
                <option value="Міжкімнатні та вхідні двері">
                  Міжкімнатні та вхідні двері
                </option>
                <option value="Секційні ворота">Секційні ворота</option>
                <option value="Замір">Замір</option>
                <option value="Монтаж">Монтаж</option>
              </select>
              <input
                type="submit"
                value="Надіслати"
                className="form__main-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
