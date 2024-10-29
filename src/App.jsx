//App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import Explorar from './pages/Explorar';
import Contactos from './pages/Contactos';
import Chats from './pages/Chats';

const App = () => {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage/>} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </main>
  );
};

export default App;
