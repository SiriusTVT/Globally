import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Pages.css';
import '../styles/Contactos.css';

const Contactos = () => {
  const contactos = [
    { id: 1, nombre: 'Ana García', email: 'ana@ejemplo.com' },
    { id: 2, nombre: 'Carlos López', email: 'carlos@ejemplo.com' },
    { id: 3, nombre: 'María Rodríguez', email: 'maria@ejemplo.com' },
  ];

  return (
    <div className="page-container">
      <NavBar />
      <div className="page-content">
        <h1>Contactos</h1>
        <div className="contacts-list">
          {contactos.map((contacto) => (
            <div key={contacto.id} className="contact-card">
              <div className="contact-avatar">
                {contacto.nombre.charAt(0)}
              </div>
              <div className="contact-info">
                <h3>{contacto.nombre}</h3>
                <p>{contacto.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contactos;