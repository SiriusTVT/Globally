import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process'; // Importa el módulo para ejecutar comandos del sistema
import mongoose from 'mongoose'; // Importa Mongoose para manejar la conexión con MongoDB

const app = express();

// Necesitas esta configuración adicional porque __dirname no está disponible en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ejecuta el archivo batch para iniciar el servidor de LibreTranslate
exec('cmd /c start run.bat', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el script batch: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error en el script batch: ${stderr}`);
    return;
  }
  console.log(`Salida del script batch: ${stdout}`);
});

// Conexión a MongoDB
mongoose
  .connect('mongodb://localhost:27017/Globally')
  .then(() => console.log('Conectado a MongoDB en la base de datos Globally'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Middleware para manejar JSON
app.use(express.json());

// Sirve los archivos estáticos desde la carpeta 'dist'
app.use(express.static(path.join(__dirname, 'dist')));

// Ejemplo de ruta para probar la conexión (puedes eliminarla después)
app.get('/api/test', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Maneja todas las rutas y devuelve el archivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Configura el puerto para que el servidor escuche
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
