import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/Pages.css';
import '../styles/Chats.css';

const Chats = () => {
  const navigate = useNavigate();

  const chats = [
    { id: 1, nombre: 'Ana García', mensaje: 'Hola, ¿cómo estás?', tiempo: '12:30' },
    { id: 2, nombre: 'Carlos López', mensaje: '¿Nos vemos mañana?', tiempo: '11:45' },
    { id: 3, nombre: 'María Rodríguez', mensaje: 'Gracias por la ayuda', tiempo: '10:15' }
  ];

  const handleChatClick = (chat) => {
    console.log('Chat clicked:', chat);
    navigate('/conversacion');
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="page-container">
      <NavBar />
      <div className="page-content">
        <h1>Chats</h1>
        <div className="chats-list">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              className="chat-button"
            >
              <div className="chat-initial">{getInitial(chat.nombre)}</div>
              <div className="chat-info">
                <div className="chat-header">
                  <h3>{chat.nombre}</h3>
                  <span className="chat-time">{chat.tiempo}</span>
                </div>
                <p className="chat-message">{chat.mensaje}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;