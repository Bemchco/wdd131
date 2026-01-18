const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const pinshow = document.querySelectorAll('.pin');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
