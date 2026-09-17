// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Make Navigation Sticky with style change on scroll
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'shadow-lg');
            nav.classList.remove('relative');
        } else {
            nav.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'shadow-lg');
            nav.classList.add('relative');
        }
    });
});