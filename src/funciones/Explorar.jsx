import React from 'react';
import '../Estilos/Explorar.css' 
import Card from './Card';
import imagen1 from '../imagenes/Persona1.jpg';
import imagen2 from '../imagenes/Persona2.jpg';
function Explorar () {
  const contactos = [
    { 
      image: imagen1, 
      name: 'María Gómez', 
      description: 'Amigo de la infancia.' 
    },
    { 
      image: imagen2, 
      name: 'Juan Pérez',
      description: 'Compañera de trabajo.' 
    },
    { 
      image: '../imgenes/Persona1.jpg', 
      name: 'Carlos Rodríguez', 
      description: 'Vecino y amigo cercano.' 
    },
    { 
      image: '../imgenes/Persona1.jpg', 
      name: 'Laura Torres', 
      description: 'Amiga del colegio.' 
    },
    { 
      image: '../imagenes/Img_inicio.jpg', 
      name: 'Pedro Martínez', 
      description: 'Colega en la oficina.' 
    },
    { 
      image: '../imgenes/Persona1.jpg', 
      name: 'Ana Fernández', 
      description: 'Prima lejana.' 
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
    </div>
  );
};

export default Explorar;
