import {Router} from 'express'
import { EmpleadoController } from '../controllers/EmpleadoController.js'

export const EmpleadosRouter= Router()


EmpleadosRouter.get('/', EmpleadoController.getAll)
EmpleadosRouter.get('/:id', EmpleadoController.getOne)
EmpleadosRouter.post('/', EmpleadoController.create)
EmpleadosRouter.put('/', EmpleadoController.update)
