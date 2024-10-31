import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Cards.css';

const Cards = () => {
  const navigate = useNavigate();
  
  const cards = [
    {
      title: 'Destacados',
      description: 'Descubre las historias que más encantaron a la comunidad',
      path: '/destacados',
      image: '/images/historias.png'
    },
    {
      title: 'Publicaciones de Amigos',
      description: 'Sigue el progeso de tus amigos y lee sus últimas historias',
      path: '/recientes',
      image: '/images/publicacionesRecientes.png'
    },
    {
      title: 'Mis Favoritos',
      description: 'Tu colección personal de historias. Guarda publicaciones para practicar y mejorar tus idiomas preferidos',
      path: '/favoritos',
      image: '/images/favoritos.png'
    },
    {
      title: 'Mis Publicaciones',
      description: 'Tu espacio creativo: revisa y gestiona las historias que has compartido',
      path: '/mis-publicaciones',
      image: '/images/misPublicaciones.png'
    },
    {
      title: 'Publicar',
      description: '¿Listo para compartir tu voz? Escribe y comparte historias en los idiomas que dominas. !Ayuda a otros a aprender¡',
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