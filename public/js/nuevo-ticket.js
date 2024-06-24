const socket = io();
console.log("Conexión establecida con el servidor");
let aumentarTicket = 0;

socket.on('connect', () => {
    console.log("Navegador conectado");
    // lblConectado.value = "Conectado"
});

btnNuevoTicket.addEventListener('click', () => {
    console.log("Botón clickeado");

    socket.emit("aumentar", NumeroTicket.textContent, (nuevoTicket) => {
        console.log("Nuevo ticket:", nuevoTicket);
        NumeroTicket.textContent = nuevoTicket;
    });
})
