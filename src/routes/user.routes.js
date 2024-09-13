import { Router } from 'express'
import { actualizar, eliminar, findById, index, store } from '../controllers/user.controller.js'

const router = Router()
 
router.get('/all', index ) // todos los usuarios
router.get('/:id', findById ) // buscar por id 
router.post('/', store )// crear usuario
router.patch('/:id', actualizar ) // actualizar usuario
router.delete("/:id", eliminar )// eliminar usuario 

export default router