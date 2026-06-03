const swiperTop = new Swiper(".top-swiper", {
  // Optional parameters
  // animation ( web swiperjs)

  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// animation ( web swiperjs)
const swiperAbout = new Swiper(".about__slider", {
  // їх 4 штуки
  slidesPerView: 4,
  // відстань між ними
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
