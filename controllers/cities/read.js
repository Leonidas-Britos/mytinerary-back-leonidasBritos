import City from "../../models/City.js";

export default async (req,res,next) => {
    try {
        let allCities = await City.find()
        if (allCities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Cities found',
                response: allCities
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Not found',
                response: null
            })
        }
    } catch (error) {
        next(error);
        }
    }
