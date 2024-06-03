"use strict";

window.addEventListener("DOMContentLoaded", function () {
  /*window.addEventListener("scroll", (e) => {
  let offsetTop = window.scrollY;
  document.documentElement.style.setProperty('--scrollTop', `${offsetTop}px`);
   if(offsetTop > 0) {
    document.querySelector(".main-header").classList.add("py-4", "bg-science-blue");
  } else {
    document.querySelector(".main-header").classList.remove("py-4", "bg-science-blue");
  }
  })
  ;*/
  function checkVisibleSlides(slides, visibleClass, additionalClass) {
    for (var i = 0; i < slides.length; i++) {
      if (!slides[i].classList.contains(visibleClass)) {
        slides[i].classList.add(additionalClass);
      } else {
        slides[i].classList.remove(additionalClass);
      }
    }
  }
  ;
  var toursSlider = document.querySelector(".tours-slider");
  var trainersSlider = document.querySelector(".trainers-slider");
  var reviewsSlider = document.querySelector(".reviews-slider");
  var gallerySlider = document.querySelector(".gallery-slider");
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
  if (trainersSlider) {
    var trainersSliderNextButton = document.querySelector(".trainers-slider-next-button");
    var trainersSliderPrevButton = document.querySelector(".trainers-slider-prev-button");
    trainersSlider = new Splide(trainersSlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      gap: 20,
      perPage: 5,
      rewind: true
    });
    trainersSlider.mount();
    trainersSliderNextButton.addEventListener("click", function () {
      trainersSlider.go("+1");
    });
    trainersSliderPrevButton.addEventListener("click", function () {
      trainersSlider.go("-1");
    });
    var trainersSlides = document.querySelectorAll(".trainers-slider .splide__slide");
    checkVisibleSlides(trainersSlides, "is-visible", "opacity-0");
    trainersSlider.on("moved", function () {
      checkVisibleSlides(trainersSlides, "is-visible", "opacity-0");
    });
  }
  if (reviewsSlider) {
    var reviewsSliderNextButton = document.querySelector(".reviews-slider-next-button");
    var reviewsSliderPrevButton = document.querySelector(".reviews-slider-prev-button");
    reviewsSlider = new Splide(reviewsSlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      gap: 15,
      perPage: 3,
      rewind: true
    });
    reviewsSlider.mount();
    reviewsSliderNextButton.addEventListener("click", function () {
      reviewsSlider.go("+1");
    });
    reviewsSliderPrevButton.addEventListener("click", function () {
      reviewsSlider.go("-1");
    });
    var reviewsSlides = document.querySelectorAll(".reviews-slider .splide__slide");
    checkVisibleSlides(reviewsSlides, "is-visible", "opacity-0");
    reviewsSlider.on("moved", function () {
      checkVisibleSlides(reviewsSlides, "is-visible", "opacity-0");
    });
  }
  if (gallerySlider) {
    var gallerySliderNextButton = document.querySelector(".gallery-slider-next-button");
    var gallerySliderPrevButton = document.querySelector(".gallery-slider-prev-button");
    gallerySlider = new Splide(gallerySlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      fixedHeight: '449px',
      gap: 5,
      perPage: 5,
      rewind: true
    });
    gallerySlider.mount();
    gallerySliderNextButton.addEventListener("click", function () {
      gallerySlider.go("+1");
    });
    gallerySliderPrevButton.addEventListener("click", function () {
      gallerySlider.go("-1");
    });
  }
  ;
});