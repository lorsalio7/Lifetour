let headerSite = document.querySelector(".main-header");


let headerSiteHeight = headerSite.offsetHeight;

window.addEventListener("resize", () => {
  setHeaderHeight();
});

function setHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', `${headerSiteHeight}px`);
}

setHeaderHeight();

