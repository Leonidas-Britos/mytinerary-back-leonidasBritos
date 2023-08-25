import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    let one = await City.findOne({ _id: req.params.city_id }).select(
      "country city -_id"
    );
    if (one) {
      return res.status(200).json({
        success: true,
        message: "City found",
        response: one
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not found city",
        response: null
      });
    }
  } catch (error) {
    next(error);
  }
};
