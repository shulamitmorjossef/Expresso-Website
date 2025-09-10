document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const products = document.querySelectorAll(".product-card");

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
});
