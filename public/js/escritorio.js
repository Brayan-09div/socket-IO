console.log('Escritorio HTML');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Obtener el valor del parámetro "escritorio"
const nombre = urlParams.get('escritorio');
console.log(nombre);
document.getElementById('Usuario').textContent = nombre; // Asignar valor a un elemento por su ID

const socket = io();

socket.on('connect', () => {
    console.log("Conexión establecida con el servidor");
});

socket.emit("escritorio", nombre); // Enviar el nombre del escritorio al servidor

// Manejar evento de incremento de ticket recibido desde el servidor
socket.on("ticketIncrementado", (ticketCounter) => {
    console.log(`Ticket incrementado a: ${ticketCounter}`);
    document.getElementById('lblPendientes').textContent = ticketCounter;
    // Habilitar el botón atenderTicket si hay tickets pendientes
    if (ticketCounter > 0) {
        document.getElementById('atenderTicket').disabled = false;
    }
});

// Manejar evento de disminución de ticket recibido desde el servidor
socket.on("TicketDisminuye", (ticketCounter) => {
    console.log(`Tickets atendidos: ${ticketCounter}`);
    document.getElementById('lblPendientes').textContent = ticketCounter;
    // Deshabilitar el botón atenderTicket si no hay más tickets pendientes
    if (ticketCounter === 0) {
        document.getElementById('atenderTicket').disabled = true;
    }
});

// Manejar clic en el botón "atenderTicket"
document.getElementById('atenderTicket').addEventListener('click', () => {
    console.log("Botón clickeado");

    // Verificar si hay tickets pendientes antes de emitir el evento al servidor
    if (parseInt(document.getElementById('lblPendientes').textContent) > 0) {
        // Emitir evento al servidor para atender un ticket
        socket.emit("Atender", (disminuir) => {
            document.getElementById('lblPendientes').textContent = disminuir;
        });

        // Emitir evento al servidor para actualizar cantidad de tickets atendidos
        socket.emit("Atendidos", atender.textContent, (cantidadAtendido) => {
            console.log(`Atendidos: ${cantidadAtendido}`);
            document.getElementById('atender').textContent = cantidadAtendido;
        });
    } else {
        // Si no hay tickets pendientes, no hacer nada o mostrar un mensaje al usuario
        console.log("No hay más tickets pendientes para atender.");
    }
});