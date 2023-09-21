import ProductoSche from '../schemas/Producto.js'

function convertDocument(document){
    let allDataObject = []
    
    document.map((docu)=>{
        let newDocu = docu.toObject()
        allDataObject.push(newDocu)
        return docu
    })

    allDataObject.map((docu)=>{
        let newDocu = docu
        delete docu.categoria
        let newCategorias= {id:newDocu.categorias[0].id, nombre:newDocu.categorias[0].nombre }
        newDocu.categorias=newCategorias
        return newDocu
    })

    return allDataObject

}



export default class ProductoModel{

    static async getAll(){
        const allDataObject = await ProductoSche.find().populate('categorias')
        let allData = convertDocument(allDataObject)

        return {allData}
    }

    static async getOne(id){
        const  oneO = await ProductoSche.findOne({id:id}).populate('categorias')
        if(oneO===null){
            return null
        }
        let one = convertDocument([oneO])
        return {one}
    }
    
    static async create(data){
        let createRes=null
        try{
                let cantidad=0
                for(let key in data.tallas){
                    cantidad+=data.tallas[key]
                }
                data["cantidad"]=cantidad


            const Producto = new ProductoSche(data)
            createRes= await Producto.save()
        } catch(err){
          /*  if(err.code===11000){
                const duplicate = Object.keys(err.keyPattern)[0]
                createRes={message:`El siguiente campo ya existe en la base de datos: ${duplicate}`}
            }*/
            console.error(err)
            return false
            
       }
        return createRes
    }

    static async update(data){
        let updateRes=null
        try{
            updateRes= await ProductoSche.updateMany(
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





    //Estas funciones no se usan en productos directamente.

    static async updateTallas(data){
        let updateRes=null
        const  one = await ProductoSche.findOne({id:data.id}).populate('categorias')
        let oneObject = convertDocument([one])

        oneObject.map((docu)=>{
            let cantidad=0
            for(let key in docu.tallas){
                docu.tallas[key]+=data.tallas[key]
                cantidad+=docu.tallas[key]
            }
            delete oneObject.be
            docu["cantidad"]=cantidad
            return docu
        })

            updateRes= await ProductoSche.updateMany(
            {'id':oneObject[0].id}, 
            {$set: oneObject[0]});
    }

    static async removeTallas(product){
        console.log("ESTOY REMOVIENDO TALLAS")
        let updateRes=null
        const one = await ProductoSche.findOne({id:product.id}).populate('categorias')
        let oneObject = convertDocument([one])
        let res=oneObject[0]

        for(let key in res.tallas){
            res.tallas[key]-=product.tallas[key]
        }

        updateRes= await ProductoSche.updateMany(
            {'id':res.id}, 
            {$set: res});
    }

    static async addTallas(product){
        console.log("ESTOY DENTRO DE ADD")
        let updateRes=null
        const one = await ProductoSche.findOne({id:product.id}).populate('categorias')
        let oneObject = convertDocument([one])
        let res=oneObject[0]

        console.log("ANTES DE ADD")
        console.log(res.tallas)

        for(let key in res.tallas){
            res.tallas[key]+=product.tallas[key]
        }
        console.log("DESPUES DE ADD")
        console.log(res.tallas)

        await ProductoSche.findOneAndUpdate({'id':product.id},res)
        
        await ProductoSche.findOne({id:product.id}).populate('categorias'
        )


    }
    


}