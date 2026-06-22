const mongoose = require('mongoose');

// Definimos el plano de la colección de reservas 
const ReservaSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'] 
  },
  apellido: { 
    type: String, 
    required: [true, 'El apellido es obligatorio'] 
  },
  actividad: { 
    type: String, 
    required: [true, 'La actividad es obligatoria'] // Ej: "🧘 Pilates"
  },
  turnoTexto: { 
    type: String, 
    required: [true, 'El horario es obligatorio'] // Ej: "Lunes de 10:00 a 11:00 hs"
  },
  fechaFormateada: { 
    type: String, 
    required: [true, 'La fecha es obligatoria'] // Ej: "2026-06-23"
  }
}, {
  // Nos crea automáticamente los campos de fecha de creación y actualización (createdAt, updatedAt)
  timestamps: true 
});

// Exportamos el modelo para que el Controlador lo pueda usar
module.exports = mongoose.model('Reserva', ReservaSchema);