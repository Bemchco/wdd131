
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  const hamburgerBtn = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hamburgerBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
  });

});
