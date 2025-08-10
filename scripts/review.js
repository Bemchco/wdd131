document.addEventListener('DOMContentLoaded', () => {

  const currentYear = new Date().getFullYear();
  document.querySelector("footer p").innerHTML = `©${currentYear} Brandon Chinchilla Guatemala`;
  const lastModified = document.lastModified;
  document.querySelectorAll("footer p")[1].innerHTML = `Last Modification: ${lastModified}`;

  const key = 'reviews_submitted_count';
  let count = parseInt(localStorage.getItem(key) ?? '0', 10);
  if (Number.isNaN(count)) count = 0;
  if (sessionStorage.getItem('justSubmittedReview') === 'true') {
    count += 1;
    localStorage.setItem(key, String(count));
    sessionStorage.removeItem('justSubmittedReview');
  }
  const reviewCountEl = document.getElementById('reviewCount');
  if (reviewCountEl) {
    reviewCountEl.textContent = String(count);
  }
});
