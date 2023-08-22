import express from "express";
import create from "../controllers/itineraries/create.js";
import read from "../controllers/itineraries/read.js";
import readOne from "../controllers/itineraries/readOne.js";
import destroy from "../controllers/itineraries/destroy.js";
import update from "../controllers/itineraries/update.js";

let router = express.Router();

////CREATE
router.post('/', create);

////READ
router.get('/', read);
router.get('/:itinerary_id', readOne);

////UPDATE
router.put('/:i_id', update);

////DESTROY
router.delete('/:id', destroy);

export default router;