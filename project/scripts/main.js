// Main JavaScript file for REMIS Online

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggling
    const menuButton = document.getElementById('menu-toggle');
    const primaryNav = document.getElementById('primary-nav');

    if (menuButton && primaryNav) {
        menuButton.addEventListener('click', () => {
            // Toggle the 'open' class
            primaryNav.classList.toggle('open');

            // Toggle aria-expanded for accessibility
            const isExpanded = primaryNav.classList.contains('open');
            menuButton.setAttribute('aria-expanded', isExpanded);
            menuButton.innerHTML = isExpanded ? '&times;' : '&#9776;'; // Change icon X / Hamburger
        });
    }

    // 2. Dynamic Copyright Year logic removed (handled by getdates.js)
});
