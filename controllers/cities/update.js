import City from "../../models/City.js";

export default async (req, res) => {
  try {
    let updateCity = await City.findByIdAndUpdate(
        req.params.c_id,
        req.body, 
        { new: true})
    return res.status(200).json({
      success: true,
      message: 'City Updated',
      response: updateCity
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Not updated',
      response: null
    });
  }
};
