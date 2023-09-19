import {Router} from 'express'
import { CategoriaController } from '../controllers/CategoriaController.js'

export const CategoriaRouter= Router()


CategoriaRouter.get('/', CategoriaController.getAll)
CategoriaRouter.get('/:id', CategoriaController.getOne)
CategoriaRouter.post('/', CategoriaController.create)
CategoriaRouter.put('/', CategoriaController.update)