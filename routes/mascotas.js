const express = require('express');
const Mascota = require('../models/mascota');

const router = express.Router();


router.get('/', async (req, res) => {

    try {
        const arrayMascotas = await Mascota.find();

        res.render("mascotas", {
            arrayMascotas
        })
    } catch (error) {
        console.log(error)
    }
});



router.post('/', async (req, res) => {
    try {

        //Guardamos un documento en mongoDB
        //const mascotasDB = new Mascota(body);
        //await mascotasDB.save();

        //METODO ALTERNO Y MAS CORTO DE GUARDAR EN MONGODB
        console.log(req.body);
        const {
            nombre,
            descripcion
        } = req.body;

        await Mascota.create({
            nombre,
            descripcion
        });
        console.log("Registrado");
        res.redirect('/mascotas');
    } catch (error) {
        console.log("Ha ocurrido un error" + error);
    }
});


router.get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);

    try {
        // res.render("update");
        const mascota = await Mascota.findOne({
            _id: id
        });
        console.log(mascota);

        res.render("update", {
            mascota,
            error: false
        });
    } catch (error) {
        console.log("HA OCURRIDO UN ERROR", error);
        res.render("update", {
            error: true,
            msj: "No se encuentra el registro"
        });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({
            _id: id
        });

        if (mascotaDB) {
            res.send({
                estado: true,
                msj: "Se ha eliminado correctamente"
            });
        } else {
            res.json({
                estado: false,
                msj: "No se ha podido eliminar"
            });
        }
    } catch (error) {
        console.log("Ha ocurrido un error" + error);
    }
});


module.exports = router;