import EmpleadoSche from '../schemas/Empleado.js'

export default class EmpleadoModel{

    static async getAll(){
        const allData = await EmpleadoSche.find()
        return {allData}
    }

    static async getOne(id){
        const  one = await EmpleadoSche.findOne({cedula:id})
        return {one}
    }

    static async create(data){
        let createRes=null
        try{
            const Empleado = new EmpleadoSche(data)
            createRes= await Empleado.save()
        } catch(err){
          /*  if(err.code===11000){
                const duplicate = Object.keys(err.keyPattern)[0]
                createRes={message:`El siguiente campo ya existe en la base de datos: ${duplicate}`}
            }*/
            return false
            
       }
        return createRes
    }

    static async update(data){
        let updateRes=null
        try{
            updateRes= await EmpleadoSche.updateMany(
            {'cedula':data.cedula}, 
            {$set: data});

        } catch(err){
          /*  if(err.code===11000){
                const duplicate = Object.keys(err.keyPattern)[0]
                createRes={message:`El siguiente campo ya existe en la base de datos: ${duplicate}`}
            }*/
            updateRes={message:err}

        }
        return updateRes
    }


}