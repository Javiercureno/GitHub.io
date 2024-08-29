// Aquí puedes añadir funciones JavaScript si es necesario
// Por ejemplo, para manejar eventos de click en los enlaces
document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo de función para abrir LinkedIn en una nueva pestaña
    const linkedinLink = document.querySelector('a[href="#LinkedIn"]');
    linkedinLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://www.linkedin.com/tu-perfil", "_blank");
    });

    // Puedes añadir más funciones para otros enlaces aquí
});
