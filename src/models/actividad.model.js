const mongoose = require('mongoose');

const ActividadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true, // Evita que se dupliquen disciplinas con el mismo nombre
    trim: true    // Limpia espacios en blanco de más al principio o final
  }
}, { versionKey: false }); // Saca el campo __v que mete Mongoose por defecto

module.exports = mongoose.model('Actividad', ActividadSchema);