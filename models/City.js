import { model, Schema, Types } from "mongoose";

let collection = "cities";
let schema = new Schema({
  country: { type: String, required: true },
  fundation: { type: Date, required: true },
  population: { type: Number, required: true },
  photo: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, default: "edit later" },
  smalldescription: { type: String, default: "edit later" },
  featuredLocation: { type: String, default: "edit later" },
  admin_id: { type: Types.ObjectId, required: true, ref: "users" },
  //para relacionar datos en mongo, es necesario REFERENCIAR EL DATO HACIA LA COLECCION QUE NECESITO RELACIONARME
}, { timestamps: true });//para que agregue fecha de creacion del archivo
//estoy parado en el modelo City de la colección cities
//y necesito relacionar la propiedad admin_id con la coleccion users
//esto lo logro REFERENCIANDO CON LA PROPIEDAD re:'nombreDeLaColeccionReferenciarse'

let City = model(collection, schema);
export default City;
