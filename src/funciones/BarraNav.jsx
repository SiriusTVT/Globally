import React from 'react';
import '../Estilos/BarraNav.css';
import { useNavigate } from 'react-router-dom';

const BarraNav = ({ setActivePage }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
    console.log('Botón de Cerrar Sesión presionado');
  };

  return (
    <nav className="barranav">
      <ul>
        <li onClick={() => setActivePage('home')}>Home</li>
        <li onClick={() => setActivePage('about')}>About</li>
        <li onClick={() => setActivePage('contact')}>Contact</li>
      </ul>
      <ul className="navbar-right">
        <li onClick={handleLogout}>Cerrar sesión</li>
      </ul>
    </nav>
  );
};

export default BarraNav;
