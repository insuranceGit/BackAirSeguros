// INICIALIZA LAS VARIABLES DE ENTORNO
require("dotenv").config()

//Ayuda a levantar un servicio web
const express = require("express")
//Ayuda a evitar el origen cruzado entre navegadores
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()

//La aplicación usa cors
app.use(cors())

//Permite que la aplicacion reciba información atraves de POST
app.use(express.json())

//Permite el acceso a los recursos publicos ubicados en la carpeta storage
app.use(express.static("storage"))


//El puerto
const port = process.env.PORT || 3000

// SE INVOCAN LAS RUTAS
// se llama el index de routes
app.use("/api", require("./routes"))



//Se pone a escuchar a la aplicacion
app.listen(port, ()  => {
    console.log(`http://localhost:${port}`)
})

dbConnect()