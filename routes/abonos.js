import {Router} from 'express'
import { AbonoController } from '../controllers/AbonoController.js'

export const AbonoRouter= Router()


AbonoRouter.get('/', AbonoController.getAll)
AbonoRouter.get('/:id', AbonoController.getOne)
AbonoRouter.post('/', AbonoController.create)
AbonoRouter.put('/', AbonoController.update)