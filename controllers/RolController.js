import RolModel from '../models/RolModel.js'

export class RolController{

    static async getAll(req, res){
        const allData = await RolModel.getAll()
        res.json(allData)
    }

    static async getOne(req, res){
        const one = await RolModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Rol no encontrado"})
        }
        res.json(one)
    }

        static async getOneByName(req, res){
        const one = await RolModel.getOneByName(req.body.name)
        if(one===null){
            return res.status(404).json({message:"Rol no encontrado"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await RolModel.create(req.body)
        if(!createRes){
           return res.status(404).json({message:"Este rol ya existe en la base dee datos"})
        }
        res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await RolModel.update(req.body)
        res.json(updateRes)
    }


}