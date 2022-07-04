const mobiBtn = document.querySelector(".mobile-btn");
const tabBtn = document.querySelector(".tablet-btn");

const mainNav = document.querySelector(".main-nav");
const secondNav = document.querySelector(".second-nav");

tabBtn.addEventListener("click", function () {
  secondNav.classList.toggle("visible");
});

mobiBtn.addEventListener("click", function () {
  if (
    (secondNav.classList.contains("visible") &&
      mainNav.classList.contains("visible")) ||
    (!secondNav.classList.contains("visible") &&
      !mainNav.classList.contains("visible"))
  ) {
    mainNav.classList.toggle("visible");
    secondNav.classList.toggle("visible");
  } else {
    secondNav.classList.remove("visible");
    mainNav.classList.remove("visible");
  }
});
