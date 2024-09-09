import { compare } from "bcrypt";
import { SECRET_KEY } from "../config/config.js";
import User from "../models/User.js";
import jwt  from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.getByEmail(email);
    if (usuario.length === 0 ) return res.status(404).json({ message: "Email incorrecto" });

    const esValido = await compare(password, usuario[0].password);
    if (!esValido) return res.status(400).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign({ userId: usuario[0].user_id }, SECRET_KEY, {expiresIn: "1h"});
    delete usuario[0].password
    console.log(password)
    console.log(usuario[0].nombres)
    console.log(usuario[0])
    res.json({ token, user: usuario[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const me = async (req, res) => {
  delete req.user.password
    console.log(req.user)
    res.json( req.user)
}


