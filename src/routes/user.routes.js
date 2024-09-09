import { Router } from 'express'
import { findById, index, store} from '../controllers/user.controller.js'

const router = Router()

router.get('/', index)
router.get('/:id', findById)
router.post('/', store)

export default router