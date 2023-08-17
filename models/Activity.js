import { model,Schema,Types } from "mongoose";

let collection = 'activities';
let schema = new schema({
    name: { type:String,required:true} ,
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },
    

});

let Activity = model(collection,schema);
export default Activity;