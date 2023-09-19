import {Router} from 'express'
import { PedidoVentaController } from '../controllers/PedidoVentaController.js'

export const PedidoVentaRouter= Router()


PedidoVentaRouter.get('/', PedidoVentaController.getAll)
PedidoVentaRouter.get('/:id', PedidoVentaController.getOne)
PedidoVentaRouter.post('/', PedidoVentaController.create)
PedidoVentaRouter.put('/', PedidoVentaController.update)