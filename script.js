// script.js

// Función para manejar el evento de pasar el ratón sobre una imagen
function handleMouseOver(event) {
    event.currentTarget.style.borderColor = 'red'; // Cambia el color del borde a rojo
}

// Función para manejar el evento de quitar el ratón de una imagen
function handleMouseOut(event) {
    event.currentTarget.style.borderColor = 'transparent'; // Restaura el borde a transparente
}

// Función para manejar la selección con el teclado
function handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        alert('Imagen seleccionada: ' + event.currentTarget.querySelector('figcaption').textContent);
    }
}

// Función para inicializar la galería
function initializeGallery() {
    const figures = document.querySelectorAll('.gallery figure');
    figures.forEach(figure => {
        figure.addEventListener('mouseover', handleMouseOver);
        figure.addEventListener('mouseout', handleMouseOut);
        figure.addEventListener('keydown', handleKeyPress);
    });
}

