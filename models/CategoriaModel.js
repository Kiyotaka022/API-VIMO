import CategoriaSche from '../schemas/Categoria.js'

export default class CategoriaModel{

    static async getAll(){
        const allData = await CategoriaSche.find()
        return allData
    }

    
    static async getOne(id){
        const  one = await CategoriaSche.findOne({id:id})
        return one
    }

    static async create(data){
        let createRes=null
        try{
            const Rol = new CategoriaSche(data)
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
            updateRes= await CategoriaSche.updateMany(
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