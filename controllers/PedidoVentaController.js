import PedidoVentaModel from '../models/PedidoVentaModel.js'

export class PedidoVentaController{

    static async getAllPedidos(req, res){
        const allData = await PedidoVentaModel.getAll({concepto:"pedido"})
        res.json(allData)
    }

    static async getAllVentas(req, res){
        const allData = await PedidoVentaModel.getAll({concepto:"venta"})
        res.json(allData)
    }

    static async getOne(req, res){
        const one = await PedidoVentaModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Pedido/Venta no encontrado"})
        }
        res.json(one)
    }


    static async create(req, res){
        const createRes = await PedidoVentaModel.create(req.body)

        if(!createRes){
           return res.status(404).json({message:"Este id de pedido/venta ya existe en la base de datos"})
        }
        res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await PedidoVentaModel.update(req.body)
        res.json(updateRes)
    }


}