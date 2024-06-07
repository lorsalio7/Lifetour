"use strict";

window.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  window.addEventListener("scroll", e => {
    let offsetTop = window.scrollY;
    if (offsetTop > 0) {
      document.querySelector(".main-header").classList.add("py-3", "bg-science-blue");
    } else {
      document.querySelector(".main-header").classList.remove("py-3", "bg-science-blue");
    }
  });
  let burgerButton = document.querySelector(".burger-button");
  if (burgerButton) {
    let burgerMenuWidth = window.matchMedia("(max-width: 768px)");
    let burgerButtonLine = burgerButton.querySelector(".burger-button-line");
    let burgerButtonLineClassList = Array.from(burgerButtonLine.classList).join(" ");
    let siteNavigation = document.querySelector(".site-navigation");
    burgerButton.addEventListener("click", () => {
      burgerButton.classList.toggle("burger-button--active");
      if (burgerButton.classList.contains("burger-button--active")) {
        openSiteMenu();
      } else {
        closeSiteMenu();
      }
    });
    function openSiteMenu() {
      burgerButtonLine.className = "burger-button-line absolute left-1/2 top-1/2 block w-[34px] h-[2px] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 delay-300 ease-linear bg-transparent before:content-[''] before:absolute before:block before:w-[34px] before:h-[2px] before:bg-white before:left-0 before:top-0 before:rotate-45 before:transition-[top,transform] before:duration-[0.3s,0.3s] before:delay-[0s,0.3s] before:ease-[linear,linear] after:content-[''] after:absolute after:left-0 after:top-0 after:-rotate-45 after:block after:w-[34px] after:h-[2px] after:bg-white after:transition-[top,transform] after:duration-[0.3s,0.3s] after:delay-[0s,0.3s] after:ease-linear";
      siteNavigation.className = "site-navigation flex justify-between md:fixed md:top-0 md:bottom-0 md:right-0 md:h-full md:flex-col md:bg-science-blue md:w-full md:transition-transform md:duration-300 md:ease-linear md:translate-x-0 md:justify-center md:py-[86px] md:items-center";
    }
    function closeSiteMenu() {
      burgerButton.classList.remove("burger-button--active");
      burgerButtonLine.className = burgerButtonLineClassList;
      siteNavigation.className = "site-navigation flex justify-between md:fixed md:top-0 md:bottom-0 md:right-0 md:h-full md:flex-col md:bg-science-blue md:w-full md:transition-transform md:duration-300 md:ease-linear md:-translate-x-[100%] md:justify-center md:py-[86px] md:items-center";
    }
    function changeMenuView(width) {
      if (!width) {
        closeSiteMenu();
      }
    }
    burgerMenuWidth.onchange = e => {
      changeMenuView(e.matches);
    };
  }
  ;
  let rellax = new Rellax('.rellax', {
    wrapper: null,
    vertical: true
  });
  ;
  function checkVisibleSlides(slides, visibleClass, additionalClass) {
    for (let i = 0; i < slides.length; i++) {
      if (!slides[i].classList.contains(visibleClass)) {
        slides[i].classList.add(additionalClass);
      } else {
        slides[i].classList.remove(additionalClass);
      }
    }
  }
  ;
  let toursSlider = document.querySelector(".tours-slider");
  let trainersSlider = document.querySelector(".trainers-slider");
  let reviewsSlider = document.querySelector(".reviews-slider");
  let gallerySlider = document.querySelector(".gallery-slider");
  if (toursSlider) {
    let toursSliderNextButton = document.querySelector(".tours-slider-next-button");
    let toursSliderPrevButton = document.querySelector(".tours-slider-prev-button");
    toursSlider = new Splide(toursSlider, {
      speed: 1000,
      arrows: false,
      pagination: false,
      gap: 20,
      perPage: 3,
      rewind: true
    });
    toursSlider.mount();
    toursSliderNextButton.addEventListener("click", () => {
      toursSlider.go("+1");
    });
    toursSliderPrevButton.addEventListener("click", () => {
      toursSlider.go("-1");
    });
  }
  if (trainersSlider) {
    let trainersSliderNextButton = document.querySelector(".trainers-slider-next-button");
    let trainersSliderPrevButton = document.querySelector(".trainers-slider-prev-button");
    trainersSlider = new Splide(trainersSlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      gap: 20,
      perPage: 5,
      rewind: true
    });
    trainersSlider.mount();
    trainersSliderNextButton.addEventListener("click", () => {
      trainersSlider.go("+1");
    });
    trainersSliderPrevButton.addEventListener("click", () => {
      trainersSlider.go("-1");
    });
    let trainersSlides = document.querySelectorAll(".trainers-slider .splide__slide");
    checkVisibleSlides(trainersSlides, "is-visible", "opacity-0");
    trainersSlider.on("moved", () => {
      checkVisibleSlides(trainersSlides, "is-visible", "opacity-0");
    });
  }
  if (reviewsSlider) {
    let reviewsSliderNextButton = document.querySelector(".reviews-slider-next-button");
    let reviewsSliderPrevButton = document.querySelector(".reviews-slider-prev-button");
    reviewsSlider = new Splide(reviewsSlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      gap: 15,
      perPage: 3,
      rewind: true
    });
    reviewsSlider.mount();
    reviewsSliderNextButton.addEventListener("click", () => {
      reviewsSlider.go("+1");
    });
    reviewsSliderPrevButton.addEventListener("click", () => {
      reviewsSlider.go("-1");
    });
    let reviewsSlides = document.querySelectorAll(".reviews-slider .splide__slide");
    checkVisibleSlides(reviewsSlides, "is-visible", "opacity-0");
    reviewsSlider.on("moved", () => {
      checkVisibleSlides(reviewsSlides, "is-visible", "opacity-0");
    });
  }
  if (gallerySlider) {
    let gallerySliderNextButton = document.querySelector(".gallery-slider-next-button");
    let gallerySliderPrevButton = document.querySelector(".gallery-slider-prev-button");
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
    gallerySliderNextButton.addEventListener("click", () => {
      gallerySlider.go("+1");
    });
    gallerySliderPrevButton.addEventListener("click", () => {
      gallerySlider.go("-1");
    });
  }
  ;
});