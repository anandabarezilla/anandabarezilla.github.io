// typedJS
const options = {
  strings: ["Barezilla", "Web Developer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
};

const typed = new Typed(".type", options);

// swiperJs
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  speed: 1000,
  loop: true,
  grabCursor: true,
  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navigator scroll up
$(window).on("scroll", () => {
  // console.log($(".hero").outerHeight());
  if (window.pageYOffset > $(".hero").outerHeight()) {
    $(".navigator").addClass("active");
  } else {
    $(".navigator").removeClass("active");
  }
});

// aosJs
AOS.init();
