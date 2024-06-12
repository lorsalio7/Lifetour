function checkVisibleSlides(slides, visibleClass, additionalClass, maxWidth, currentWidth) {
  if(currentWidth < maxWidth) {
    slides.forEach(slide => {
      slide.classList.remove(additionalClass);
    });
  } else {
    for(let i = 0; i < slides.length; i++) {
      if(!slides[i].classList.contains(visibleClass)) {
        slides[i].classList.add(additionalClass);
      } else {
        slides[i].classList.remove(additionalClass);
      }
    }
  }

}
