const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conectarDB = require('./config/db');

const app = express();

// CONECTAMOS A LA BASE DE DATOS
conectarDB();

// MIDDLEWARES GLOBALES 
app.use(cors()); 
// app.js
app.use(cors({
  origin: '*', // Permite peticiones de cualquier origen para probar
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Vital para leer req.body


// RUTAS PRINCIPALES (Sincronizadas en Plural con Angular)
app.use('/api/reservas', require('./routes/reserva.routers'));
app.use('/api/actividades', require('./routes/actividad.routers')); // 👈 CORREGIDO: Con 'es' al final
app.use('/api/turnos', require('./routes/turno.routers'));

// PUERTO
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo exitosamente en: http://localhost:3000`);
});