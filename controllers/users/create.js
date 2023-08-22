import User from "../../models/User.js";

//req es el objeto donde el cliente me manda MUCHOS DATOS importantes acerca de la petición
//las propiedades de req MÁS IMPORTANTES SON:
//BODY: Objeto que generalmente se envía a través de formularios
//PARAMS (parametros): Suelen ser estáticos como el id de una ciudad a buscar por ejemplo
//QUERIES (consultas): Son opcional y nos indican algunas consultas-7filtros/modos de ver la info de paginas, etc.
export default async (req, res) => {
    try {
      let newUser = await User.create(req.body)
      return res.status(201).json({
        succes: true,
        message: "User created",
        response: newUser._id
      })
    } catch (error) {
      return res.status(400).json({
        succes: false,
        message: "Not created",
        response: null
      })
    }
}
