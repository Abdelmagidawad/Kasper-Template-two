let div = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".prog span");

window.onscroll = function () {
    if (window.scrollY >= div.offsetTop - 40) {
        console.log("Reached div our-skills");
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};