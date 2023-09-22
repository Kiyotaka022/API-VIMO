import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import {conectar} from './mongoDB.js'
import {EmpleadosRouter} from './routes/empleados.js'
import {RolesRouter} from './routes/roles.js'
import {ClientesRouter} from './routes/clientes.js'
import { CategoriaRouter } from './routes/categorias.js'
import { ProductoRouter } from './routes/productos.js'
import { AbonoRouter } from './routes/abonos.js'
import { CompraRouter } from './routes/compras.js'
import { PedidoVentaRouter } from './routes/pedidoVenta.js'



const port = process.env.PORT || 3000;
const app = express()
conectar()
console.log("AB")
app.disable('x-powered-by')
app.use(express.json())
app.use(cors())




app.use('/empleados', EmpleadosRouter)
app.use('/roles', RolesRouter)
app.use('/clientes', ClientesRouter)
app.use('/categorias', CategoriaRouter)
app.use('/productos', ProductoRouter)
app.use('/abonos', AbonoRouter)
app.use('/compras', CompraRouter)
app.use('/pedidoVenta', PedidoVentaRouter)



app.use((req,res)=>{
    res.status(400).send('<h1>Rutas: /empleados, /roles, /clientes, /categorias, /productos, /abonos, /compras, /pedidoVenta/pedidos, /pedidoVenta/ventas</h1>')
})

app.listen(port,"0.0.0.0", ()=>{
    console.log(`Port ${port}`)
})
