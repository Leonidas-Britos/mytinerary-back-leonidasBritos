import City from "../../models/City.js";

export default async (req, res) => {
    try {
        let allCities = await City.find()
        return res.status(200).json({ 
            sucess: true,
            message: "Cities Found",
            response: allCities
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Not Found',
            response: null
        })
    }
}