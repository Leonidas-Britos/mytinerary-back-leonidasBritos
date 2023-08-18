import User from "../../models/User.js";

export default async (req, res) => {
    //req: objeto con todos los requerimientos que envía el cliente.
    //res: objeto de respuesta a devolver al cliente
    try {
        let allUsers = await User.find()
        //find BUSCA todos (en este caso usuarios)
        return res.status(200).json({
            suces: true,
            message: "users found",
            response: allUsers
        })
    } catch (error) {
        return res.status(400).json({
            sucees: false,
            message: 'not found',
            response: null
        })
    }
}