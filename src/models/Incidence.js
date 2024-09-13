import { pool } from "../config/db.js";

class Incident {

    static async all() {
        const [incidence] = await pool.execute('SELECT * FROM incidencias') 
        return incidence
     }

     static async getById(id) {
        const [incidence] = await pool.execute('SELECT * FROM incidencias WHERE id = ?', [id]);
        return incidence;
    }

    static async create({ user_id, incidencia, descripcion, tipo, estado, imagen }) {
       const campos = ["user_id","incidencia","descripcion","tipo","estado", "imagen"]
       const values = [user_id, incidencia, descripcion, tipo, estado, imagen]

       const cString = campos.join(", ");
       const placeholders = values.map(() => "?").join(", ");
       const newIncidence = await pool.execute(`INSERT INTO incidencias (${cString}) VALUES (${placeholders})`,
      values)
       return newIncidence
    }

    static async updateInci({incidencia, descripcion, tipo, estado, id}) {
        const campos = []
        const values = []

        if (incidencia) {
            campos.push('incidencia = ?')
            values.push(incidencia)
        }
        if (descripcion) {
            campos.push('descripcion = ?')
            values.push(descripcion)
        }
        if (tipo) {
            campos.push('tipo = ? ')
            values.push(tipo)
        }
        if (estado) {
            campos.push('estado = ? ')
            values.push(estado)
        }
        if (id) {
            values.push(id)
        }
        const cString = campos.join(', ')
        const [upIncidence] = await pool.execute(`UPDATE incidencias SET ${cString} WHERE incidencias_id = ?`, values)
        return upIncidence

    }

    static async  deleteInci(id) {
        const [deleteInci] = await pool.execute('DELETE FROM incidencias WHERE incidencias_id = ?', [id])
        return deleteInci
    }
}


export default Incident