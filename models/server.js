import  express from 'express'
import cors from 'cors'
import http from 'http'
import * as io from "socket.io"
// import {connect} from 'mongoose';
//const { socketController } = require('../sockets/controller');
import { socketController } from '../sockets/controller.js';
// const mongoose = require('mongoose');
// import {mongoose} from 'mongoose'

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = http.createServer( this.app );
        this.io     = new io.Server( this.server );//io toda la info de los sockets conectados.
        this.paths = {};


        //  this.ConexiónBaseDt()
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
        // Sockets
        this.sockets();
    }


    // async  ConexiónBaseDt(){
    //     try {
    //         await mongoose.connect('mongodb://localhost/tickets');
    //         console.log('Base de datos conectada');
    //     } catch (error) {
    //         console.error('Error al conectar a la base de datos', error);
    //         process.exit(1); 
    //     }
    // }
    
    middlewares() {

        // CORS
        this.app.use( cors() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        
        // this.app.use( this.paths.auth, require('../routes/auth'));
        
    }

    sockets() {

        this.io.on('connection', socketController );

    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




export {Server};