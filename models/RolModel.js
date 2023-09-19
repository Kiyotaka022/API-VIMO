import RolesSche from '../schemas/Rol.js'

export default class RolModel{

    static async getAll(){
        const allData = await RolesSche.find({id:1})
        return allData
    }

    static async getOne(id){
        const  one = await RolesSche.findOne({id:id})
        return one
    }

    static async create(data){
        let createRes=null
        try{
            const Rol = new RolesSche(data)
            createRes= await Rol.save()
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
            updateRes= await RolesSche.updateMany(
            {'id':data.id}, 
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