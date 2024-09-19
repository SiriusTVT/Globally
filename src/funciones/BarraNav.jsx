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
        <li onClick={() => setActivePage('Explorar')}>Explorar</li>
        <li onClick={() => setActivePage('Contactos')}>Contactos</li>
        <li onClick={() => setActivePage('Chats')}>Chats</li>
      </ul>
      <ul className="navbar-right">
        <li onClick={handleLogout}>Cerrar sesión</li>
      </ul>
    </nav>
  );
};

export default BarraNav;
