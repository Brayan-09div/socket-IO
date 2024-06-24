let ticketCounter = 0;
let cantidadAtendido = 0;

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);
    console.log('Cliente conectado');


    socket.on('aumentar', (Ticket, callback) => {
        ticketCounter++;
        console.log(`Ticket incrementado a: ${ticketCounter}`);
        callback(ticketCounter);
        socket.broadcast.emit('ticketIncrementado', ticketCounter);
       

    });

  
    // socket.on("Atender", (CantidadTicket, callback)=>{
    //     if (disminuir.length > 0) {
    //     let ticketdiminuir= disminuir.shift();
    //     console.log(`Tickets Atendidos: ${ ticketdiminuir}`)
    //     callback( ticketdiminuir)
    //     socket.broadcast.emit("TicketDisminuye",  ticketdiminuir ,)
    //     }
    // })

    socket.on("Atender", (callback) => {
      if (ticketCounter > 0) {
         ticketCounter = ticketCounter - 1;
          console.log(`Ticket atendido: ${ticketCounter}`);
          callback(ticketCounter); // Llama a la función de devolución de llamada con el ticket atendido
          socket.broadcast.emit("TicketDisminuye", ticketCounter); // Emite un evento para actualizar otros clientes
      } else {
          console.log("No hay más tickets por atender.", ticketCounter);
      }
  });
  
  
  socket.on("Atendidos", (cantidadAtendidos, callback) => {
    cantidadAtendido++;
    console.log(`Cantidad de tickets atendidos: ${cantidadAtendido}`);
    callback(`${cantidadAtendido}`);
});

    socket.on("escritorio",(nombre)=>{
  console.log(`Nombre del escritorio recibido desde el cliente: ${nombre}`);
//   callback(nombre);
  socket.broadcast.emit("nameUsuario", nombre)
    })   
}



export {socketController}





// Para la parte publica. Que son pantallas


