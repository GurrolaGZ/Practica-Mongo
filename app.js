const mongoose =require('mongoose')
const url_bd = 'mongodb://localhost:27017/utma'

mongoose.connect(url_bd)
.then(() => {
    console.log('Conexion exitosa')
})
.catch((err) => {
    console.log('no jalo')
})

//Schema

const esquema_alumnos = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        telNumber:{
            type:Number
        },
        fechanac:{
            type:Date
        }
    }
)

//Model

const alumnos = new mongoose.model('Tabal de registro alumnos', esquema_alumnos)

alumnos.create(
    {
        name:'Josue',
        apepat:'Gurrola',
        apemat:'Gomez',
        telNumber: 4492063040,
        fechanac: new Date(2004, 4, 24)
    }
)