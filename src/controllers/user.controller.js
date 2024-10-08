import User from "../models/User.js";

export const index = async (req, res) => {
  try {
    const usuarios = await User.all();
    if (usuarios.length === 0) return res.status(400).json({ message: "No hay usuarios Registrados" });
    delete usuarios[0].password;
    res.json(usuarios);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await User.getById(id);

    if (usuario.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.json(usuario);
  } catch (error) {
    res.json(500).json({ message: error.message });
  }
};

export const store = async (req, res) => {
  try {
    const {nombres, apellidos, piso, apartamento, telefono, email, password, rol, } = req.body;
    if (!nombres || !email || !password)
      return res.status(400).json({ message: "Completar los Datos obligatorios " });

    const [newUser] = await User.create({nombres,apellidos, piso, apartamento, telefono, email, password,
      rol,
    });

    if (newUser.affectedRows === 1) return res.json({ message: "Usuario creado y guardado correctamente " });
    res.status(500).json({ message: "error al guardar los datos del usuario" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const { nombres, apellidos, piso, apartamento, telefono, email, password } = req.body;
    const { id } = req.params

    if (nombres || apellidos || piso || apartamento || telefono || email || password ) {
      const upUser = await User.updateUser({ nombres, apellidos, piso, apartamento, telefono, email, password, id})

      if (upUser.affectedRows === 1 ) return res.json({ message: 'Usuario Actualizado'})
      res.status(500).json({ message: "error al actualizar el usuario"})  
    } 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

export const eliminar = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await User.deleteUser(id);
    if (usuario.affectedRows === 1) return res.status(200).json({ message: "Usuario Eliminado " });
    return res.status(400).json({ message: "Usuario No pudo ser eliminado  " });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
