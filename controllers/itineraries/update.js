import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
  try {
    let { i_id } = req.params
    let data = req.body

    let updateItinerary = await Itinerary.findByIdAndUpdate(
     { _id:i_id },
     data,
     { new: true }
    );
    if (updateItinerary) {
      return res.status(200).json({
        success: true,
        message: "Itinerary updated",
        response: updateItinerary._id
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
