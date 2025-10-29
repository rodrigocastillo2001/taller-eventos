const div = document.getElementById("contenedor");
const boton = document.querySelector("button");

// Evento del div
div.addEventListener("click", () => {
    alert("Hola! Soy el div");
});

// Evento del botón con stopPropagation
boton.addEventListener("click", (event) => {
    event.stopPropagation(); // evita que el clic del botón dispare el evento del div
    alert("Hola!");
});