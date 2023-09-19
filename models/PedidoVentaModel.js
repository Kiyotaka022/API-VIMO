import VentaPedidoSchema from '../schemas/PedidoVenta.js'
import ProductoSche from '../schemas/PedidoVenta.js'
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

export default class VentaModel{

    static async getAll(concepto){
        let allData
        if(concepto==="pedido"){
             allData = await VentaPedidoSchema.find({concepto:"pedido"})

        }else{
             allData = await VentaPedidoSchema.find({concepto:"venta"})
        }
        return allData
    }

    static async getOne(id){
        const  one = await VentaPedidoSchema.findOne({id:id})
        return one
    }

    static async create(data){
        let createRes=null
        try{
            data.detalleVentaPedido.map((docu)=>{
                ProductoModel.removeTallas(docu)
       })
            const ventaPedido = new VentaPedidoSchema(data)
            createRes= await ventaPedido.save()
            
        } catch(err){

            return false
        }
        return createRes
    }

  static async update(data){
        const newVP=data
        const VP = await VentaPedidoSchema.findOne({id:newVP.id})
        let oldVP = convertDocument([VP])[0]


            for(const producto of oldVP.detalleVentaPedido){
                await ProductoModel.addTallas(producto)
                console.log("ESTOY DENTRO DEL BUCLE ADD")
            }

        await VentaPedidoSchema.deleteOne({id:data.id})
        console.log("VOY A CREAR LA OTRA MAMADA")
        this.create(data)

        return oldVP
    }

}