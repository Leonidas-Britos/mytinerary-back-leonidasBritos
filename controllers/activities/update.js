import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let updateActivity = await Activity.findByIdAndUpdate(
      req.params.a_id,
      req.body,
      {
        new: true,
      }
    );
    if (updateActivity) {
      return res.status(200).json({
        success: true,
        message: "Activity updated",
        response: updateActivity,
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
