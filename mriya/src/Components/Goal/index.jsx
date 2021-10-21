import React from "react";
import "./Goal.scss";
const goal = [
  {
    img: "./assets/img/goal.png",
    title: "Міжкімнатні двері",
    description:
      "Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих условий активизации. Сложно сказать, почему представители современных социальных резервов, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов!",
    partners: [
      { img: "./assets/img/partner/Rodos.svg" },
      { img: "./assets/img/partner/Rodos.svg" },
      { img: "./assets/img/partner/Rodos.svg" },
    ],
  },
  {
    img: "./assets/img/goal.png",
    title: "Міжкімнатні двері",
    description:
      "Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих условий активизации. Сложно сказать, почему представители современных социальных резервов, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов!",
    partners: [{ img: "./assets/img/partner/Rodos.svg" }],
  },
  {
    img: "./assets/img/goal.png",
    title: "Міжкімнатні двері",
    description:
      "Не следует, однако, забывать, что синтетическое тестирование предопределяет высокую востребованность соответствующих условий активизации. Сложно сказать, почему представители современных социальных резервов, превозмогая сложившуюся непростую экономическую ситуацию, указаны как претенденты на роль ключевых факторов!",
    partners: [{ img: "./assets/img/partner/Rodos.svg" }],
  },
];
export default function Goal() {
  return (
    <>
      {goal.map((item, index) => (
        <div className="goal__flex" key={index}>
          <div className="goal__img">
            <img src={item.img} alt="" />
          </div>
          <div className="goal__info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="goal__comany">
              {item.partners.map((img, index) => (
                <img src={img.img} alt="" key={index} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
