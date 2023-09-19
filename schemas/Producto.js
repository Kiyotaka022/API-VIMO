import mongoose, { model, Schema } from 'mongoose';

const ProductoSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        require: [true, 'El campo id es requerido'],
        trim: true
    }, nombre: {
        type: String,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, descripcion: {
        type: String,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, cantidad: {
        type: Number,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, valorUnitario: {
        type: Number,
        unique: false,
        require: [true, 'El campo valorUnitario es requerido'],
        trim: true
    }, estadoProducto: {
        type: Boolean,
        unique: false,
        require: [true, 'El campo nombre es requerido'],
        trim: true
    }, tallas: {
        type: Object,
        unique: false,
        require: [true, 'El campo tallas es requerido'],
    }, categoria: {
        type: Number,
        unique: false,
        require: [true, 'El campo categoria es requerido'],
        trim: true
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false
})

ProductoSchema.virtual('categorias',{
    ref:'categoria',
    localField:'categoria',
    foreignField:'id'
}
)

export default model('productos', ProductoSchema);