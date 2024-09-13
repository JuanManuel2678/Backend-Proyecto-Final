import Incident from "../models/Incidence.js"
import path from 'node:path'
import fs from 'node:fs/promises'

export const index = async (req, res) => {
    try {
      const incidencias = await Incident.all();
      if (incidencias.length === 0) return res.status(400).json({ message: "No hay Incidencias  Registrados" });
      res.json(usuarios);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const findById = async (req, res) => {
    try {
      const { id } = req.params;
      const incidencia = await Incident.getById(id);

      if (incidencia.length === 0) {
        return res.status(404).json({ message: 'incidencia no encontrada'})
      }
      res.json(incidencia)
    } catch (error) {
      res.json(500).json({ message: error.message });
    }
  }

 export const store = async (req, res) => {
  try {
    const {user_id, incidencia, descripcion, tipo, estado } = req.body;
    const { filename } = req.file
    if ( !user_id, !incidencia || !descripcion || !tipo || !estado) return res.status(400).json({ message: "llenar todos los campos"})
      
      const [newIncidence] = await Incident.create({user_id, incidencia, descripcion, tipo, estado, imagen: filename}) 

      if (newIncidence.affectedRows === 1 ) return res.json({ message: 'Incidencia creada exitosamente'})
        res.status(500).json({ message: 'Error al guardar la incidencia '})
    } catch (error) {
      res.status(500).json({ message: error.message });
  }
 } 

 export const actualizar = async (req, res) => {
  try {
    const { incidencia, descripcion, tipo, estado } = req.body
    const { id } = req.params

    if (incidencia || descripcion || tipo || estado) {
      const updateInci = await Incident.updateInci({incidencia, descripcion, tipo, estado, id})

      if (updateInci.affectedRows === 1 ) return res.json({ message: 'incidencia actualizada'})
        res.status(500).json({ message: 'Error al actualizar la incidencia '})
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 }

 export const eliminar = async (req, res) => {
  try {
    const { id } = req.params

    const incidencia = await Incident.deleteInci(id) 
    if ( incidencia.affectedRows === 1 ) return res.status(200).json({ message: 'incidencia eliminada'})
     return res.status(400).json({ message: 'Incidencia no pudo eliminarse'}) 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 }

 export const sendImage = async (req, res) => {
  try {
    const { name } = req.params
    const imageRute = path.resolve(`/uploads/${name}}`)
    await fs.access(imageRute)

    res.sendFile(imageRute)

  } catch (error) {
    if (error.errno === -4058) { return res.status(404).json({ message: 'image no encontrada' }) }

    res.status(500).json({ message: error.message })
  }
 }