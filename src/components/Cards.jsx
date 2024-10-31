import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cards.css';

const Cards = () => {
  const navigate = useNavigate();
  
  const cards = [
    {
      title: 'Historias',
      description: 'Explora historias inspiradoras de nuestra comunidad',
      path: '/historias',
      image: '/images/historias.png'
    },
    {
      title: 'Publicaciones Recientes',
      description: 'Descubre las últimas actualizaciones y contenido nuevo',
      path: '/recientes',
      image: '/images/publicacionesRecientes.png'
    },
    {
      title: 'Mis Favoritos',
      description: 'Accede a tu colección personal de contenidos guardados',
      path: '/favoritos',
      image: '/images/favoritos.png'
    },
    {
      title: 'Mis Publicaciones',
      description: 'Gestiona y revisa todas tus publicaciones en un solo lugar',
      path: '/mis-publicaciones',
      image: '/images/misPublicaciones.png'
    },
    {
      title: 'Publicar',
      description: 'Comparte tu historia y experiencias con nuestra comunidad',
      path: '/publicar',
      image: '/images/upload.png'
    },
    {
      title: 'Perfil',
      description: 'Administra tu información personal y preferencias de cuenta',
      path: '/perfil',
      image: '/images/perfil.png'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navigation-grid">
      {cards.map((card) => (
        <div key={card.title} className="nav-card">
          <div className="nav-card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="nav-card-content">
            <h2 className="nav-card-title">{card.title}</h2>
            <p className="nav-card-description">{card.description}</p>
          </div>
          <div className="nav-card-overlay" />
          <button 
            onClick={() => handleNavigation(card.path)}
            className="nav-card-button"
          >
            Ver más
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;