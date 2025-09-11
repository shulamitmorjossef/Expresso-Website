document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");

  if (burger && navList) {
    burger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
  }
});
