const mongoose = require('mongoose');

const TurnoSchema = new mongoose.Schema({
  actividadId: {
    type: mongoose.Schema.Types.ObjectId, //Se vincula con el _id de la colección de actividades
    ref: 'Actividad',
    required: true
  },
  horario: {
    type: String,
    required: true // Ej: "08:00 a 09:30"
  },
  profesor: {
    type: String,
    required: true // Ej: "Instructor Gym"
  },
  limiteAlumnos: {
    type: Number,
    default: 10
  }
}, { versionKey: false }); // Evita el molesto __v de Mongoose

module.exports = mongoose.model('Turno', TurnoSchema);