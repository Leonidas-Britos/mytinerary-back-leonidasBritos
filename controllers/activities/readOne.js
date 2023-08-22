import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
  try {
    let oneActivity = await Activity.findOne({ _id: req.params.activity_id });
    if (oneActivity) {
      return res.status(200).json({
        success: true,
        message: "Activity found",
        response: oneActivity,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not found activity",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
