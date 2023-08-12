import express from 'express';
//El enrutador principal va a llamar a TODOS los recuross y los va a enrutar
import userRouter from "./users.js";
let router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
//obligo al enrutador principal a usar las rutas del enrutador del recurso user
router.use('/users',userRouter)

export default router;
