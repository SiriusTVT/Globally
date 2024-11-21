import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import mongoose from 'mongoose';
import cors from 'cors'; // Importamos cors para permitir peticiones cruzadas
import User from './models/User.js';
import dotenv from 'dotenv';
import multer from 'multer';
import fs from 'fs';
import Post from './models/Post.js';

// Configuración inicial
const app = express();
dotenv.config();

// Configuración de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear el directorio 'uploads' si no existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));

// Ejecuta el archivo batch para LibreTranslate
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

// Conexión a MongoDB Atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Rutas API
app.get('/api/test', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

// Ruta para registro
app.post('/api/register', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    // Crear nuevo usuario
    const newUser = new User({ nombre, email, password });
    await newUser.save();
    
    res.status(201).json({ 
      message: 'Usuario registrado exitosamente',
      userId: newUser._id 
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        error: 'No se encontró una cuenta con el correo asociado' 
      });
    }
    
    if (user.password !== password) {
      return res.status(400).json({ 
        error: 'Correo o contraseña incorrectos' 
      });
    }

    // Asegurarse de enviar el userId como string
    res.status(200).json({ 
      message: 'Inicio de sesión exitoso',
      userId: user._id.toString(),
      nombre: user.nombre
    });
    
    console.log('Usuario autenticado:', {
      userId: user._id.toString(),
      nombre: user.nombre
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// Ruta para configuración de perfil
app.post('/api/profile-setup', upload.single('profilePicture'), async (req, res) => {
  try {
    const { email, nombre, idiomasDominados, idiomasInteres, intereses } = req.body;
    
    // Verificar si el nombre ya existe (excluyendo al usuario actual)
    const existingUserWithName = await User.findOne({
      nombre: nombre,
      email: { $ne: email } // Excluye al usuario actual de la búsqueda
    });

    if (existingUserWithName) {
      return res.status(400).json({
        error: 'El nombre de usuario ya está en uso'
      });
    }

    // Si el nombre no existe, actualizar el usuario
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { 
        nombre, 
        idiomasDominados, 
        idiomasInteres, 
        intereses,
        perfilCompletado: true
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ 
        error: 'Usuario no encontrado' 
      });
    }

    res.status(200).json({ 
      message: 'Perfil actualizado exitosamente',
      user: updatedUser
    });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    res.status(500).json({ error: 'Error al actualizar el perfil' });
  }
});

// Ruta para crear posts
app.post('/api/posts/create', upload.single('image'), async (req, res) => {
  try {
    const { title, subtitle, content, language, level, userId } = req.body;
    
    const post = new Post({
      userId,
      title,
      subtitle,
      content,
      language,
      level,
      imagePath: req.file ? `/uploads/${req.file.filename}` : null
    });

    await post.save();

    res.status(201).json({
      message: 'Post creado exitosamente',
      post
    });
  } catch (error) {
    console.error('Error al crear el post:', error);
    res.status(500).json({ error: 'Error al crear el post' });
  }
});


// Ruta catch-all para SPA
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', '../index.html'));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});