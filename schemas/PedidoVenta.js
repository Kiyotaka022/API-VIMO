import mongoose, { model, Schema } from 'mongoose';

const VentaPedidoSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        require: [true, 'El campo id es requerido'],
        trim: true
    }, fecha: {
        type: Date,
        unique: false,
        require: [true, 'El campo fecha es requerido'],
        trim: true
    }, estado: {
        type: Boolean,
        unique: false,
        require: [true, 'El campo estado es requerido'],
        trim: false
    },cedulaEmpleado: {
        type: String,
        unique: false,
        require: [true, 'El campo cedulaEmpleado es requerido'],
    },cedulaCliente: {
        type: String,
        unique: false,
        require: [true, 'El campo cedulaCliente es requerido'],
    },concepto: {
        type: String,
        unique: false,
        require: [true, 'El campo concepto es requerido'],
    },montoAdeudado: {
        type: Number,
        unique: false,
        require: [true, 'El campo montoAdeudado es requerido'],
        trim: true
    }, valorTotal:{
        type: Number,
        unique: false,
        require: [true, 'El campo valorTotal es requerido'],
        trim: true
    }
    , detalleVentaPedido: {
        type: Array,
        unique: false,
        require: [true, 'El campo categoria es requerido'],
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false
})

export default model('ventapedido', VentaPedidoSchema);