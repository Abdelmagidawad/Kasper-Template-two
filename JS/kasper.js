let scrollUp = document.querySelector(".up-icon");
window.addEventListener("scroll", function () {
  if (this.scrollY >= 550) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let div = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= div.offsetTop - 40) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
