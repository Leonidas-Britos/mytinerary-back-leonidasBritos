//Imports
import 'dotenv/config.js';                       //Importo UNICAMENTE la configuración de las variables de entorno
import __dirname from './utils.js';                 //Importo la configuracion de la ubicación del servidor (antes con commonjs), venia preconfigurada
import createError from 'http-errors';          //Crea errores
import express  from 'express';               //Provee metodos y propiedades para levantar servidores
import path from 'path';                      //Para conocer la ubicación de nuestro servidor
import logger from 'morgan';                  //Para registrar cada una de las peticiones
import indexRouter from './routes/index.js'     //Solo vamos a configurar las rutas del entrutador de back princpial
                                               //Este enrutador va a llamar a TODOS los otros recursos(cities, itinerary,etc).

let app = express();                           //Ejecutando el modulo de express: Creo una app de backend (servidor)

// view engine setup
//SET es el metodo necesario para SETear (configurar) algo (motor de planillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
//Use es el metodo necesario para obligar a mi apllicacion a que use la función CADA VEZ quese realiza una SOLICITUD.
app.use(logger('dev'));                                 //Obligo al servidor a registrar una petición con el modulo logger/morgan
app.use(express.json());                                //Obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));       //Obligo al servidor a leer params/queries
app.use(express.static(path.join(__dirname, 'public')));//Obligo al servidor a acceder a los archivos estaticos de carpeta public

//ROUTER
app.use('/api', indexRouter);                           //Obligo al servidor a que use las rutas del enrutador principal con "/api"

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
