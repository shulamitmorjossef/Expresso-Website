let slideIndex = 0;
showSlides(slideIndex);

// מעבר ידני
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// פונקציה להצגת השקופיות
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// מאזינים לכפתורים
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
  document.querySelector(".next").addEventListener("click", () => plusSlides(1));

  // מעבר אוטומטי כל 5 שניות
  setInterval(() => plusSlides(1), 5000);
});
