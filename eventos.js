// Obtener los elementos del DOM
var contenedor = document.querySelector('.contenedor');
var boton = document.querySelector('.boton');

// Definir el manejador de eventos para el div
contenedor.addEventListener('click', function() {
    alert('¡Hola! Soy el div');
});

// Definir el manejador de eventos para el botón
boton.addEventListener('click', function(event) {
    event.stopPropagation(); // Detiene la propagación del evento al contenedor
    alert('¡Hola!');
});
