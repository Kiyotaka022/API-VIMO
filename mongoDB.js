import mongoose from 'mongoose'

const password="lol1234"

const cs=`mongodb+srv://AngelAcosta:${password}@cluster002.hbdsqu6.mongodb.net/VIMOFINAL`

export function conectar(){
    mongoose.connect(cs).
    then(()=> console.log("Conectado pa"))
    .catch((err)=>console.error(err))
}