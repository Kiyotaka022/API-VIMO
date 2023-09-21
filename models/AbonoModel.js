import AbonoSche from '../schemas/Abono.js'
import VentaPedidoSchema from '../schemas/PedidoVenta.js'
import PedidoVentaModel from '../models/PedidoVentaModel.js'

export default class AbonoModel{

    static async getAll(){
        const allData = await AbonoSche.find()
        return {allData}
    }

    static async getOne(id){
        const  one = await AbonoSche.findOne({id:id})
        return {one}
    }


    static async checkValor(id){
        const res = await VentaPedidoSchema.find({'id':id})
        const abonos = await AbonoSche.find({'idVentaPedido':id})
        let sum=0
        abonos.map((abono)=>{
            sum+=abono.valorAbonado
        })
        if(sum>=res[0].valorTotal){
            console.log("Pedido pasa a venta PA")
        }
    }

    static async create(data){
        let createRes=null
        try{
            const Abono = new AbonoSche(data)
            createRes= await Abono.save()
            this.checkValor(data.idVentaPedido)
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
            updateRes= await AbonoSche.updateMany(
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