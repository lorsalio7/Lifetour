function checkVisibleSlides(slides, visibleClass, additionalClass) {
  for(let i = 0; i < slides.length; i++) {
    if(!slides[i].classList.contains(visibleClass)) {
      slides[i].classList.add(additionalClass);
    } else {
      slides[i].classList.remove(additionalClass);
    }
  }
}
