let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));

  setInterval(() => plusSlides(1), 5000);
});
