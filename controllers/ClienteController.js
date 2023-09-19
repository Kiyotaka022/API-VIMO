import ClienteModel from '../models/ClienteModel.js'

export class ClienteController{

    static async getAll(req, res){
        const allData = await ClienteModel.getAll()
        res.json(allData)
    }

    static async getOne(req, res){
        const one = await ClienteModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Cliente no encontrado"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await ClienteModel.create(req.body)
        if(!createRes){
            return res.status(404).json({message:`La cedula que ha ingresado ya existe en la base de datos`})
         }
         res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await ClienteModel.update(req.body)
        res.json(updateRes)
    }


}