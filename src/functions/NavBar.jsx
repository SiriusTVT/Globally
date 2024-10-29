import React from 'react';
import NavItem from './NavItem';
import '../styles/NavBar.css';

const NavBar = () => {
  const menuItems = [
    { id: 1, text: 'Explorar', icon: '🔍', path: '/explorar' },
    { id: 2, text: 'Contactos', icon: '👥', path: '/contactos' },
    { id: 3, text: 'Chats', icon: '💬', path: '/chats' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-text">App</span>
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