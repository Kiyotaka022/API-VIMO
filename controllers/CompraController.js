import CompraModel from '../models/CompraModel.js'

export class CompraController{

    static async getAll(req, res){
        const allData = await CompraModel.getAll()
        res.json(allData)
    }

    static async getOne(req, res){
        const one = await CompraModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Compra no encontrada"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await CompraModel.create(req.body)

        if(!createRes){
           return res.status(404).json({message:"Este id de compra ya existe en la base de datos"})
        }
        res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await CompraModel.update(req.body)
        res.json(updateRes)
    }


}