let toursSlider = document.querySelector(".tours-slider");

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
