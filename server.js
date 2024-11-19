import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process'; // Importa el módulo para ejecutar comandos del sistema
import mongoose from 'mongoose'; // Importa Mongoose para manejar la conexión con MongoDB
import User from './models/User.js'; // Importa el modelo de usuario

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

// Ruta para registrar un nuevo usuario
app.post('/api/register', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }
    const newUser = new User({ nombre, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para iniciar sesión
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'No se encontró una cuenta con el correo asociado' });
    }
    if (user.password !== password) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Ruta para configurar el perfil del usuario
app.post('/api/profile-setup', async (req, res) => {
  try {
    const { email, nombre, idiomasDominados, idiomasInteres, intereses } = req.body;
    const user = await User.findOneAndUpdate(
      { email },
      { nombre, idiomasDominados, idiomasInteres, intereses },
      { new: true, upsert: true } // Crea el documento si no existe
    );
    res.status(200).json({ message: 'Perfil actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    res.status(500).json({ error: 'Error al actualizar el perfil' });
  }
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
