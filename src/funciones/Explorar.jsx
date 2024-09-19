import React from 'react';
import '../Estilos/Explorar.css' 
import Card from './Card';
import imagen1 from '../imagenes/Persona1.jpg';
import imagen2 from '../imagenes/Persona2.jpg';
import imagen3 from '../imagenes/Persona3.jpg';
import imagen4 from '../imagenes/Persona4.jpg';
import imagen5 from '../imagenes/Persona5.jpg';
import imagen6 from '../imagenes/Persona6.jpg';

function Explorar () {
  const contactos = [
    { 
      image: imagen1, 
      name: 'María Gómez', 
      description: 'Idioma: Español' 
    },
    { 
      image: imagen2, 
      name: 'Hans Müller',
      description: 'Idioma: Alemán' 
    },
    { 
      image: imagen3, 
      name: 'Joao Da Silva', 
      description: 'Idioma: Portuguese' 
    },
    { 
      image: imagen4,
      name: 'Giulia Bianchi', 
      description: 'Idioma: Italiana' 
    },
    { 
      image: imagen5,
      name: 'Marco Rossi', 
      description: 'Idioma: Italiano' 
    },
    { 
      image: imagen6,
      name: 'Marie Dubois', 
      description: 'Idioma: Francés' 
    }
  ];

  return (
    <div className="home-container">
      <h1>Contactos Agregados Recientemente</h1>
      <div className="cards-container">
        {contactos.map((contacto, index) => (
          <Card
            key={index}
            image={contacto.image}
            name={contacto.name}
            description={contacto.description}
          />
        ))}
      </div>
      
      <div className="search-section">
        <h2>Buscar</h2>
      </div>

      {/* Agregar Message Box debajo de "Buscar" */}
      <div className="message-box">
        <textarea placeholder="Escribe tu mensaje aquí..." />
        <button type="button">Enviar</button>
      </div>

    </div>
  );
};

export default Explorar;
