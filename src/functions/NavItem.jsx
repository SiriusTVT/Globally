import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavItem.css';

const NavItem = ({ icon, text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="nav-item" onClick={handleClick}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-text">{text}</span>
    </div>
  );
};
export default NavItem;