import React from 'react';
import NavItem from './NavItem';
import '../styles/NavBar.css';

const NavBar = () => {
  const menuItems = [
    { id: 1, text: 'Inicio', icon: '🏠', path: '/mainpage' },
    { id: 2, text: 'Explorar', icon: '🔍', path: '/explorar' },
    { id: 3, text: 'Amigos', icon: '👥', path: '/amigos' },
    { id: 4, text: 'Chats', icon: '💬', path: '/chats' },
    { id: 5, text: 'Cerrar Sesión', icon: '⬅️', path: '/' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <p className="logo-text">Globally</p>
        </div>
        <div className="nav-items">
          {menuItems.map(item => (
            <NavItem 
              key={item.id}
              icon={item.icon}
              text={item.text}
              path={item.path}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;