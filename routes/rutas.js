const express = require('express');

const router = express.Router();


// RUTAS
router.get('/', (req, res) => {
    res.render("index", {titulo:"Mi titulo dinamico"});
});

router.get('/service', (req, res) => {
    res.render("service", {tituloServicios: "Titulo de servicios"});
});

module.exports = router;