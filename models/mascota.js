const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const mascotaShema = new Shema({
    nombre: String,
    descripcion: String,
 });

 const Mascota  = mongoose.model('Mascota', mascotaShema);

 module.exports = Mascota;