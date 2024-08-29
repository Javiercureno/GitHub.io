// eventos de click en los enlaces
document.addEventListener("DOMContentLoaded", function() {
    // función para abrir LinkedIn en una nueva pestaña
    const linkedinLink = document.querySelector('a[href="#LinkedIn"]');
    linkedinLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://www.linkedin.com/in/javiercureno/", "_blank");
    });

    // Todo añadir más funciones para otros enlaces aquí
});
