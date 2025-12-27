/********************** GENERAL **********************/

// Funzione per aggiornare l'opacità in base allo scroll
function updateOpacity() {
    const images = document.querySelectorAll('.bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4');

    // Calcola l'opacità in base alla posizione di scroll per ogni immagine
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const imageTop = rect.top + window.scrollY;
        const imageBottom = imageTop + image.offsetHeight;
        const opacity = Math.min(1, Math.max(0, (imageBottom - window.scrollY) / window.innerHeight));
        image.style.opacity = opacity;
    });
}

// Aggiungi un evento listener per lo scroll
window.addEventListener('scroll', updateOpacity);

// Create particle effect
const particlesContainer = document.getElementById('particles-container');
const particleCount = 20;

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Set random bit content
    particle.textContent = Math.random() < 0.5 ? '0' : '1';

    // Initial position
    resetParticle(particle);

    particlesContainer.appendChild(particle);

    // Animate
    animateParticle(particle);
}

function resetParticle(particle) {
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';

    return {
        x: posX,
        y: posY
    };
}

function animateParticle(particle) {
    // Initial position
    const pos = resetParticle(particle);

    // Random animation properties
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    // Animate with GSAP-like timing
    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;

        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards

        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        // Reset after animation completes
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}

// Mouse interaction
document.addEventListener('mousemove', (e) => {
    // Create particles at mouse position
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;

    // Create temporary particle
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Small size
    particle.textContent = Math.random() < 0.5 ? '0' : '1';
    particle.style.fontSize = `${Math.random() * 4 + 10}px`;

    // Position at mouse
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.6';

    particlesContainer.appendChild(particle);

    // Animate outward
    setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';

        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }, 10);

    // Subtle movement of gradient spheres
    const spheres = document.querySelectorAll('.gradient-sphere');
    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

    spheres.forEach(sphere => {
        const currentTransform = getComputedStyle(sphere).transform;
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

/********************** MENU SECTION **********************/

// Apply dark mode by default
document.body.classList.add("dark-mode");

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var icon = document.querySelector('.fa-moon-o, .fa-sun-o');
    if (element.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun-o');
        icon.classList.add('fa-moon-o');
    } else {
        icon.classList.remove('fa-moon-o');
        icon.classList.add('fa-sun-o');
    }
}

function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.body.classList.add("no-scroll"); // Blocca lo scroll
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none"; // Nasconde il menu
    document.body.classList.remove("no-scroll"); // Riabilita lo scroll
}

/******************** HOME SECTION ********************/

/* PROMPT SIMULATOR */
// Typing effect
const text = "Hey! 👋 Scroll down to learn more about me… 🚀";
let i = 0;
function type() {
    if (i < text.length) {
        document.getElementById("typedText").innerHTML = text.substring(0, i + 1) + '<span class="cursor">▋</span>';
        i++;
        setTimeout(type, 50);
    }
}
window.onload = () => setTimeout(type, 1000);

/********************** EDUCATION SECTION **********************/

function toggleDescription(descriptionId, arrowIconId) {
    var x = document.getElementById(descriptionId);
    var arrow = document.getElementById(arrowIconId);
    if (x.style.display === "none") {
        x.style.display = "block";
        arrow.classList.remove("fa-chevron-down");
        arrow.classList.add("fa-chevron-up");
    } else {
        x.style.display = "none";
        arrow.classList.remove("fa-chevron-up");
        arrow.classList.add("fa-chevron-down");
    }
}

function toggleAllDescriptions() {
    var descriptions = document.querySelectorAll('[id^="description"]');
    var arrows = document.querySelectorAll('[id^="arrow-icon"]');
    var button = document.getElementById("toggle-all-button");
    if (button.innerHTML === "Show all details") {
        descriptions.forEach(function (description) {
            description.style.display = "block";
        });
        arrows.forEach(function (arrow) {
            arrow.classList.remove("fa-chevron-down");
            arrow.classList.add("fa-chevron-up");
        });
        button.innerHTML = "Collapse all";
    } else {
        descriptions.forEach(function (description) {
            description.style.display = "none";
        });
        arrows.forEach(function (arrow) {
            arrow.classList.remove("fa-chevron-up");
            arrow.classList.add("fa-chevron-down");
        });
        button.innerHTML = "Show all details";
    }
}
