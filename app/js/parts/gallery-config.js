
let gallery = document.querySelector(".gallery");

if(gallery) {
  baguetteBox.run('.gallery');
  document.querySelector("#close-button").classList.add("hover-hover:hover:bg-[var(--color-endeavour)]", "focus:bg-[var(--color-endeavour)]");
  document.querySelector("#close-button svg").setAttribute("viewBox", "0 0 30 30");
  document.querySelector("#close-button svg").setAttribute("width", "20");
  document.querySelector("#close-button svg").setAttribute("height", "20");
  document.querySelector("#close-button svg").setAttribute("preserveAspectRatio", "xMidYMid meet");
  document.querySelector("#close-button svg").setAttribute("xmlns", "http://www.w3.org/2000/svg");

  document.querySelector("#next-button").classList.add("flex", "justify-center", "items-center", "hover-hover:hover:bg-[var(--color-endeavour)]", "focus:bg-[var(--color-endeavour)]");
  document.querySelector("#next-button").innerHTML = "";
  document.querySelector("#next-button").innerHTML = `
  <svg width="14" height="8" id="right-arrow" viewBox="0 0 14 8">
    <path fill-rule="evenodd" clip-rule="evenodd" d="m10.422.464 3.182 3.182a.5.5 0 0 1 0 .708l-3.182 3.182a.5.5 0 0 1-.708-.708L12.043 4.5H.25v-1h11.793L9.714 1.172a.5.5 0 1 1 .708-.708Z" fill="#fff" />
  </svg>
  `;

  document.querySelector("#previous-button").classList.add("flex", "justify-center", "items-center", "hover-hover:hover:bg-[var(--color-endeavour)]", "focus:bg-[var(--color-endeavour)]");
  document.querySelector("#previous-button").innerHTML = "";
  document.querySelector("#previous-button").innerHTML = `
  <svg width="14" height="8" id="left-arrow" viewBox="0 0 14 8">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.578.464.396 3.646a.5.5 0 0 0 0 .708l3.182 3.182a.5.5 0 1 0 .708-.708L1.957 4.5H13.75v-1H1.957l2.329-2.328a.5.5 0 1 0-.708-.708Z" fill="#fff" />
  </svg>
  `;

}
