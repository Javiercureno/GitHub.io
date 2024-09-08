// Autor: Javier Cúreno
// Fecha: 2024/08/28
// Descripción: Este archivo contiene el código JavaScript que se ejecutará en el navegador del usuario.

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el enlace de LinkedIn
    const linkedinLink = document.getElementById('linkLinkedIn');
    // Añadir el evento click al enlace de LinkedIn
    linkedinLink.addEventListener('click', function() {
        // Abrir la página de LinkedIn en una nueva pestaña
        window.open('https://www.linkedin.com/in/javiercureno/', '_blank');
    });

    // Seleccionar el enlace de GitHub
    const githubLink = document.getElementById('linkGitHub');
    // Añadir el evento click al enlace de GitHub
    githubLink.addEventListener('click', function() {
        // Abrir la página de GitHub en una nueva pestaña
        window.open('https://github.com/Javiercureno/', '_blank');
    });

    // Seleccionar el enlace de Twitter
    const twitterLink = document.getElementById('linkTwitter');
    // Añadir el evento click al enlace de Twitter
    twitterLink.addEventListener('click', function() {
        // Abrir la página de Twitter en una nueva pestaña
        window.open('https://x.com/javiercurenomx', '_blank');
    });

    // seleccionar el enlace de Pluralsight
    const pluralsightLink = document.getElementById('linkPluralsight');
    // Añadir el evento click al enlace de Pluralsight
    pluralsightLink.addEventListener('click', function() {
        // Abrir la página de Pluralsight en una nueva pestaña
        window.open('https://app.pluralsight.com/profile/javier-cureno', '_blank');

    });

    // seleccionar el enlace de citas
    const quotesLink = document.getElementById('linkcita');
    // Añadir el evento click al enlace de citas
    quotesLink.addEventListener('click', function() {
        // Abrir la página de citas en una nueva pestaña
        window.open('https://outlook.office.com/bookwithme/user/2229e653b4c04fb4a90ecf2f25ed8e5a@microsoft.com/meetingtype/3YWph360dkmx98g99y3ChQ2?anonymous&ep=mlink', '_blank');

    });});
    
    document.addEventListener("DOMContentLoaded", function() {
        // Mostrar la sección "Enlaces"
const enlacesLink = document.querySelector('a[href="#enlaces"]');
const enlacesSection = document.querySelector('#enlaces');
if (enlacesLink && enlacesSection) {
    enlacesLink.addEventListener("click", function(event) {
        event.preventDefault();
        enlacesSection.scrollIntoView({ behavior: 'smooth' });
    });
} else {
    console.error('El enlace o la sección "Enlaces" no se encontró en el HTML.');
}

           
        // Mostrar la sección "About Me"
        const aboutLink = document.querySelector('a[href="#about"]');
        const aboutSection = document.querySelector('#about');
        if (aboutLink && aboutSection) {
            aboutLink.addEventListener("click", function(event) {
                event.preventDefault();
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            });
        } else {
            console.error('El enlace o la sección "About Me" no se encontró en el HTML.');
        }
    });

    //mostrar la seccion fotos
    const fotosLink = document.querySelector('a[href="#fotos"]');
    const fotosSection = document.querySelector('#fotos');
    if (fotosLink && fotosSection) {
        fotosLink.addEventListener("click", function(event) {
            event.preventDefault();
            fotosSection.scrollIntoView({ behavior: 'smooth' });
        });
    } else {
        console.error('El enlace o la sección "fotos" no se encontró en el HTML.');
    }

    let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-inner .foto-img');
    const totalSlides = slides.length;

    // Eliminar la clase de animación de la diapositiva actual
    slides[currentSlide].classList.remove('zoom-in');

    // Calcular la nueva diapositiva actual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;

    // Aplicar la transformación para mover el carrusel
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    // Añadir la clase de animación a la nueva diapositiva actual
    slides[currentSlide].classList.add('zoom-in');
}

// Inicializar el carrusel cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initCarousel);

