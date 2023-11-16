// bg images
const bgImages = document.querySelectorAll("[data-bg]");
bgImages.forEach((elem) => {
  const url = elem.getAttribute("data-bg");
  elem.style.backgroundImage = `url(${url})`;
});

// slider
const gamesSlider = new Swiper(".games__slider", {
  loop: true,
  spaceBetween: 50,
  navigation: {
    prevEl: ".games__slider-button_prev",
    nextEl: ".games__slider-button_next",
  },
});

const reviewsSlider = new Swiper(".reviews__slider", {
  loop: true,
  spaceBetween: 50,
  navigation: {
    prevEl: ".reviews__slider-button_prev",
    nextEl: ".reviews__slider-button_next",
  },
});

// modal
const btnsModal = document.querySelectorAll("[data-target]");
btnsModal.forEach((btn) => {
  const id = btn.getAttribute("data-target");
  const modal = document.getElementById(id);
  btn.addEventListener("click", function () {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  const modalContent = modal.querySelector(".modal__content");
  modal.addEventListener("click", function (e) {
    if (!modalContent.contains(e.target)) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});
