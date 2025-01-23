"use strict";

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: "true"
  });
  svg4everybody({
    polyfill: true
  });
  // =========================== Фикс скачка браузерного скролла и плавной прокрутки ==========================================

  var scrollController = {
    scrollPosition: 0,
    disabledScroll: function disabledScroll(fixedElement) {
      if (fixedElement) {
        var fixedElements = document.querySelectorAll(fixedElement);
        fixedElements.forEach(function (element) {
          element.style.paddingRight = "".concat(parseInt(window.innerWidth - document.body.offsetWidth), "px");
        });
      }
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = "\n      overflow: hidden;\n      position: fixed;\n      top: -".concat(scrollController.scrollPosition, "px;\n      left: 0;\n      height: 100vh;\n      width: 100vw;\n      padding-right: ").concat(parseInt(window.innerWidth - document.body.offsetWidth), "px;\n    ");
      document.documentElement.style.scrollBehavior = "unset";
    },
    enabledScrool: function enabledScrool(fixedElement) {
      document.body.style.cssText = "";
      window.scroll({
        top: scrollController.scrollPosition
      });
      document.documentElement.style.scrollBehavior = "";
      if (fixedElement) {
        var fixedElements = document.querySelectorAll(fixedElement);
        fixedElements.forEach(function (element) {
          element.style.paddingRight = "0";
        });
      }
    }
  };
  window.addEventListener("scroll", function (e) {
    var offsetTop = window.scrollY;
    if (offsetTop > 0) {
      document.querySelector(".main-header").classList.add("py-3", "bg-[var(--color-science-blue)]");
    } else {
      document.querySelector(".main-header").classList.remove("py-3", "bg-[var(--color-science-blue)]");
    }
  });
  var headerSite = document.querySelector(".main-header");
  var headerSiteHeight = headerSite.offsetHeight;
  window.addEventListener("resize", function () {
    setHeaderHeight();
  });
  function setHeaderHeight() {
    document.documentElement.style.setProperty('--header-height', "".concat(headerSiteHeight, "px"));
  }
  setHeaderHeight();
  ;
  var burgerButton = document.querySelector(".burger-button");
  if (burgerButton) {
    var burgerMenuWidth = window.matchMedia("(max-width: 768px)");
    var burgerButtonLine = burgerButton.querySelector(".burger-button-line");
    var burgerButtonLineClassList = Array.from(burgerButtonLine.classList).join(" ");
    var siteNavigation = document.querySelector(".site-navigation");
    var navigationLinks = siteNavigation.querySelectorAll(".navigation-link");
    burgerButton.addEventListener("click", function () {
      burgerButton.classList.toggle("burger-button--active");
      if (burgerButton.classList.contains("burger-button--active")) {
        openSiteMenu();
        burgerButton.setAttribute("aria-label", "Закрыть главное меню");
        navigationLinks.forEach(function (link) {
          link.addEventListener("click", function () {
            closeSiteMenu();
          });
        });
      } else {
        closeSiteMenu();
        burgerButton.setAttribute("aria-label", "Открыть главное меню");
      }
    });
    function openSiteMenu() {
      setTimeout(function () {
        scrollController.disabledScroll();
      }, 300);
      burgerButtonLine.className = "burger-button-line absolute left-1/2 top-1/2 block w-[34px] h-[2px] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 delay-300 ease-linear bg-transparent before:content-[''] before:absolute before:block before:w-[34px] before:h-[2px] before:bg-[var(--color-white)] before:left-0 before:top-0 before:rotate-45 before:transition-[top,transform] before:duration-[0.3s,0.3s] before:delay-[0s,0.3s] before:ease-[linear,linear] after:content-[''] after:absolute after:left-0 after:top-0 after:-rotate-45 after:block after:w-[34px] after:h-[2px] after:bg-[var(--color-white)] after:transition-[top,transform] after:duration-[0.3s,0.3s] after:delay-[0s,0.3s] after:ease-linear";
      siteNavigation.className = "site-navigation flex justify-between md:fixed md:top-0 md:bottom-0 md:right-0 md:h-full md:overflow-y-auto md:flex-col md:bg-[var(--color-science-blue)] md:w-full md:transition-transform md:duration-300 md:ease-linear md:translate-x-0 md:justify-start md:py-[86px] md:items-center";
    }
    function closeSiteMenu() {
      scrollController.enabledScrool();
      burgerButton.classList.remove("burger-button--active");
      burgerButtonLine.className = burgerButtonLineClassList;
      siteNavigation.className = "site-navigation flex justify-between md:fixed md:top-0 md:bottom-0 md:right-0 md:h-full md:overflow-y-auto md:flex-col md:bg-[var(--color-science-blue)] md:w-full md:transition-transform md:duration-300 md:ease-linear md:-translate-x-[100%] md:justify-start md:py-[86px] md:items-center";
    }
    function changeMenuView(width) {
      if (!width) {
        closeSiteMenu();
      }
    }
    burgerMenuWidth.onchange = function (e) {
      changeMenuView(e.matches);
    };
  }
  ;
  var rellax = new Rellax('.rellax', {
    wrapper: null,
    vertical: true,
    breakpoints: [425, 768, 1201]
  });
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
    trainersSliderNextButton.addEventListener("click", function () {
      trainersSlider.go("+1");
    });
    trainersSliderPrevButton.addEventListener("click", function () {
      trainersSlider.go("-1");
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
    reviewsSliderNextButton.addEventListener("click", function () {
      reviewsSlider.go("+1");
    });
    reviewsSliderPrevButton.addEventListener("click", function () {
      reviewsSlider.go("-1");
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
    gallerySliderNextButton.addEventListener("click", function () {
      gallerySlider.go("+1");
    });
    gallerySliderPrevButton.addEventListener("click", function () {
      gallerySlider.go("-1");
    });
  }
  ;
  var gallery = document.querySelector(".gallery");
  if (gallery) {
    baguetteBox.run('.gallery');
    document.querySelector("#close-button").classList.add("hover-hover:hover:bg-[var(--color-endeavour)]", "focus:bg-[var(--color-endeavour)]");
    document.querySelector("#close-button svg").setAttribute("viewBox", "0 0 30 30");
    document.querySelector("#close-button svg").setAttribute("width", "20");
    document.querySelector("#close-button svg").setAttribute("height", "20");
    document.querySelector("#close-button svg").setAttribute("preserveAspectRatio", "xMidYMid meet");
    document.querySelector("#close-button svg").setAttribute("xmlns", "http://www.w3.org/2000/svg");
    document.querySelector("#next-button").classList.add("flex", "justify-center", "items-center", "hover-hover:hover:bg-[var(--color-endeavour)]", "focus:bg-[var(--color-endeavour)]");
    document.querySelector("#next-button").innerHTML = "";
    document.querySelector("#next-button").innerHTML = "\n  <svg width=\"14\" height=\"8\" id=\"right-arrow\" viewBox=\"0 0 14 8\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"m10.422.464 3.182 3.182a.5.5 0 0 1 0 .708l-3.182 3.182a.5.5 0 0 1-.708-.708L12.043 4.5H.25v-1h11.793L9.714 1.172a.5.5 0 1 1 .708-.708Z\" fill=\"#fff\" />\n  </svg>\n  ";
    document.querySelector("#previous-button").classList.add("flex", "justify-center", "items-center", "hover-hover:hover:bg-[var(--color-endeavour)]", "focus:bg-[var(--color-endeavour)]");
    document.querySelector("#previous-button").innerHTML = "";
    document.querySelector("#previous-button").innerHTML = "\n  <svg width=\"14\" height=\"8\" id=\"left-arrow\" viewBox=\"0 0 14 8\">\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.578.464.396 3.646a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 1 0 .708-.708L1.957 4.5H13.75v-1H1.957l2.329-2.328a.5.5 0 1 0-.708-.708Z\" fill=\"#fff\" />\n  </svg>\n  ";
  }
  ;
  var feedbackForm = document.querySelector(".feedback-form");
  if (feedbackForm) {
    var validateFeedbackForm = new window.JustValidate(feedbackForm, {
      errorFieldCssClass: 'bg-[var(--color-white)] w-[354px]',
      errorLabelCssClass: 'bg-[var(--color-white)] w-full px-2 text-[14px] absolute -bottom-6 lg:-bottom-4'
    });
    var userphoneInput = feedbackForm.querySelector(".feedback-user-phone");
    var im = new Inputmask("+7 (999) 999-99-99");
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
      validator: function validator(value, context) {
        return value.replace(/\D/g, '').length === 11;
      },
      errorMessage: 'Введите номер полностью'
    }]);
  }
  ;
});