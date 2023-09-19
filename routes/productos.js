import {Router} from 'express'
import { ProductoController } from '../controllers/ProductoController.js'

export const ProductoRouter= Router()


ProductoRouter.get('/', ProductoController.getAll)
ProductoRouter.get('/:id', ProductoController.getOne)
ProductoRouter.post('/', ProductoController.create)
ProductoRouter.put('/', ProductoController.update)