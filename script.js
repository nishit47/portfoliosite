// Filmmaker Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    initNavigation();
    
    // Portfolio filtering
    initPortfolioFilter();
    
    // Video modal functionality
    initVideoModal();
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Form submission
    initContactForm();
    
    // Lazy loading for videos
    initLazyLoading();
    
    // Scroll animations
    initScrollAnimations();
    
    // Video hover effects
    initVideoHoverEffects();
    
    // Initialize carousel
    initCarousel();
    
    // Initialize image modal
    initImageModal();
});

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Portfolio Filter
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter || category.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Video Modal (Updated for embedded YouTube with descriptions)
function initVideoModal() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('videoModal');
    const youtubeEmbed = document.getElementById('youtubeEmbed');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescriptionText = document.getElementById('videoDescriptionText');
    const closeModal = document.querySelector('.close-modal');

    // Video descriptions for each project
    const videoDescriptions = {
        'z684g-EJ4-A': {
            title: 'Bihaniko Ghaam',
            description: `<p><strong>Role:</strong> Writer, Director, Editor, Cinematographer</p>
                         <p>A music video that explores the dual nature, the pressure and pleasures of being an artist.</p>
                         <p><strong>Production:</strong> Anindra Studios</p>`
        },
        '8yBXVpLGZjQ': {
            title: 'MGSKS',
            description: `<p><strong>Role:</strong> Writer, Director, Editor, Cinematographer</p>
                         <p>A guy, hungover from the night before, wakes up to several missed calls and messages only to find his enraged friend waiting to kill him.</p>
                         <p>This movie premiered at Teen Indie Film Awards 2023 (TIFA) where it was nominated for the best film and best director. It then got an honorable Mention at Student World Impact Film Festival 2023 (SWIFF), and was showcased online in GUTTERCAST film festival 2023 online. It also went on to win Best Student Film and Best Asian Short Film at a few monthly film festivals.</p>
                         <p><strong>Production:</strong> Anindra Studios</p>`
        },
        'z0N2t4wWFGo': {
            title: 'Rose of Winter',
            description: `<p><strong>Role:</strong> Writer, Director, Editor, Cinematographer</p>
                         <p>'Rose Of Winter' follows a guy who starts plucking flowers everyday after he sees her forget all her problems and smile for a second when a flower drops on her table.</p>
                         <p><strong>Production:</strong> Anindra Studios</p>`
        },
        'CaqRi2D95iU': {
            title: 'Asymptote',
            description: `<p><strong>Role:</strong> Writer, Director, Editor, Cinematographer</p>
                         <p>A man struggling to get over his ex finds a new obsession.</p>
                         <p><strong>Production:</strong> Anindra Studios</p>`
        },
        'Hk3RUOGHYdA': {
            title: 'Cancer',
            description: `<p><strong>Role:</strong> Editor</p>
                         <p>A man is addicted to cigarettes.</p>
                         <p><strong>Production:</strong> Chhoto Charito Production</p>`
        },
        'y_yYUXGPWv8': {
            title: 'Makhamali Udaan',
            description: `<p><strong>Role:</strong> Editor</p>
                         <p>Makhamali Udaan, a Nepali short film by Atin Shrestha and the team, at its core, is a tale of pursuing your dreams and navigating challenges along the way.</p>
                         <p>Makhamali Udaan premiered at the Something Like a Film Festival 2023 in Patan, Nepal. It was also screened at the 7th Pame International Film Festival 2023 in Pokhara, Nepal, and the 2024 Nepal-European Union Film Festival in Kathmandu, Nepal. It was also selected in the 5th Nepal Cultural International Film Festival 2023.</p>
                         <p><strong>Synopsis:</strong> 'Makhamali Udaan' is the story of a brother and a sister from a low-income class, who cross their personal boundaries to set off into the flight of their own interests while also becoming each other's strongest support.</p>
                         <p><strong>Production:</strong> Paaila Ka Kathaharu</p>`
        },
        'w5cmORqDmE0': {
            title: 'Goldfish',
            description: `<p><strong>Role:</strong> Director of Photography</p>
                         <p>'Goldfish' is a Nepali short film by Atin Shrestha and the team, that portrays the story of ups and downs in a modern-day relationship, and the efforts that love requires.</p>
                         <p>Goldfish premiered at the 6th Nepal International Film Festival (NIFF) 2023 in Kathmandu, Nepal, as one of its official selections in the National Short category.</p>
                         <p><strong>Synopsis:</strong> As the bond between a guy and a girl grows stronger, they navigate the ebb and flow of emotions and experiences, discovering the true meaning of love and the effort it takes to make it flourish.</p>
                         <p><strong>Production:</strong> Paaila Ka Kathaharu</p>`
        },
        'PNsTVuPq6Ys': {
            title: 'My Dog Tales - Episode 1',
            description: `<p><strong>Role:</strong> Editor</p>
                         <p>'My Dog Tales' is a short Nepali docu-series by Paaila ka Katha haru that showcases ten different stories related to our furry friends. The stories we tell will focus on the local dogs and adoption as primary themes of the series.</p>
                         <p><strong>Episode 1:</strong> Raising a dog is not easy but even with all the hardships, it is fulfilling because dogs are made just like that- to give you unconditional love. In this very first episode of My Dog Tales, we see that warm and lovely bond between the playful Sheera and her favorite human, Atin. He shares the stuff he learned about dogs from his four-year experience of adopting Sheera.</p>
                         <p><strong>Production:</strong> Paaila Ka Kathaharu</p>`
        },
        'fMFsgGU3P68': {
            title: 'My Dog Tales - Episode 4',
            description: `<p><strong>Role:</strong> Editor</p>
                         <p>'My Dog Tales' is a short Nepali docu-series by Paaila ka Katha haru that showcases ten different stories related to our furry friends. The stories we tell will focus on the local dogs and adoption as primary themes of the series.</p>
                         <p><strong>Episode 4:</strong> When you regularly provide a good warm meal coupled with love and care to the ones who have nobody, you literally become their guardian. One such example is Kathmandu Locals - the local guardians to over 250 dogs residing in the trash collection site at Teku. This episode of 'My Dog Tales' covers the great work Kathmandu Locals have been doing for these furry souls for four years.</p>
                         <p><strong>Production:</strong> Paaila Ka Kathaharu</p>`
        }
    };

    // Placeholder descriptions for projects not on YouTube
    const placeholderDescriptions = {
        'rudra': {
            title: 'Rudra',
            description: `<p><strong>Role:</strong> Editor</p>
                         <p>A drunk night between friends results in chaos when one of them disappears.</p>
                         <p><strong>Production:</strong> Chhoto Charito Production</p>
                         <p><em>Coming Soon</em></p>`
        },
        'theproposal': {
            title: 'The Proposal',
            description: `<p><strong>Role:</strong> Director of Photography</p>
                         <p>A guy starts doubting if his girlfriend will accept his proposal.</p>
                         <p><strong>Production:</strong> RSSP Entertainment</p>
                         <p><em>Coming Soon</em></p>`
        },
        'sonder': {
            title: 'Sonder',
            description: `<p><strong>Role:</strong> Director of Photography</p>
                         <p>A despaired romantic must conquer his deepest fears to bridge the silent distance between himself and a stranger, transforming a park bench into a battlefield of personal redemption.</p>
                         <p><strong>Production:</strong> RSSP Entertainment</p>
                         <p><em>Coming Soon</em></p>`
        }
    };

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const youtubeId = this.getAttribute('data-youtube');
            const projectTitle = this.querySelector('h3').textContent;
            
            if (youtubeId) {
                // Show YouTube video with description
                showVideoModal(youtubeId, videoDescriptions[youtubeId] || {
                    title: projectTitle,
                    description: '<p>Film description coming soon...</p>'
                });
            } else {
                // Show placeholder for non-YouTube projects
                const projectKey = projectTitle.toLowerCase().replace(/\s+/g, '').replace(/[^\w]/g, '');
                const projectData = placeholderDescriptions[projectKey] || {
                    title: projectTitle,
                    description: '<p><em>Coming Soon</em></p><p>This project is currently in development or post-production.</p>'
                };
                showPlaceholderModal(projectData);
            }
        });
    });

    function showVideoModal(youtubeId, data) {
        youtubeEmbed.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
        youtubeEmbed.style.display = 'block';
        videoTitle.textContent = data.title;
        videoDescriptionText.innerHTML = data.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function showPlaceholderModal(data) {
        youtubeEmbed.style.display = 'none';
        videoTitle.textContent = data.title;
        videoDescriptionText.innerHTML = data.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeVideoModal() {
        modal.style.display = 'none';
        youtubeEmbed.src = '';
        document.body.style.overflow = 'auto';
    }

    closeModal.addEventListener('click', closeVideoModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeVideoModal();
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButton = document.querySelector('.cta-button');

    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    }
}

// Contact Form
function initContactForm() {
    const form = document.querySelector('.contact-form');
    const submitButton = document.querySelector('.submit-button');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Update button state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }, 2000);
        
        // In a real application, you would send this data to your server
        console.log('Form submitted:', data);
    });
}

