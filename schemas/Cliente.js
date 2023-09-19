import {Mongoose, model, Schema} from 'mongoose'


//Definir la estructura de la colección

const ClienteSchema = new Schema({
    cedula: {
        type: Number,
        unique: true,
        require: [true, 'El campo cedula es requerido']
    }, telefono: {
        type: Number,
        unique: false,
        require: [true, 'El campo cedula es requerido']
    }, nombres: {
        type: String,
        unique: false,
        require: [true, 'El campo nombres es requerido']
    }, apellidos: {
        type: String,
        unique: false,
        require: [true, 'El campo apellidos es requerido']
    }, fechaNacimiento: {
        type: Date,
        unique: false,
        require: [true, 'El campo nacimiento es requerido']
    }, direccion: {
        type: String,
        unique: false,
        require: [true, 'El campo direccion es requerido']
    }
},{versionKey:false})

export default model('cliente', ClienteSchema)