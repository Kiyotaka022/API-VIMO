import CategoriaModel from '../models/CategoriaModel.js'

export class CategoriaController{

    static async getAll(req, res){
        const allData = await CategoriaModel.getAll()
        res.json(allData)
    }

    static async getOne(req, res){
        const one = await CategoriaModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Categoria no encontrada"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await CategoriaModel.create(req.body)
        if(!createRes){
           return res.status(404).json({message:"Esta categoria ya existe en la base dee datos"})
        }
        res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await CategoriaModel.update(req.body)
        res.json(updateRes)
    }


}