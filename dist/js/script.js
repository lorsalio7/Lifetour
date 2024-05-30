"use strict";

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function (e) {
    var offsetTop = window.scrollY;
    document.documentElement.style.setProperty('--scrollTop', "".concat(offsetTop, "px"));
    if (offsetTop > 0) {
      document.querySelector(".main-header").classList.add("py-4", "bg-science-blue");
    } else {
      document.querySelector(".main-header").classList.remove("py-4", "bg-science-blue");
    }
  });
  var toursSlider = document.querySelector(".tours-slider");
  if (toursSlider) {
    var toursSliderNextButton = document.querySelector(".tours-slider-next-button");
    var toursSliderPrevButton = document.querySelector(".tours-slider-prev-button");
    toursSlider = new Splide(toursSlider, {
      speed: 1000,
      arrows: false,
      pagination: false,
      gap: 20,
      perPage: 3,
      rewind: true
    });
    toursSlider.mount();
    toursSliderNextButton.addEventListener("click", function () {
      toursSlider.go("+1");
    });
    toursSliderPrevButton.addEventListener("click", function () {
      toursSlider.go("-1");
    });
  }
  ;
});