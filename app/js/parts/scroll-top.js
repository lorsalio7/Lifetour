window.addEventListener("scroll", (e) => {
  let offsetTop = window.scrollY;

  if(offsetTop > 0) {
    document.querySelector(".main-header").classList.add("py-4", "bg-science-blue");
  } else {
    document.querySelector(".main-header").classList.remove("py-4", "bg-science-blue");
  }
})
