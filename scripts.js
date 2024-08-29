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
