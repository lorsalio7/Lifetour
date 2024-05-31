let toursSlider = document.querySelector(".tours-slider");
let trainersSlider = document.querySelector(".trainers-slider");

if(toursSlider) {
  let toursSliderNextButton = document.querySelector(".tours-slider-next-button");
  let toursSliderPrevButton = document.querySelector(".tours-slider-prev-button");
  toursSlider = new Splide(toursSlider, {
    speed    : 1000,
    arrows   : false,
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

if(trainersSlider) {
  let trainersSliderNextButton = document.querySelector(".trainers-slider-next-button");
  let trainersSliderPrevButton = document.querySelector(".trainers-slider-prev-button");
  trainersSlider = new Splide(trainersSlider, {
    speed    : 500,
    arrows   : false,
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

  checkVisibleSlides(trainersSlides, "is-visible", "opacity-0")
  trainersSlider.on("moved", () => {
    checkVisibleSlides(trainersSlides, "is-visible", "opacity-0");
  })
}
