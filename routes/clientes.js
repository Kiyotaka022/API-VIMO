import {Router} from 'express'
import { ClienteController } from '../controllers/ClienteController.js'

export const ClientesRouter= Router()


ClientesRouter.get('/', ClienteController.getAll)
ClientesRouter.get('/:id', ClienteController.getOne)
ClientesRouter.post('/', ClienteController.create)
ClientesRouter.put('/', ClienteController.update)
