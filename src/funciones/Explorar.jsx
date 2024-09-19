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
      description: 'Idioma: Inglés' 
    },
    { 
      image: imagen3, 
      name: 'Joao Da Silva', 
      description: 'Idioma: Inglés' 
    },
    { 
      image: imagen4,
      name: 'Giulia Bianchi', 
      description: 'Idioma: Español' 
    },
    { 
      image: imagen5,
      name: 'Marco Rossi', 
      description: 'Idioma: Español' 
    },
    { 
      image: imagen6,
      name: 'Marie Dubois', 
      description: 'Idioma: Inglés' 
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
        <h2>Agregar Amigo</h2>
      </div>

      <div className="message-box">
        <textarea placeholder="Ingresar el ID de Contacto" />
        <button type="button">Enviar</button>
      </div>

    </div>
  );
};

export default Explorar;
