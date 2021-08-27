//main.js file
document.addEventListener("DOMContentLoaded", function () {
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

  const swiper = new Swiper(".catalog__container", {
    wrapperClass: "catalog__wrapper",
    slideClass: "catalog__slide",
    slidesPerView: "auto",
    direction: "horizontal",
    navigation: {
      nextEl: ".catalog-button-next",
      prevEl: ".catalog-button-prev",
      disabledClass: "catalog-button-disabled",
    },
  });
});
