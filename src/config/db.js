const mongoose = require('mongoose');

// Función asincrónica para conectar la base de datos 
const conectarDB = async () => {
  try {
    // Tomamos la URL segura desde las variables de entorno (.env)
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agenda-turnos';
    
    await mongoose.connect(mongoURI);
    
    console.log('¡Conexión exitosa a MongoDB establecida!');
  } catch (error) {
    console.error('Error crítico al conectar a la Base de Datos:', error.message);
    // Frenamos la aplicación por completo si no hay base de datos conectada
    process.exit(1); 
  }
};

module.exports = conectarDB;