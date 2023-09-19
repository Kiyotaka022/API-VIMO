import EmpleadoModel from '../models/EmpleadoModel.js'

export class EmpleadoController{

    static async getAll(req, res){
        const allEmple = await EmpleadoModel.getAll()
        res.json(allEmple)
    }


    static async getOne(req, res){
        const one = await EmpleadoModel.getOne(req.params.id)
                if(one===null){
            return res.status(404).json({message:"Empleado no encontrado"})
        }
        res.json(one)
    }

    static async create(req, res){
        const createRes = await EmpleadoModel.create(req.body)
        if(!createRes){
            return res.status(404).json({message:`La cedula que ha ingresado ya existe en la base de datos`})
         }
         res.json(createRes)
    }

    static async update(req, res){
        const updateRes = await EmpleadoModel.update(req.body)
        res.json(updateRes)
    }


}