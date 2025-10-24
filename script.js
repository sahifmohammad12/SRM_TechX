// Course Management System
let courses = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadCourses();
    renderCourses();
    initializeEventListeners();
    checkFormSuccess();
});

// Check for form success parameter
function checkFormSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showNotification('Welcome to the SRM TechX Community! You\'ll receive a confirmation email shortly.', 'success');
        // Remove the success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Load courses from localStorage
function loadCourses() {
    // Clear old data and force reload with new course data
    localStorage.removeItem('srmTechXCourses');
    
    const savedCourses = localStorage.getItem('srmTechXCourses');
    if (savedCourses) {
        courses = JSON.parse(savedCourses);
    } else {
        // Default courses
        courses = [
            {
                id: 1,
                name: 'Tech HTML',
                description: 'Master the fundamentals of HTML5.',
                startDate: '2025-09-30',
                duration: 3,
                level: 'Beginner',
                status: 'completed',
                price: 0,
                icon: 'fas fa-code',
                registerLink: '#'
            },
            {
                id: 2,
                name: 'Programming with C',
                description: 'Learn the fundamentals of C programming language. Master variables, functions, arrays and pointers. Course runs until students understand the topic.',
                startDate: '2025-11-05',
                duration: 0,
                level: 'Beginner',
                status: 'starting-soon',
                price: 100,
                icon: 'fas fa-terminal',
                registerLink: 'https://forms.gle/6X8Z77YwKmVVE1VRA'
            },
            {
                id: 3,
                name: 'Python Basics and Beyond',
                description: 'Learn the basics of Python — one of the most powerful and beginner-friendly programming languages. This course covers core concepts like variables, loops, functions, and object-oriented programming through hands-on projects, helping you build real-world coding skills and confidence.',
                startDate: '2025-11-07',
                duration: 0,
                level: 'Beginner',
                status: 'starting-soon',
                price: 100,
                icon: 'fas fa-terminal',
                registerLink: 'https://forms.gle/zMUg1FhmkHEVHVcC8'
            }
        ];
        saveCourses();
    }
}

// Save courses to localStorage
function saveCourses() {
    localStorage.setItem('srmTechXCourses', JSON.stringify(courses));
}


// Render courses on the page
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    coursesGrid.innerHTML = '';

    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

// Create course card HTML
function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = `course-card ${course.status}-course`;
    card.innerHTML = `
        <div class="course-image">
            <i class="${course.icon}"></i>
        </div>
        <div class="course-content">
            <div class="course-header">
                <h3>${course.name}</h3>
                <span class="status-tag ${course.status}">${getStatusText(course.status)}</span>
            </div>
            <p>${course.description}</p>
            <div class="course-meta">
                <span class="duration"><i class="fas fa-clock"></i> ${course.duration === 0 ? 'Until students understand' : course.duration + ' weeks'}</span>
                <span class="level"><i class="fas fa-signal"></i> ${course.level}</span>
                <span class="course-date"><i class="fas fa-calendar"></i> ${formatDate(course.startDate)}</span>
                <span class="course-price"><i class="fas fa-rupee-sign"></i> ${course.price === 0 ? 'Free' : '₹' + course.price.toLocaleString()}</span>
            </div>
            ${getCourseButton(course)}
        </div>
    `;
    return card;
}

// Get status text
function getStatusText(status) {
    switch(status) {
        case 'completed': return 'Completed';
        case 'started': return 'Started';
        case 'starting-soon': return 'Starting Soon';
        default: return 'Unknown';
    }
}

// Get course button based on status
function getCourseButton(course) {
    switch(course.status) {
        case 'completed':
            return `<button class="btn btn-completed" disabled>
                <i class="fas fa-check-circle"></i> Course Completed
            </button>`;
        case 'started':
            return `<a href="${course.registerLink || '#'}" target="_blank" class="btn btn-primary">
                <i class="fas fa-play-circle"></i> Join Course
            </a>`;
        case 'starting-soon':
            return `<a href="${course.registerLink || '#'}" target="_blank" class="btn btn-primary">
                <i class="fas fa-user-plus"></i> Register Now
            </a>`;
        default:
            return `<button class="btn btn-outline">Learn More</button>`;
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Initialize event listeners
function initializeEventListeners() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Close modal on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                const modal = overlay.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                }
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Course card hover effects
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.course-card')) {
            const card = e.target.closest('.course-card');
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.course-card')) {
            const card = e.target.closest('.course-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Community form
    const communityForm = document.getElementById('communityForm');
    if (communityForm) {
        communityForm.addEventListener('submit', handleCommunityForm);
        setupOtherOptionHandlers();
    }
}


// Registration link functionality (no longer needed as we use direct links)

// Handle contact form
function handleContactForm(e) {
    // Let Formspree handle the submission
    // We'll just show a loading state and success message
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Show success message after a short delay (Formspree will handle the actual submission)
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Handle community form
function handleCommunityForm(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Basic validation
    const requiredFields = e.target.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#f44336';
            isValid = false;
        } else {
            field.style.borderColor = '#e9ecef';
        }
    });
    
    if (!isValid) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Joining Community...';
    submitBtn.disabled = true;
    
    // Create FormData for submission
    const formData = new FormData(e.target);
    const firstName = formData.get('firstName');
    
    // Submit to Formspree
    fetch(e.target.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success modal with WhatsApp option
            showCommunitySuccessModal(firstName);
            e.target.reset();
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Still show success modal even if Formspree fails
        showCommunitySuccessModal(firstName);
        e.target.reset();
    })
    .finally(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}


// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Button click animations
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        e.target.style.position = 'relative';
        e.target.style.overflow = 'hidden';
        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    }
    
    .course-card {
        transition: all 0.3s ease;
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.course-card, .feature, .stat, .contact-item, .feature-card, .stat-item');
    animatedElements.forEach(el => observer.observe(el));
});

// Typing animation for home title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const homeTitle = document.querySelector('.home-title');
    if (homeTitle) {
        const originalText = homeTitle.innerHTML;
        setTimeout(() => {
            typeWriter(homeTitle, originalText, 50);
        }, 1000);
    }
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    updateCounter();
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const target = parseInt(statNumber.textContent.replace(/[^\d]/g, ''));
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Community section interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add form field focus effects
    const formInputs = document.querySelectorAll('.community-form input, .community-form select, .community-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'translateY(-2px)';
        });
        
        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Add checkbox animation
    const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkmark = checkbox.nextElementSibling;
            if (checkbox.checked) {
                checkmark.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    checkmark.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
});

// Show community success modal with WhatsApp option
function showCommunitySuccessModal(firstName) {
    // Create modal HTML
    const modalHTML = `
        <div id="communitySuccessModal" class="modal active">
            <div class="modal-overlay">
                <div class="modal-content success-modal">
                    <div class="modal-header success-header">
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Welcome to SRM TechX Community!</h3>
                        <p class="success-subtitle">Hi ${firstName}, you're now part of our amazing community!</p>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body success-body">
                        <div class="success-content">
                            <div class="success-message">
                                <h4>What's Next?</h4>
                                <p>Join our WhatsApp community to connect with fellow members, get updates, and participate in discussions!</p>
                            </div>
                            <div class="whatsapp-section">
                                <div class="whatsapp-icon">
                                    <i class="fab fa-whatsapp"></i>
                                </div>
                                <div class="whatsapp-content">
                                    <h4>Join Our WhatsApp Community</h4>
                                    <p>Connect with 500+ members, get instant updates, and participate in discussions</p>
                                    <a href="https://chat.whatsapp.com/JVxhY0XGobU3vNpK4Uo63w" target="_blank" class="btn btn-whatsapp">
                                        <i class="fab fa-whatsapp"></i> Join WhatsApp Group
                                    </a>
                                </div>
                            </div>
                            <div class="success-features">
                                <div class="feature-item">
                                    <i class="fas fa-users"></i>
                                    <span>Connect with peers</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-bell"></i>
                                    <span>Get instant updates</span>
                                </div>
                                <div class="feature-item">
                                    <i class="fas fa-comments"></i>
                                    <span>Participate in discussions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listeners
    const modal = document.getElementById('communitySuccessModal');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => {
        modal.remove();
    });
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.remove();
        }
    });
    
    // Auto close after 30 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 30000);
}

// Setup "Other" option handlers for dropdowns
function setupOtherOptionHandlers() {
    // Year dropdown
    const yearSelect = document.getElementById('yearSelect');
    const yearOther = document.getElementById('yearOther');
    if (yearSelect && yearOther) {
        yearSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                yearOther.style.display = 'block';
                yearOther.required = true;
            } else {
                yearOther.style.display = 'none';
                yearOther.required = false;
                yearOther.value = '';
            }
        });
    }
    
    // Department dropdown
    const departmentSelect = document.getElementById('departmentSelect');
    const departmentOther = document.getElementById('departmentOther');
    if (departmentSelect && departmentOther) {
        departmentSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                departmentOther.style.display = 'block';
                departmentOther.required = true;
            } else {
                departmentOther.style.display = 'none';
                departmentOther.required = false;
                departmentOther.value = '';
            }
        });
    }
    
    // Interests dropdown
    const interestsSelect = document.getElementById('interestsSelect');
    const interestsOther = document.getElementById('interestsOther');
    if (interestsSelect && interestsOther) {
        interestsSelect.addEventListener('change', function() {
            if (this.value === 'Other') {
                interestsOther.style.display = 'block';
                interestsOther.required = true;
            } else {
                interestsOther.style.display = 'none';
                interestsOther.required = false;
                interestsOther.value = '';
            }
        });
    }
}


// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);