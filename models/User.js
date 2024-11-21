import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  idiomasDominados: { type: [String], default: [] },
  idiomasInteres: { type: [String], default: [] },
  intereses: {
    tecnologia: { type: Boolean, default: false },
    deportes: { type: Boolean, default: false },
    arte: { type: Boolean, default: false },
    musica: { type: Boolean, default: false },
    viajes: { type: Boolean, default: false }
  },
  profilePicture: { type: String, default: null }
});

const User = mongoose.model('User', userSchema);

export default User;