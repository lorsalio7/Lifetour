"use strict";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: "true"
  });
  // =========================== Фикс скачка браузерного скролла и плавной прокрутки ==========================================

  const scrollController = {
    scrollPosition: 0,
    disabledScroll(fixedElement) {
      if (fixedElement) {
        let fixedElements = document.querySelectorAll(fixedElement);
        fixedElements.forEach(element => {
          element.style.paddingRight = "".concat(parseInt(window.innerWidth - document.body.offsetWidth), "px");
        });
      }
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = "\n      overflow: hidden;\n      position: fixed;\n      top: -".concat(scrollController.scrollPosition, "px;\n      left: 0;\n      height: 100vh;\n      width: 100vw;\n      padding-right: ").concat(parseInt(window.innerWidth - document.body.offsetWidth), "px;\n    ");
      document.documentElement.style.scrollBehavior = "unset";
    },
    enabledScrool(fixedElement) {
      document.body.style.cssText = "";
      window.scroll({
        top: scrollController.scrollPosition
      });
      document.documentElement.style.scrollBehavior = "";
      if (fixedElement) {
        let fixedElements = document.querySelectorAll(fixedElement);
        fixedElements.forEach(element => {
          element.style.paddingRight = "0";
        });
      }
    }
  };
  window.addEventListener("scroll", e => {
    let offsetTop = window.scrollY;
    if (offsetTop > 0) {
      document.querySelector(".main-header").classList.add("py-3", "bg-science-blue");
    } else {
      document.querySelector(".main-header").classList.remove("py-3", "bg-science-blue");
    }
  });
  let headerSite = document.querySelector(".main-header");
  let headerSiteHeight = headerSite.offsetHeight;
  window.addEventListener("resize", () => {
    setHeaderHeight();
  });
  function setHeaderHeight() {
    document.documentElement.style.setProperty('--header-height', "".concat(headerSiteHeight, "px"));
  }
  setHeaderHeight();
  ;
  let burgerButton = document.querySelector(".burger-button");
  if (burgerButton) {
    let burgerMenuWidth = window.matchMedia("(max-width: 768px)");
    let burgerButtonLine = burgerButton.querySelector(".burger-button-line");
    let burgerButtonLineClassList = Array.from(burgerButtonLine.classList).join(" ");
    let siteNavigation = document.querySelector(".site-navigation");
    let navigationLinks = siteNavigation.querySelectorAll(".navigation-link");
    burgerButton.addEventListener("click", () => {
      burgerButton.classList.toggle("burger-button--active");
      if (burgerButton.classList.contains("burger-button--active")) {
        openSiteMenu();
        burgerButton.setAttribute("aria-label", "Закрыть главное меню");
        navigationLinks.forEach(link => {
          link.addEventListener("click", () => {
            closeSiteMenu();
          });
        });
      } else {
        closeSiteMenu();
        burgerButton.setAttribute("aria-label", "Открыть главное меню");
      }
    });
    function openSiteMenu() {
      setTimeout(() => {
        scrollController.disabledScroll();
      }, 300);
      burgerButtonLine.className = "burger-button-line absolute left-1/2 top-1/2 block w-[34px] h-[2px] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 delay-300 ease-linear bg-transparent before:content-[''] before:absolute before:block before:w-[34px] before:h-[2px] before:bg-white before:left-0 before:top-0 before:rotate-45 before:transition-[top,transform] before:duration-[0.3s,0.3s] before:delay-[0s,0.3s] before:ease-[linear,linear] after:content-[''] after:absolute after:left-0 after:top-0 after:-rotate-45 after:block after:w-[34px] after:h-[2px] after:bg-white after:transition-[top,transform] after:duration-[0.3s,0.3s] after:delay-[0s,0.3s] after:ease-linear";
      siteNavigation.className = "site-navigation flex justify-between md:fixed md:top-0 md:bottom-0 md:right-0 md:h-full md:overflow-y-auto md:flex-col md:bg-science-blue md:w-full md:transition-transform md:duration-300 md:ease-linear md:translate-x-0 md:justify-start md:py-[86px] md:items-center";
    }
    function closeSiteMenu() {
      scrollController.enabledScrool();
      burgerButton.classList.remove("burger-button--active");
      burgerButtonLine.className = burgerButtonLineClassList;
      siteNavigation.className = "site-navigation flex justify-between md:fixed md:top-0 md:bottom-0 md:right-0 md:h-full md:overflow-y-auto md:flex-col md:bg-science-blue md:w-full md:transition-transform md:duration-300 md:ease-linear md:-translate-x-[100%] md:justify-start md:py-[86px] md:items-center";
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
    vertical: true,
    breakpoints: [425, 768, 1201]
  });
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
      rewind: true,
      mediaQuery: "max",
      breakpoints: {
        1280: {
          perPage: 2,
          padding: {
            right: "25%"
          }
        },
        1024: {
          padding: {
            right: 0
          }
        },
        768: {
          perPage: 1,
          padding: {
            right: "30%"
          }
        },
        500: {
          padding: {
            right: "10%"
          }
        },
        375: {
          padding: {
            right: 0
          }
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
  if (trainersSlider) {
    let trainersSliderNextButton = document.querySelector(".trainers-slider-next-button");
    let trainersSliderPrevButton = document.querySelector(".trainers-slider-prev-button");
    trainersSlider = new Splide(trainersSlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      gap: 20,
      perPage: 5,
      rewind: true,
      lazyLoad: true,
      mediaQuery: "max",
      breakpoints: {
        1024: {
          perPage: 4
        },
        768: {
          perPage: 2,
          padding: {
            right: "10%"
          }
        },
        500: {
          perPage: 1,
          padding: {
            right: "40%"
          }
        },
        425: {
          perPage: 1,
          padding: {
            right: "20%"
          }
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
  if (reviewsSlider) {
    let reviewsSliderNextButton = document.querySelector(".reviews-slider-next-button");
    let reviewsSliderPrevButton = document.querySelector(".reviews-slider-prev-button");
    reviewsSlider = new Splide(reviewsSlider, {
      speed: 500,
      arrows: false,
      pagination: false,
      gap: 15,
      perPage: 3,
      rewind: true,
      lazyLoad: true,
      mediaQuery: "max",
      breakpoints: {
        1024: {
          perPage: 2,
          padding: {
            right: "15%"
          }
        },
        768: {
          perPage: 1,
          padding: {
            right: "30%"
          }
        },
        425: {
          perPage: 1,
          padding: {
            right: "10%"
          }
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
      rewind: true,
      lazyLoad: "nearby",
      mediaQuery: "max",
      breakpoints: {
        768: {
          perPage: 4,
          fixedHeight: '360px'
        },
        425: {
          fixedHeight: '300px'
        },
        375: {
          perPage: 3
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
  ;
  let gallery = document.querySelector(".gallery");
  if (gallery) {
    baguetteBox.run('.gallery');
    document.querySelector("#close-button").classList.add("hover-hover:hover:bg-endeavour", "focus:bg-endeavour");
    document.querySelector("#close-button svg").setAttribute("viewBox", "0 0 30 30");
    document.querySelector("#close-button svg").setAttribute("width", "20");
    document.querySelector("#close-button svg").setAttribute("height", "20");
    document.querySelector("#close-button svg").setAttribute("preserveAspectRatio", "xMidYMid meet");
    document.querySelector("#close-button svg").setAttribute("xmlns", "http://www.w3.org/2000/svg");
    document.querySelector("#next-button").classList.add("flex", "justify-center", "items-center", "hover-hover:hover:bg-endeavour", "focus:bg-endeavour");
    document.querySelector("#next-button").innerHTML = "";
    document.querySelector("#next-button").innerHTML = "\n  <svg width=\"14\" height=\"8\" id=\"right-arrow\" viewBox=\"0 0 14 8\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m10.422.464 3.182 3.182a.5.5 0 0 1 0 .708l-3.182 3.182a.5.5 0 0 1-.708-.708L12.043 4.5H.25v-1h11.793L9.714 1.172a.5.5 0 1 1 .708-.708Z\" fill=\"#fff\" />\n  </svg>\n  ";
    document.querySelector("#previous-button").classList.add("flex", "justify-center", "items-center", "hover-hover:hover:bg-endeavour", "focus:bg-endeavour");
    document.querySelector("#previous-button").innerHTML = "";
    document.querySelector("#previous-button").innerHTML = "\n  <svg width=\"14\" height=\"8\" id=\"left-arrow\" viewBox=\"0 0 14 8\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.578.464.396 3.646a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 1 0 .708-.708L1.957 4.5H13.75v-1H1.957l2.329-2.328a.5.5 0 1 0-.708-.708Z\" fill=\"#fff\" />\n  </svg>\n  ";
  }
  ;
  const feedbackForm = document.querySelector(".feedback-form");
  if (feedbackForm) {
    let validateFeedbackForm = new window.JustValidate(feedbackForm, {
      errorFieldCssClass: 'bg-white w-[354px]',
      errorLabelCssClass: 'bg-white w-full px-2 text-[14px] absolute -bottom-6 lg:-bottom-4'
    });
    let userphoneInput = feedbackForm.querySelector(".feedback-user-phone");
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(userphoneInput);
    validateFeedbackForm.addField("#user-name", [{
      rule: 'required',
      errorMessage: 'Введите имя'
    }, {
      rule: 'customRegexp',
      value: "[а-яё]",
      errorMessage: 'Допустимы только кирилица'
    }, {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум 2 символа'
    }, {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Максимум 30 символов'
    }]).addField("#user-phone", [{
      rule: 'required',
      errorMessage: 'Это поле обязательно'
    }, {
      validator: (value, context) => {
        return value.replace(/\D/g, '').length === 11;
      },
      errorMessage: 'Введите номер полностью'
    }]);
  }
  ;
});