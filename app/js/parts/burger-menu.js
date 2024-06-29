let burgerButton = document.querySelector(".burger-button");

if(burgerButton) {
  let burgerMenuWidth = window.matchMedia("(max-width: 768px)");
  let burgerButtonLine = burgerButton.querySelector(".burger-button-line");
  let burgerButtonLineClassList = Array.from(burgerButtonLine.classList).join(" ");
  let siteNavigation = document.querySelector(".site-navigation");
  let navigationLinks = siteNavigation.querySelectorAll(".navigation-link");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger-button--active");

    if(burgerButton.classList.contains("burger-button--active")) {
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
  })

  function openSiteMenu() {

    setTimeout(()=> {
      scrollController.disabledScroll();
    },300);
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
    if(!width) {
      closeSiteMenu();
    }
  }

  burgerMenuWidth.onchange = (e) => {
    changeMenuView(e.matches);
  }
}


