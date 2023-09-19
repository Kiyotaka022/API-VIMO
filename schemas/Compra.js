import mongoose, { model, Schema } from 'mongoose';

const CompraSchema = new Schema({
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
    }, valorTotal: {
        type: Number,
        unique: false,
        require: [true, 'El campo valorTotal es requerido'],
        trim: true
    },pais: {
        type: String,
        unique: false,
        require: [true, 'El campo pais es requerido'],
    }, detalleCompra: {
        type: Array,
        unique: false,
        require: [true, 'El campo categoria es requerido'],
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false
})

export default model('compra', CompraSchema);