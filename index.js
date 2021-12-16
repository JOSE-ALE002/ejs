const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


// MIDLEWARES
app.use(express.static(__dirname + "/public"));


// Configuraciones del servidor
app.set('view engine', "ejs");
app.set('views', __dirname + "/views");


// RUTAS
app.get('/', (req, res) => {
    res.render("index", {titulo:"Mi titulo dinamico"});
});

app.get('/service', (req, res) => {
    res.render("service", {tituloServicios: "Titulo de servicios"});
});

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

    console.log(app.get("view engine"));
})