import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let oneItinerary = await Itinerary.findOne({
      _id: req.params.itinerary_id,
    });
    if (oneItinerary) {
      return res.status(200).json({
        success: true,
        message: "Itinerary found",
        response: oneItinerary,
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
