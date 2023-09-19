import CompraSche from '../schemas/Compra.js'
import ProductoModel from './ProductoModel.js'

function convertDocument(document){
    let allDataObject = []
    
    document.map((docu)=>{
        let newDocu = docu.toObject()
        allDataObject.push(newDocu)
        return docu
    })

    return allDataObject

}

export default class CompraModel{

    static async getAll(){
        const allData = await CompraSche.find()
        return allData
    }

    static async getOne(id){
        const  one = await CompraSche.findOne({id:id})
        return one
    }

    static async create(data){
        let createRes=null
        try{
            const Compra = new CompraSche(data)
            createRes= await Compra.save()
            data.detalleCompra.map((docu)=>{
                if(docu.be===true){
                     ProductoModel.updateTallas(docu)
                }else{
                    delete docu.be
                    delete docu.valorTotal
                    ProductoModel.create(docu)
                }
            })
            
        } catch(err){


            return false
        }
        return createRes
    }

    static async update(data){
        let updateRes=null
        const one = await CompraSche.findOne({id:data.id})
        let oneObject = convertDocument([one])

        oneObject[0].detalleCompra.map((docu)=>{
            ProductoModel.removeTallas(docu)
        })

        await CompraSche.deleteOne({id:data.id})
        console.log("ab")
        this.create(data)

    }


}