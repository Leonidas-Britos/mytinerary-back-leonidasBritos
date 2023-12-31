import express from 'express';
//el enrutador principal va a llamar a TODOS los recursos y los va a enrutar
import userRouter from './users.js'
import citiesRouter from './cities.js'
import activitiesRouter from './activities.js'
import itinerariesRouter from './itineraries.js'
import authRouter from './auth.js';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

//obligo al enrutador principal a usar las rutas del enrutador del recurso user
router.use('/users',userRouter);
router.use('/cities',citiesRouter);
router.use('/activities',activitiesRouter);
router.use('/itineraries',itinerariesRouter);
router.use('/auth',authRouter);
//router.use acepta COMO MINIMO DOS PARAMETROS para poder enrutar correctamente.
//1-La palabra con la que se va a enrutar.
//2-El enrutador que tengo que conectar.

export default router;
