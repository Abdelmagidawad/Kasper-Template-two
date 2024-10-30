// Section Stats
let sectionStats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");

let started = false;

window.addEventListener("scroll", () => {
  if (this.scrollY >= sectionStats.offsetTop - 90) {
    if (!started) {
      numbers.forEach((number) => startCount(number));
    }
    started = true;
  }
});

function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent === goal) {
      clearInterval(count);
    }
  }, 500 / goal);
}

// Section Skills
let div = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");
window.addEventListener("scroll", function () {
  if (window.scrollY >= div.offsetTop - 40) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// Icon Scroll
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
