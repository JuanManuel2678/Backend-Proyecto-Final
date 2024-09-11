import { Router } from 'express'
import { findById, index, store, userDelete} from '../controllers/user.controller.js'

const router = Router()
 
router.get('/all', index) // todos los usuarios
router.get('/:id', findById) // buscar por id 
router.post('/', store)// crear usuario
router.delete("/:id", userDelete)

export default router