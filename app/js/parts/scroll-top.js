window.addEventListener("scroll", (e) => {
  let offsetTop = window.scrollY;

  if(offsetTop > 0) {
    document.querySelector(".main-header").classList.add("py-3", "bg-[var(--color-science-blue)]");
  } else {
    document.querySelector(".main-header").classList.remove("py-3", "bg-[var(--color-science-blue)]");
  }
})
