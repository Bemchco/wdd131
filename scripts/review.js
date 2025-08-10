const currentYear = new Date().getFullYear();

document.querySelector("footer p").innerHTML = `©${currentYear} Brandon Chinchilla Guatemala`;

const lastModified = document.lastModified;

document.querySelectorAll("footer p")[1].innerHTML = `Last Modification: ${lastModified}`;


function htmlEscape(s){ return String(s).replace(/[&<>"']/g, (c)=> ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"})[c]); }

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const conf = document.getElementById('confirmation');

  if (sessionStorage.getItem('justSubmittedReview') === 'true') {
    const key = 'reviews_submitted_count';
    const current = parseInt(localStorage.getItem(key) || '0', 10);
    localStorage.setItem(key, String(current + 1));
    sessionStorage.removeItem('justSubmittedReview');
  }

  const count = localStorage.getItem('reviews_submitted_count') || '0';
  document.getElementById('reviewCount').textContent = count;

  if (!params.toString()) {
    conf.innerHTML = '<p>No form data was found in the URL. <a href="form.html">Go back</a>.</p>';
    return;
  }


});
