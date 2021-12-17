const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const connect = async () => {

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tc0kn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Estas conectado a la base de datos");
    } catch (error) {
        console.log("Error al conectar a la base de datos" + error);
    }
}


connect();



// MIDLEWARES
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}))
app.use(express.json());


// Configuraciones del servidor
app.set('view engine', "ejs");
app.set('views', __dirname + "/views");

// Pasamos todas las rutas al index
app.use('/', require('./routes/rutas.js'));
app.use('/mascotas', require('./routes/mascotas.js'));


// Para rutas no encontradas
// dejar esto siempre de ultimo
app.use((req, res, next) => {
    res.status(404).render("404", {
        nombre: "404",
        descripcion: "No encontrado"
    });
});

// Configuracion del puerto
app.listen(port, () => {
    console.log("Server on port " + port);

    // console.log(app.get("view engine"));
})