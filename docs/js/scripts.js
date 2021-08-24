//libraries like jquery etc
//main.js file

document.addEventListener("DOMContentLoaded", function () {
  const tabHover = document.querySelectorAll(".tab__hover");
  const tab = document.querySelectorAll(".right__tab");
  for (let i = 0; i < tab.length; i++) {
    tabHover[i].addEventListener("mouseenter", function () {
      tab[i].style.flex = "0 0 500px";
      tab[i].classList.add("remove__after");
    });
    tabHover[i].addEventListener("mouseout", function () {
      tab[i].style.flex = "0 1 200px";
      tab[i].classList.remove("remove__after");
    });
  }
});
