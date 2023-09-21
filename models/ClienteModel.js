import ClienteSche from '../schemas/Cliente.js'

export default class EmpleadoModel{

    static async getAll(){
        const allData = await ClienteSche.find()
        return {allData}
    }

    static async getOne(id){
        const  one = await ClienteSche.findOne({cedula:id})
        return {one}
    }

    static async create(data){
        let createRes=null
        try{
            const Cliente = new ClienteSche(data)
            createRes= await Cliente.save()
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
            updateRes= await ClienteSche.updateMany(
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