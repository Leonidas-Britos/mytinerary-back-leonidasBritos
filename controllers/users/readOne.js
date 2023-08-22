import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let oneUser = await User.findOne({ _id: req.params.user_id }).select(
      "mail photo -_id"
    ); //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, el -_id es para que no traiga el idetc)
    //let oneUserId = await User.findById(req.params.user_id)           //busca solo por id
    if (oneUser) {
      return res.status(200).json({
        success: true,
        message: "User found",
        response: oneUser,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Not found user",
        response: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
