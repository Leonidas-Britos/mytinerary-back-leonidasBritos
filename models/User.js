import { model,Schema } from "mongoose";

//lo primero que necesitamos crear es el espacio virtual donde se van a guardar todos los documentos/modelos
//es decir LA COLECCIÓN (conjunto de documentos/modelos de datos)
let collection = 'users';

//Lo siguiente es definir el schema de datos del modelo
//es decir EL MOLDE / LA FORMA que tiene que tener mi modelo de datos
let userSchema = new Schema({
    name: { type:String,required:true }, //por default TODOS los datos son opcionales (required FALSE)
    lastname: { type:String },           //Si es opcional NO NECESITO agregar el required
    mail: { type:String,required:true,unique:true }, //unique: comprueba que el mail SEA UNICO (no hay mails duplicados)
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" }, //default vuelve al parametro OPCIONAL, en caso que el cliente mande la foto, la usa, sino: USA LA FOTO QUE LE PUSIMOS POR DEFECTO
    password: { type:String,required:true },
    country: { type:String,required:true },
},{
    timestamps: true    //agrega dos propiedades de tiempo (fecha de creación y fecha de ultima modificación)
});
//Para crear un modelo de datos utilizo el método model
//Pasando como parametro DONDE tengo que crear los documentos y con que FORMA
let User = model(collection,userSchema);
export default User;