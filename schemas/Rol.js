import {Mongoose, model, Schema} from 'mongoose'


//Definir la estructura de la colección

const RolSchema = new Schema({
        id: {
        type: Number,
        unique: true,
        require: [true, 'El campo id es requerido']
    }, 
         nombre: {
        type: String,
        unique: true,
        require: [true, 'El campo nombres es requerido']
}},{versionKey:false})

export default model('rol', RolSchema)
