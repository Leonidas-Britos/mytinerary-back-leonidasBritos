import { model,Schema,Types } from "mongoose";

let collection = 'itineraries';
let schema = new Schema({
    name: { type:String,required:true} ,
    price: { type:Number,required:true },
    duration: { type:String,required:true },
    tags: { type:[String] },
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },
    city_id: { type: Types.ObjectId,required:true,ref:'cities'}
});

let Itinerary = model(collection,schema);
export default Itinerary;