// Lazy Loading for Videos
function initLazyLoading() {
    const videos = document.querySelectorAll('video[preload="metadata"]');
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.preload = 'auto';
                videoObserver.unobserve(video);
            }
        });
    }, {
        rootMargin: '50px'
    });

    videos.forEach(video => {
        videoObserver.observe(video);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        scrollObserver.observe(element);
    });
}

// Video Hover Effects
function initVideoHoverEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const video = item.querySelector('.portfolio-video');
        
        item.addEventListener('mouseenter', function() {
            // Play video on hover (muted)
            if (video) {
                video.muted = true;
                video.play().catch(e => console.log('Video play failed:', e));
            }
        });

        item.addEventListener('mouseleave', function() {
            // Pause video when not hovering
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
}

// Utility Functions

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Enhanced scroll handling with throttling
window.addEventListener('scroll', throttle(function() {
    updateActiveNavLink();
    updateScrollIndicator();
}, 100));

function updateScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrolled > windowHeight * 0.3) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.7';
        }
    }
}

// Navbar background on scroll - changes when hero section is out of view
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.getElementById('home');
    
    function updateNavbarBackground() {
        if (!heroSection || !navbar) return;
        
        const heroRect = heroSection.getBoundingClientRect();
        const heroBottom = heroRect.bottom;
        
        // If the hero section is completely out of view (bottom edge is above viewport)
        if (heroBottom <= 0) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            // Hero section is still visible (even partially)
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
        }
    }
    
    window.addEventListener('scroll', updateNavbarBackground);
    updateNavbarBackground(); // Initial call
}

