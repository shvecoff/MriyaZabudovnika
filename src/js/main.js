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

const header = document.querySelector("header");
let windowScroll = window;
document.addEventListener("scroll", function () {
  if (windowScroll.pageYOffset > header.clientHeight) {
    header.classList.add("header__fixed");
  } else if (windowScroll.pageYOffset < header.clientHeight) {
    header.classList.remove("header__fixed");
  }
});
