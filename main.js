document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Function to handle Sticky Nav
    // We wrap this in a function so we can call it at the right time
    function initStickyNav() {
        const nav = document.getElementById('mainNav');
        if (!nav) return; // Exit if nav doesn't exist
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Added z-50 to ensure it stays above other content when scrolling
                nav.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'shadow-lg', 'z-50');
                nav.classList.remove('relative');
            } else {
                nav.classList.remove('fixed', 'top-0', 'left-0', 'w-full', 'shadow-lg', 'z-50');
                nav.classList.add('relative');
            }
        });
    }

    // 2. Identify placeholders
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // 3. Handle Navbar Logic
    if (navbarPlaceholder) {
        // If placeholder exists (e.g., on about.html), fetch it
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
                
                // Set active state on current page link
                const currentPage = window.location.pathname.split("/").pop() || 'index.html';
                const navLinks = document.querySelectorAll('.nav-links a');
                
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === currentPage) {
                        link.classList.add('text-brand-gold', 'border-b-2', 'border-brand-gold', 'pb-1');
                    }
                });

                // Initialize sticky nav AFTER navbar is injected into DOM
                initStickyNav();
            })
            .catch(error => console.error("Error loading navbar:", error));
    } else {
        // If placeholder DOES NOT exist (e.g., on index.html), just init the sticky nav immediately
        initStickyNav();
    }

    // 4. Handle Footer Logic
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error("Error loading footer:", error));
    }
});