import AbonoModel from '../models/AbonoModel.js'

export class AbonoController{

    static async getAll(req, res){
        const allData = await AbonoModel.getAll()
        res.json(allData)
    }

    static async getOne(req, res){
        const one = await AbonoModel.getOne(req.params.id)
        if(one===null){
            return res.status(404).json({message:"Abono no encontrado"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await AbonoModel.create(req.body)
        res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await AbonoModel.update(req.body)
        res.json(updateRes)
    }


}