import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NavItem.css';

const NavItem = ({ icon, text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="nav-item">
      < div className="nav-icon">{icon}</div>
      <button onClick={handleClick} className='nav-text'>{text}</button>
    </div>
  );
};
export default NavItem;