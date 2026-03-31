// Custom Cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

if (window.innerWidth > 768) {
    window.addEventListener("mousemove", function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Mobile Navigation Toggle
const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close mobile nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });
}

navSlide();

// Scroll Reveals via Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Typewriter Effect for Roles
const roles = ["Developer", "Designer", "Creator", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const roleSpeed = 100; // ms per char typing
const eraseSpeed = 60; // ms per char deleting
const roleDelay = 2000; // ms before deleting
const roleElement = document.querySelector('.role');

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, roleSpeed);
    } else {
        setTimeout(eraseRole, roleDelay);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, eraseSpeed);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        setTimeout(typeRole, roleSpeed);
    }
}

// Start typing effect when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    roleElement.textContent = "";
    setTimeout(typeRole, 1000);
});

// Interactive Blob on Mouse Move
const blob = document.querySelector('.blob');

document.addEventListener('mousemove', (e) => {
    if (blob && window.innerWidth > 768) {
        // Calculate offset from center for subtler movement
        const x = (e.clientX - window.innerWidth / 2) / 20;
        const y = (e.clientY - window.innerHeight / 2) / 20;
        
        blob.style.transform = `translate(${x}px, ${y}px)`;
    }
});
