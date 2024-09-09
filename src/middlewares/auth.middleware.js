import { SECRET_KEY } from "../config/config.js";
import jwt  from "jsonwebtoken";
import User from "../models/User.js";

export const verificarToken = async (req, res, next ) => {
    try {
      const { authorization } = req.headers;
      const decoded = jwt.verify(authorization, SECRET_KEY);
      console.log(decoded)
      
      const usuario = await User.getById(decoded.userId)
      if (usuario.length === 0 ) return res.status(404).json({ message: 'El token no pertenece a ningún usuario' })
      req.user = usuario[0]

      next()
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: error.message })
    }
  };