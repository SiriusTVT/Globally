import React from 'react';
import '../styles/PostLayout.css';

const PostLayout = () => {
  const mainPost = {
    category: "VIAJES",
    title: "Meu intercâmbio",
    subtitle: "Eu adoro a Colômbia e adoro viver aquí. Penso que foi a melhor escolha para esse ano. E este website é maravilhoso!",
    author: "Por Hernan A. Egydio",
    image: "/images/HernanEgydio.jpg"
  };

  const leftPosts = [
    {
      title: "C'est ma vie",
      subtitle: "La vie en France est très différente de celle au Canada. Ici, il fait toujours chaud. ",
      author: "Por: Angelica Summer",
      image: "/images/AngelicaSummer.jpg"
    },
    {
      title: "Iniciativas de Seguridad Alimentaria",
      subtitle: "Nuevos enfoques para garantizar el suministro de alimentos",
      author: "Por Equipo de Políticas",
      image: "/api/placeholder/400/300"
    }
  ];

  const rightPosts = [
    {
      title: "Vida Sostenible en Ciudades Modernas",
      subtitle: "Enfoques innovadores para desafíos ambientales urbanos",
      author: "Por Equipo de Investigación",
      image: "/api/placeholder/400/300"
    },
    {
      title: "La Evolución del Trabajo Remoto",
      subtitle: "Cambios en la dinámica laboral en la era digital",
      author: "Por Equipo Futuro",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {/* Izquierda*/}
        <div className="side-column">
          {leftPosts.map((post, index) => (
            <article key={index} className="article-card">
              <img 
                src={post.image}
                alt={`Portada para ${post.title}`} 
                className="thumbnail"
              />
              <h2 className="article-title">
                <button className="article-button" aria-label={`Leer artículo: ${post.title}`}>
                  {post.title}
                </button>
              </h2>
              <p className="article-description">{post.subtitle}</p>
              <p className="article-author">{post.author}</p>
            </article>
          ))}
        </div>

        {/* Centro */}
        <article className="main-article">
          <img 
            src={mainPost.image}
            alt="Portada del artículo principal" 
            className="main-image"
          />
          <div>
            <span className="category-tag">{mainPost.category}</span>
            <h1 className="main-title">
              <button className="article-button" aria-label="Leer artículo principal">
                {mainPost.title}
              </button>
            </h1>
            <p className="article-description">{mainPost.subtitle}</p>
            <p className="article-author">{mainPost.author}</p>
          </div>
        </article>

        {/* Derecha */}
        <div className="side-column">
          {rightPosts.map((post, index) => (
            <article key={index} className="article-card">
              <img 
                src={post.image}
                alt={`Portada para ${post.title}`} 
                className="thumbnail"
              />
              <h2 className="article-title">
                <button className="article-button" aria-label={`Leer artículo: ${post.title}`}>
                  {post.title}
                </button>
              </h2>
              <p className="article-description">{post.subtitle}</p>
              <p className="article-author">{post.author}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostLayout;