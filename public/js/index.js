const socket = io();

socket.on('connect', () => {
    console.log("Conexión establecida con el servidor");
})


    btnes.addEventListener('click', () => {
        socket.emit("agregarEscritorio");
    });