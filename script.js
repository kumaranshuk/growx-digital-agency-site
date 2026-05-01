// script.js - JavaScript for Grow X Technologies website

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 16;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    const track = document.querySelector('.testimonial-track');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevButton = document.getElementById('testimonial-prev');
    const nextButton = document.getElementById('testimonial-next');

    if (track && testimonialCards.length > 0) {
        let currentIndex = 0;
        let visibleCount = window.innerWidth >= 1024 ? 3 : 1;

        const updateVisibleCount = () => {
            visibleCount = window.innerWidth >= 1024 ? 3 : 1;
            currentIndex = Math.min(currentIndex, testimonialCards.length - visibleCount);
            track.style.transform = `translateX(-${(currentIndex * 100) / visibleCount}%)`;
        };

        const showTestimonial = direction => {
            const maxIndex = Math.max(0, testimonialCards.length - visibleCount);
            currentIndex = Math.min(maxIndex, Math.max(0, currentIndex + direction));
            track.style.transform = `translateX(-${(currentIndex * 100) / visibleCount}%)`;
        };

        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => showTestimonial(-1));
            nextButton.addEventListener('click', () => showTestimonial(1));
        }

        window.addEventListener('resize', updateVisibleCount);
        updateVisibleCount();
        setInterval(() => showTestimonial(1), 7000);
    }

    const filterButtons = document.querySelectorAll('.filter-btn');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active', 'bg-green-400', 'text-black');
                    btn.classList.add('bg-gray-800', 'text-white');
                });
                this.classList.add('active');
                this.classList.remove('bg-gray-800', 'text-white');
                this.classList.add('bg-green-400', 'text-black');
                const filterValue = this.getAttribute('data-filter');
                const portfolioItems = document.querySelectorAll('.portfolio-item');
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        item.style.opacity = '0';
                        setTimeout(() => { item.style.opacity = '1'; }, 80);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const statusMessage = document.getElementById('status-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            const formData = new FormData(contactForm);
            formData.append('access_key', '0962a9aa-46fa-4fa3-91cb-de32b3f264a4');

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                const data = await response.json();
                if (response.ok) {
                    showFormStatus('Success! Your message has been sent.', 'success');
                    contactForm.reset();
                } else {
                    showFormStatus('Error: ' + (data.message || 'Unable to send.') + ' Please try the Google Form link below.', 'error');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormStatus('Something went wrong. Please try the Google Form link below.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    function showFormStatus(message, type) {
        if (formStatus && statusMessage) {
            statusMessage.textContent = message;
            statusMessage.className = type === 'success' ? 'text-green-400' : 'text-red-400';
            formStatus.classList.remove('hidden');
            setTimeout(() => formStatus.classList.add('hidden'), 5000);
        }
    }

    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (header) {
            if (scrollTop > 24) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            if (scrollTop > lastScrollTop && scrollTop > 120) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollTop = scrollTop;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));
});