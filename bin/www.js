//IMPORTS

import app from '../app.js';     //Configuracion del servidor
import debug from 'debug';    //Modulo de debugueo
import http from 'http';      //Modulo para crear servidores HTTP


//PORT 
//process.env guarda las configuraciones de las variables de entorno
//variables muy delicadas que son necesarias proteger
//se configura con un modulo que se llama DOTENV
let port = normalizePort(process.env.PORT || '3000'); //Sino configuro puerto en variables de entorno, va a tomar el 3000 por defecto
app.set('port', port);

//START SERVING
let server = http.createServer(app); //Creo un servidor normalizado con HTTP
let ready = ()=> console.log('Server ready on porty '+ port);
server.listen(port,ready);                 //Con el método listen, ESCUCHO el puerto para que empiece a funcionar (a levantarse)

server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
