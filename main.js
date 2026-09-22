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

document.addEventListener("DOMContentLoaded", () => {
    // 1. Load Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // Set active state on current page link
            const currentPage = window.location.pathname.split("/").pop() || 'index.html';
            const navLinks = document.querySelectorAll('.nav-links a');
            
            navLinks.forEach(link => {
                if (link.getAttribute('data-page') === currentPage) {
                    link.classList.add('text-brand-gold', 'border-b-2', 'border-brand-gold', 'pb-1');
                }
            });
        });

    // 2. Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});