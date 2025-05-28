document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href');
            const target = document.querySelector(targetID);
            
            if (target) { // Check if the target exists
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Target ${targetID} not found.`);
            }
        });
    });

    const fadeInElements = document.querySelectorAll('.fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
