//App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Páginas
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <main className="app-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage/>} />
      </Routes>
    </main>
  );
};

export default App;
