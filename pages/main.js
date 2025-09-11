// document.addEventListener("DOMContentLoaded", () => {
//   /* ===========================
//      BURGER MENU
//   =========================== */
//   const burger = document.querySelector(".burger");
//   const navList = document.querySelector(".nav-list");
//   if (burger && navList) {
//     burger.addEventListener("click", () => {
//       navList.classList.toggle("show");
//     });
//   }

//   /* ===========================
//      SLIDESHOW
//   =========================== */
//   let slideIndex = 0;
//   const slides = document.getElementsByClassName("slide");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");

//   function showSlides(n) {
//     if (!slides || slides.length === 0) return;
//     if (n >= slides.length) slideIndex = 0;
//     if (n < 0) slideIndex = slides.length - 1;
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";
//   }

//   function plusSlides(n) {
//     slideIndex += n;
//     showSlides(slideIndex);
//   }

//   if (slides && slides.length > 0) {
//     showSlides(slideIndex);
//     if (prevBtn) prevBtn.addEventListener("click", () => plusSlides(-1));
//     if (nextBtn) nextBtn.addEventListener("click", () => plusSlides(1));
//     setInterval(() => plusSlides(1), 5000);
//   }

//   /* ===========================
//      FILTER CATALOG
//   =========================== */
//   const buttons = document.querySelectorAll(".filter-btn");
//   const products = document.querySelectorAll(".product-card");
//   if (buttons.length && products.length) {
//     buttons.forEach(btn => {
//       btn.addEventListener("click", () => {
//         buttons.forEach(b => b.classList.remove("active"));
//         btn.classList.add("active");
//         const category = btn.getAttribute("data-category");
//         products.forEach(product => {
//           if (category === "all" || product.classList.contains(category)) {
//             product.style.display = "block";
//           } else {
//             product.style.display = "none";
//           }
//         });
//       });
//     });
//   }

//   /* ===========================
//      LIGHTBOX
//   =========================== */
//   const lightbox = document.getElementById("lightbox");
//   const lightboxImg = document.getElementById("lightbox-img");
//   const images = document.querySelectorAll(".lightbox-img");
//   const closeBtn = document.querySelector(".close");

//   if (lightbox && lightboxImg && images.length) {
//     images.forEach(img => {
//       img.addEventListener("click", () => {
//         lightbox.style.display = "flex";
//         lightboxImg.src = img.src;
//       });
//     });

//     if (closeBtn) {
//       closeBtn.addEventListener("click", () => {
//         lightbox.style.display = "none";
//       });
//     }

//     lightbox.addEventListener("click", e => {
//       if (e.target === lightbox) lightbox.style.display = "none";
//     });
//   }

//   /* ===========================
//      READ MORE (ABOUT PAGE)
//   =========================== */
//   const readMoreBtn = document.querySelector(".read-more-btn");
//   const moreText = document.getElementById("more-text");
//   if (readMoreBtn && moreText) {
//     readMoreBtn.addEventListener("click", () => {
//       moreText.style.display = (moreText.style.display === "none") ? "block" : "none";
//     });
//   }

//   /* ===========================
//      ACCORDION (FAQ PAGE)
//   =========================== */
//   const headers = document.querySelectorAll(".accordion-header");
//   if (headers.length) {
//     headers.forEach(header => {
//       header.addEventListener("click", () => {
//         const item = header.parentElement;
//         item.classList.toggle("active");
//       });
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
     BURGER MENU
  =========================== */
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  if (burger && navList) {
    burger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }

  /* ===========================
     SLIDESHOW
  =========================== */
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function showSlides(n) {
    if (!slides || slides.length === 0) return;
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }

  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
  }

  if (slides && slides.length > 0) {
    showSlides(slideIndex);
    if (prevBtn) prevBtn.addEventListener("click", () => plusSlides(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => plusSlides(1));
    setInterval(() => plusSlides(1), 5000);
  }

  /* ===========================
     FILTER CATALOG
  =========================== */
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");
  if (buttons.length && products.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-category");
        products.forEach(product => {
          if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });
      });
    });
  }

  /* ===========================
     LIGHTBOX
  =========================== */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const images = document.querySelectorAll(".lightbox-img");
  const closeBtn = document.querySelector(".close");

  if (lightbox && lightboxImg && images.length) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }

    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });
  }

  /* ===========================
     READ MORE (ABOUT PAGE)
  =========================== */
  const readMoreBtn = document.querySelector(".read-more-btn");
  const moreText = document.getElementById("more-text");
  if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener("click", () => {
      moreText.style.display = (moreText.style.display === "none") ? "block" : "none";
    });
  }

  /* ===========================
     ACCORDION (FAQ PAGE)
  =========================== */
  const headers = document.querySelectorAll(".accordion-header");
  if (headers.length) {
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
      });
    });
  }

  /* ===========================
     TRIVIA QUIZ
  =========================== */
  const submitTrivia = document.getElementById("submit-trivia");
  if (submitTrivia) {
    submitTrivia.addEventListener("click", () => {
      const questions = ["q1", "q2", "q3", "q4", "q5"];
      let score = 0;

      questions.forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === "correct") score++;
      });

      const resultDiv = document.getElementById("trivia-result");
      if (resultDiv) {
        resultDiv.textContent = `Your score: ${score} / ${questions.length}`;
      }
    });
  }
});
