import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let allItineraries = await Itinerary.find();
    if (allItineraries.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Itineraries found",
        response: allItineraries,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not found",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
