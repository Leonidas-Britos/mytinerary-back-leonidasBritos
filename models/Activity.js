import { model, Schema, Types } from "mongoose";

let collection = "activities";
let schema = new Schema({
  name: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
  },
  itinerary_id: { type: Types.ObjectId, required: true, ref: "itineraries" },
});

let Activity = model(collection, schema);
export default Activity;
