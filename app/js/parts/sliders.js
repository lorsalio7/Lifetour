let toursSlider = document.querySelector(".tours-slider");
let trainersSlider = document.querySelector(".trainers-slider");
let reviewsSlider = document.querySelector(".reviews-slider");
let gallerySlider = document.querySelector(".gallery-slider");



if(toursSlider) {
  let toursSliderNextButton = document.querySelector(".tours-slider-next-button");
  let toursSliderPrevButton = document.querySelector(".tours-slider-prev-button");
  toursSlider = new Splide(toursSlider, {
    speed    : 1000,
    arrows   : false,
    pagination: false,
    gap: 20,
    perPage: 3,
    rewind: true,
    mediaQuery: "max",
    breakpoints: {
      1280: {
        perPage: 2,
        padding: {right: "25%"},
      },
      1024: {
        padding: {right: 0},
      },
      768: {
        perPage: 1,
        padding: {right: "30%"},
      },
      500: {
        padding: {right: "10%"},
      },
      375: {
        padding: {right: 0},
      }
    }
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
    rewind: true,
    mediaQuery: "max",
    breakpoints: {
      1024: {
        perPage: 4,
      },
      768: {
        perPage: 2,
        padding: {right: "10%"},
      },
      500: {
        perPage: 1,
        padding: {right: "40%"},
      },
      425: {
        perPage: 1,
        padding: {right: "20%"},
      }
    }
  });

  trainersSlider.mount();

  trainersSliderNextButton.addEventListener("click", () => {
    trainersSlider.go("+1");
  });
  trainersSliderPrevButton.addEventListener("click", () => {
    trainersSlider.go("-1");
  });

}


if(reviewsSlider) {
  let reviewsSliderNextButton = document.querySelector(".reviews-slider-next-button");
  let reviewsSliderPrevButton = document.querySelector(".reviews-slider-prev-button");

  reviewsSlider = new Splide(reviewsSlider, {
    speed    : 500,
    arrows   : false,
    pagination: false,
    gap: 15,
    perPage: 3,
    rewind: true,
    mediaQuery: "max",
    breakpoints: {
      1024: {
        perPage: 2,
        padding: {right: "15%"},
      },
      768: {
        perPage: 1,
        padding: {right: "30%"},
      },
      425: {
        perPage: 1,
        padding: {right: "10%"},
      }
    }
  });

  reviewsSlider.mount();

  reviewsSliderNextButton.addEventListener("click", () => {
    reviewsSlider.go("+1");
  });
  reviewsSliderPrevButton.addEventListener("click", () => {
    reviewsSlider.go("-1");
  });
}

if(gallerySlider) {
  let gallerySliderNextButton = document.querySelector(".gallery-slider-next-button");
  let gallerySliderPrevButton = document.querySelector(".gallery-slider-prev-button");

  gallerySlider = new Splide(gallerySlider, {
    speed    : 500,
    arrows   : false,
    pagination: false,
    fixedHeight: '449px',
    gap: 5,
    perPage: 5,
    rewind: true,
    mediaQuery: "max",
    breakpoints: {
      768: {
        perPage: 4,
        fixedHeight: '360px',
      },
      425: {
        fixedHeight: '300px',
      },
      375: {
        perPage: 3,
      }
    }
  });

  gallerySlider.mount();

  gallerySliderNextButton.addEventListener("click", () => {
    gallerySlider.go("+1");
  });
  gallerySliderPrevButton.addEventListener("click", () => {
    gallerySlider.go("-1");
  });
}
