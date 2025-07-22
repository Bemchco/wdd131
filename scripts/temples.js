// Footer: Set current year and last modified date
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  // Hamburger Menu Toggle
  const hamburgerBtn = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      hamburgerBtn.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    });
  }
});
