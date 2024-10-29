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
      image: '/api/placeholder/400/320'
    },
    {
      title: 'Publicaciones Recientes',
      description: 'Descubre las últimas actualizaciones y contenido nuevo',
      path: '/recientes',
      image: '/api/placeholder/400/320'
    },
    {
      title: 'Mis Favoritos',
      description: 'Accede a tu colección personal de contenidos guardados',
      path: '/favoritos',
      image: '/api/placeholder/400/320'
    },
    {
      title: 'Mis Publicaciones',
      description: 'Gestiona y revisa todas tus publicaciones en un solo lugar',
      path: '/mis-publicaciones',
      image: '/api/placeholder/400/320'
    },
    {
      title: 'Publicar',
      description: 'Comparte tu historia y experiencias con nuestra comunidad',
      path: '/publicar',
      image: '/api/placeholder/400/320'
    }
  ];

  return (
    <div className="navigation-grid">
      {cards.map((card) => (
        <button
          key={card.title}
          onClick={() => navigate(card.path)}
          className="nav-card"
        >
          <div className="nav-card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="nav-card-content">
            <h2 className="nav-card-title">{card.title}</h2>
            <p className="nav-card-description">{card.description}</p>
          </div>
          <div className="nav-card-overlay" />
        </button>
      ))}
    </div>
  );
};

export default Cards;