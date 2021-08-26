//main.js file
new WOW().init();

const header = document.querySelector("header");
let windowScroll = window;
document.addEventListener("scroll", function () {
  if (windowScroll.pageYOffset > header.clientHeight) {
    header.classList.add("header__fixed");
  } else if (windowScroll.pageYOffset < header.clientHeight) {
    header.classList.remove("header__fixed");
  }
});

const catalogItem = document.querySelectorAll(".catalog__flex");
for (let i = 0; i < catalogItem.length; i++) {
  catalogItem[i].classList.add("wow", "animate__animated");
  if (i % 2 === 0) {
    catalogItem[i].classList.add("animate__fadeInRight");
  } else if (i % 2 !== 0) {
    catalogItem[i].classList.add("animate__fadeInLeft");
  }
}
