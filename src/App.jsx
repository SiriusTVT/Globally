//App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Explorar from './pages/Explorar';
import Amigos from './pages/Amigos';
import Chats from './pages/Chats';
import Favoritos from './pages/Favoritos';
import MyPosts from './pages/MyPosts';
import Posts from './pages/Posts';
import RecentPosts from './pages/RecentPosts';
import Profile from './pages/Profile';
import ProfileSetup from './pages/ProfileSetup';
import Conversacion from './pages/Conversacion';
import Destacados from './pages/Destacados';

const App = () => {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage/>} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/amigos" element={<Amigos />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/destacados" element={<Destacados />} />
        <Route path="/mis-publicaciones" element={<MyPosts />} />
        <Route path="/publicar" element={<Posts />} />
        <Route path="/recientes" element={<RecentPosts />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/setup-perfil" element={<ProfileSetup />} />
        <Route path="/conversacion" element={<Conversacion />} />
      </Routes>
    </main>
  );
};

export default App;
