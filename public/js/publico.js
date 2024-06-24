const socket = io();
let escritorios = []; // Array para almacenar nombres de escritorios

socket.on('connect', () => {
    console.log("Conexión establecida con el servidor");
});

socket.on("nameUsuario", (nombrenew) => {
    console.log('Nuevo nombre de escritorio recibido:', nombrenew);

    // Agregar el nombre recibido al array de escritorios
    escritorios.push(nombrenew);

    // Actualizar el DOM con los nombres y números de ticket
    actualizarEscritorios();
});

function actualizarEscritorios() {
    // Recorrer todos los escritorios y actualizar la interfaz
    escritorios.forEach((nombre, index) => {
        const lblEscritorio = document.getElementById(`lblEscritorio${index + 1}`);
        const ticket_publico = document.getElementById(`ticket_publico${index + 1}`);

        lblEscritorio.textContent = nombre;
        ticket_publico.textContent = index + 1; // Número de ticket basado en el índice + 1
    });
}