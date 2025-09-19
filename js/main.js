// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const carousel   = document.querySelector('.carousel');
  const track      = carousel.querySelector('.carousel-track');
  const slides     = Array.from(track.children);
  const prevBtn    = carousel.querySelector('.arrow.prev');
  const nextBtn    = carousel.querySelector('.arrow.next');
  let currentIndex = 0;
  let slideWidth   = 0;

  function setWidths() {
    slideWidth = carousel.getBoundingClientRect().width;
    track.style.width = `${slideWidth * slides.length}px`;
    slides.forEach(slide => {
      slide.style.width = `${slideWidth}px`;
    });
    moveToSlide(0, false);
  }

  function moveToSlide(idx, animate = true) {
    const clamped = (idx + slides.length) % slides.length;
    track.style.transition = animate
      ? 'transform 0.5s ease-in-out'
      : 'none';
    track.style.transform = `translateX(-${clamped * slideWidth}px)`;
    currentIndex = clamped;
  }

  prevBtn.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
  });

  window.addEventListener('load',  setWidths);
  window.addEventListener('resize', setWidths);
});
