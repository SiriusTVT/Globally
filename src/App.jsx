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
import Historias from './pages/Historias';
import MyPosts from './pages/MyPosts';
import Posts from './pages/Posts';
import RecentPosts from './pages/RecentPosts';

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
        <Route path="/historias" element={<Historias />} />
        <Route path="/mis-publicaciones" element={<MyPosts />} />
        <Route path="/publicar" element={<Posts />} />
        <Route path="/recientes" element={<RecentPosts />} />
      </Routes>
    </main>
  );
};

export default App;
