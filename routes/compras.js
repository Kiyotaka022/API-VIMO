import {Router} from 'express'
import { CompraController } from '../controllers/CompraController.js'

export const CompraRouter= Router()


CompraRouter.get('/', CompraController.getAll)
CompraRouter.get('/:id', CompraController.getOne)
CompraRouter.post('/', CompraController.create)
CompraRouter.put('/', CompraController.update)