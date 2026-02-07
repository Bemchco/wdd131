const reviewCountElement = document.getElementById('reviewCount');

let reviewCount = localStorage.getItem('reviewCount');

if (!reviewCount) {
    reviewCount = 0;
}

reviewCount++;

localStorage.setItem('reviewCount', reviewCount);

if (reviewCountElement) {
    reviewCountElement.textContent = reviewCount;
}