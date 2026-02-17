

document.addEventListener('DOMContentLoaded', () => {

    const menuButton = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (menuButton && primaryNav) {
        menuButton.addEventListener('click', () => {

            primaryNav.classList.toggle('open');


            const isExpanded = primaryNav.classList.contains('open');
            menuButton.setAttribute('aria-expanded', isExpanded);
            menuButton.innerHTML = isExpanded ? '&times;' : '&#9776;';
        });
    }


});
