document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: "true",
  });
  @@include("functions/scroll-controller.js");
  @@include("parts/scroll-top.js");
  @@include("parts/header-height.js");
  @@include("parts/burger-menu.js");
  @@include("parts/parallax-init.js");
  @@include("parts/gallery-config.js");
  @@include("parts/mask-inputs.js");
  @@include("parts/sliders.js");
});
