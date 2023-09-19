import ProductoModel from '../models/ProductoModel.js'

export class ProductoController{

    static async getAll(req, res){
        const allEmple = await ProductoModel.getAll()
        res.json(allEmple)
    }

    static async getOne(req, res){
        const one = await ProductoModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Producto no encontrado"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await ProductoModel.create(req.body)
        if(!createRes){
            return res.status(404).json({message:`El ide de producto que ha ingresado ya existe en la base de datos`})
         }
         res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await ProductoModel.update(req.body)
        res.json(updateRes)
    }


}