// Initialize navbar scroll effect
initNavbarScrollEffect();

// Preload critical videos
function preloadCriticalVideos() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.preload = 'auto';
    }
}

// Initialize critical video preloading
preloadCriticalVideos();

// Performance monitoring (optional)
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}

// Carousel functionality
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        // Move track
        const translateX = -currentSlide * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    
    // Auto-play (optional - uncomment if you want auto-play)
    // setInterval(nextSlide, 5000);
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide(); // Swipe left - go to next
            } else {
                prevSlide(); // Swipe right - go to previous
            }
        }
    }
}

// Image Modal functionality
function initImageModal() {
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeImageModal = document.querySelector('.close-image-modal');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    let currentModalIndex = 0;
    const images = Array.from(carouselImages);
    
    // Add click listeners to carousel images
    carouselImages.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            openImageModal(index);
        });
    });
    
    function openImageModal(index) {
        currentModalIndex = index;
        const img = images[index];
        const caption = img.closest('.carousel-slide').querySelector('.slide-caption');
        
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalCaption.textContent = caption ? caption.textContent : '';
        
        imageModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function showPrevImage() {
        currentModalIndex = (currentModalIndex - 1 + images.length) % images.length;
        openImageModal(currentModalIndex);
    }
    
    function showNextImage() {
        currentModalIndex = (currentModalIndex + 1) % images.length;
        openImageModal(currentModalIndex);
    }
    
    // Event listeners
    if (closeImageModal) {
        closeImageModal.addEventListener('click', closeModal);
    }
    
    if (modalPrev) {
        modalPrev.addEventListener('click', showPrevImage);
    }
    
    if (modalNext) {
        modalNext.addEventListener('click', showNextImage);
    }
    
    // Close modal when clicking outside the image
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (imageModal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPrevImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });
}

// Hero video background is now handled directly in HTML

// Skill Tag Navigation
function initSkillTagNavigation() {
    const skillTags = document.querySelectorAll('.skill-tag');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Scroll to work section
            const workSection = document.getElementById('work');
            if (workSection) {
                workSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Wait for scroll to complete, then apply filter
                setTimeout(() => {
                    // Remove active state from all filter buttons and skill tags
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    skillTags.forEach(skillTag => skillTag.classList.remove('active'));
                    
                    // Add active state to clicked skill tag
                    this.classList.add('active');
                    
                    // Find and activate corresponding filter button
                    const correspondingFilterBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
                    if (correspondingFilterBtn) {
                        correspondingFilterBtn.classList.add('active');
                        
                        // Trigger filter functionality
                        correspondingFilterBtn.click();
                    }
                }, 800); // Wait for scroll animation
            }
        });
    });
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functions if they exist
    if (typeof initMobileMenu === 'function') initMobileMenu();
    if (typeof initSmoothScrolling === 'function') initSmoothScrolling();
    if (typeof initVideoModal === 'function') initVideoModal();
    if (typeof initCarousel === 'function') initCarousel();
    if (typeof initImageModal === 'function') initImageModal();
    
    // Initialize new functionality
    initSkillTagNavigation();
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you create a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}
