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
});