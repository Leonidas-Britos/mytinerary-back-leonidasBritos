import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let updateItinerary = await Itinerary.findByIdAndUpdate(
      req.params.i_id,
      req.body,
      {
        new: true,
      }
    );
    if (updateItinerary) {
      return res.status(200).json({
        success: true,
        message: "Itinerary updated",
        response: updateItinerary,
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
