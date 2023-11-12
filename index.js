const http = require('node:http');
const app = require('./src/app');
const { error } = require('node:console');

//config .env
require('dotenv').config();

//config bd
require('./src/config/db');

//server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

server.on('listening', ()  => {console.log(`Servidor escuchando en el puerto ${PORT}`)});
server.on('error', () => console.log(error));