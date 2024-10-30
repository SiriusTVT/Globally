import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Pages.css';
import '../styles/Chats.css';

const Chats = () => {
  const chats = [
    { id: 1, nombre: 'Ana García', mensaje: 'Hola, ¿cómo estás?', tiempo: '12:30' },
    { id: 2, nombre: 'Carlos López', mensaje: '¿Nos vemos mañana?', tiempo: '11:45' },
    { id: 3, nombre: 'María Rodríguez', mensaje: 'Gracias por la ayuda', tiempo: '10:15' },
    { id: 3, nombre: 'María Rodríguez', mensaje: 'Gracias por la ayuda', tiempo: '10:15' }
  ];

  return (
    <div className="page-container">
      <NavBar />
      <div className="page-content">
        <h1>Chats</h1>
        <div className="chats-list">
          {chats.map((chat) => (
            <div key={chat.id} className="chat-card">
              <div className="chat-avatar">
                {chat.nombre.charAt(0)}
              </div>
              <div className="chat-info">
                <div className="chat-header">
                  <h3>{chat.nombre}</h3>
                  <span className="chat-time">{chat.tiempo}</span>
                </div>
                <p className="chat-message">{chat.mensaje}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;