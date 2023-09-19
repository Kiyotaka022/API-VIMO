import {Mongoose, model, Schema} from 'mongoose'


//Definir la estructura de la colección

const AbonoSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        require: [true, 'El campo cedula es requerido']
    }, valorAbonado: {
        type: Number,
        unique: false,
        require: [true, 'El campo cedula es requerido']
    }, fecha: {
        type: Date,
        unique: false,
        require: [true, 'El campo nombres es requerido']
    }, idVentaPedido: {
        type: Number,
        unique: false,
        require: [true, 'El campo apellidos es requerido']
    }
},{versionKey:false})

export default model('abono', AbonoSchema)
