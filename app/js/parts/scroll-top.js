window.addEventListener("scroll", (e) => {
  let offsetTop = window.scrollY;
  console.log("work");
  if(offsetTop > 0) {
    document.querySelector(".main-header").classList.add("py-3", "bg-science-blue");
  } else {
    document.querySelector(".main-header").classList.remove("py-3", "bg-science-blue");
  }
})
