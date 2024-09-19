import React from 'react';
import '../Estilos/Explorar.css' 
import Card from './Card';
function Explorar () {
  const contactos = [
    { 
      image: '../imagenes/Persona1.jpg', 
      name: 'Juan Pérez', 
      description: 'Amigo de la infancia.' 
    },
    { 
      image: '../imgenes/Persona1.jpg', 
      name: 'María Gómez', 
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
