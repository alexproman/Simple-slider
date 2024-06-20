const slider = document.querySelector(".slides-parent");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
next.addEventListener("click", () => {
  index++;
  index <= slides.length - 1
    ? (slider.style.transform = `translateX(-${
        (100 / slides.length) * index
      }%)`)
    : index--;

  dots.forEach((dot, i) => {
    index == i ? dot.classList.add("active") : dot.classList.remove("active");
  });
});

prev.addEventListener("click", () => {
  index == 0 ? (prev.style.pointerEvent = `none`) : index--;
  dots.forEach((dot, i) => {
    index == i ? dot.classList.add("active") : dot.classList.remove("active");
  });
  index >= slides.length - 1
    ? (index = 0)
    : (slider.style.transform = `translateX(-${
        (100 / slides.length) * index
      }%)`);
  styleDots(index);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    dots.forEach((item) => {
      item.classList.remove("active");
    });
    dot.classList.add("active");
    slider.style.transform = `translateX(-${(100 / slides.length) * index}%)`;
  });
});
