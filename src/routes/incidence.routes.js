import { Router } from 'express'
import { actualizar, eliminar, findById, index, sendImage, store } from '../controllers/incidence.controller.js'
import { uploadsImage } from '../config/multer.js'

const router = Router()

router.get('/all', index) // todas las incidencias 
router.get(':id', findById)// buscar incidencia por id 
router.post('/', uploadsImage.single('incidencia'), store) // crear incidencia
router.patch('/:id', actualizar)// actualizar la incidencia 
router.delete('/:id', eliminar) // crear incidencia 
router.get('/:nombres', sendImage)


export default router
