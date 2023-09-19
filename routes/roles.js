import {Router} from 'express'
import { RolController } from '../controllers/RolController.js'

export const RolesRouter= Router()


RolesRouter.get('/', RolController.getAll)
RolesRouter.get('/:id', RolController.getOne)
RolesRouter.post('/', RolController.create)
RolesRouter.put('/', RolController.update)

