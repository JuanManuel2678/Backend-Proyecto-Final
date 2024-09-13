import { hash } from "bcrypt";
import { pool } from "../config/db.js";

class User {
  static async all() {
    const [usuarios] = await pool.execute("SELECT * FROM users");
    return usuarios;
  }

  static async getById(id) {
    const [usuario] = await pool.execute(
      "SELECT * FROM users WHERE user_id = ?",
      [id]
    );
    return usuario;
  }

  static async where(campo, valor) {
    const [usuario] = await pool.execute(
      `SELECT * FROM users WHERE ${campo} = ?`,
      [valor]
    );
    return usuario;
  }

  static async create({
    nombres,
    apellidos,
    piso,
    apartamento,
    telefono,
    email,
    password,
    rol,
  }) {
    const encriptado = await hash(password, 10);

    const campos = ["nombres", "email", "password", "rol"];
    const values = [nombres, email, encriptado, rol];

    if (apellidos) {
      campos.push("apellidos");
      values.push(apellidos);
    }
    if (piso) {
      campos.push("piso");
      values.push(piso);
    }
    if (apartamento) {
      campos.push("apartamento");
      values.push(apartamento);
    }
    if (telefono) {
      campos.push("telefono");
      values.push(telefono);
    }

    const cString = campos.join(", ");
    const placeholders = values.map(() => "?").join(", ");
    const newUser = await pool.execute(`INSERT INTO users(${cString}) VALUES (${placeholders})`,
      values
    );
    return newUser;
  }

  static async updateUser({nombres, apellidos, piso, apartamento, telefono, email, password, rol, id,
  }) {
    const encriptado = await hash(password, 10);

    const campos = [];
    const values = [];

    if (nombres) {
      campos.push("nombres = ?");
      values.push(nombres);
    }
    if (apellidos) {
      campos.push("apellidos = ?");
      values.push(apellidos);
    }
    if (piso) {
      campos.push("piso = ?");
      values.push(piso);
    }
    if (apartamento) {
      campos.push("apartamento = ?");
      values.push(apartamento);
    }
    if (telefono) {
      campos.push("telefono = ?");
      values.push(telefono);
    }
    if (email) {
      campos.push("email = ?");
      values.push(email);
    }
    if (password) {
      campos.push("password = ?");
      values.push(encriptado);
    }
    if (rol) {
      campos.push("rol = ?");
      values.push(rol)
    }
    if (id) {
      values.push(id)
    }

    const cString = campos.join(', ')
    const [upUser] = await pool.execute(`UPDATE users SET ${cString} WHERE user_id = ?`, values)
    return upUser
  }

  static async getByEmail(email) {
    const [usuario] = await pool.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );
    return usuario;
  }

  static async deleteUser(id) {
    const [deleteUser] = await pool.execute(
      "DELETE FROM users WHERE user_id = ?",
      [id]
    );
    return deleteUser;
  }
}

export default User;
