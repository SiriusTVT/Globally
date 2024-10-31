import React from 'react';
import '../styles/PostLayout.css';

const PostLayout = () => {
  const mainPosts = {
    category: "FEATURED",
    title: "C'est ma vie",
    subtitle: "La vie en France est très différente de celle au Canada. Ici, il fait toujours chaud. ",
    author: "Por: Angélica Summer"
  };

  const sidePosts = [
    {
      title: "Sustainable Living in Modern Cities",
      subtitle: "Innovative approaches to urban environmental challenges",
      author: "By Research Team",
      category: "ENVIRONMENT"
    },
    {
      title: "The Evolution of Remote Work",
      subtitle: "Changing workplace dynamics in the digital age",
      author: "By Future Team",
      category: "WORKPLACE"
    }
  ];

  const leftPosts = [
    {
      title: "Meu intercâmbio",
      subtitle: "Eu adoro a Colômbia e adoro viver aquí. Penso que foi a melhor escolha para esse ano. E este website é maravilhoso!",
      author: "Por Hernan A. Egydio",
      image: "/images/HernanEgydio.jpg"
    },
    {
      title: "Global Food Security Initiatives",
      subtitle: "New approaches to ensuring sustainable food supply",
      author: "By Policy Team",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Advances in Healthcare Technology",
      subtitle: "How AI is revolutionizing medical diagnosis",
      author: "By Health Team",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="posts-container">
      <div className="posts-grid">
        {/* Left Column */}
        <div className="side-column">
          {leftPosts.map((posts, index) => (
            <article key={index} className="article-card">
              <img 
                src={posts.image} 
                alt={`Thumbnail for ${posts.title}`} 
                className="thumbnail"
              />
              <h2 className="article-title">
                <button className="article-button" aria-label={`Read article: ${posts.title}`}>
                  {posts.title}
                </button>
              </h2>
              <p className="article-description">{posts.subtitle}</p>
              <p className="article-author">{posts.author}</p>
            </article>
          ))}
        </div>

        {/* Center Column - Main Article */}
        <article className="main-article">
          <img 
            src="/images/JessicaSummer.jpg" 
            alt="Main article cover" 
            className="main-image"
          />
          <div>
            <span className="category-tag">{mainPosts.category}</span>
            <h1 className="main-title">
              <button className="article-button" aria-label="Read main article">
                {mainPosts.title}
              </button>
            </h1>
            <p className="article-description">{mainPosts.subtitle}</p>
            <p className="article-author">{mainPosts.author}</p>
          </div>
        </article>

        {/* Right Column */}
        <div className="side-column">
          {sidePosts.map((posts, index) => (
            <article key={index} className="article-card">
              <img 
                src="/api/placeholder/400/300" 
                alt="Article thumbnail" 
                className="thumbnail"
              />
              <span className="category-tag">{posts.category}</span>
              <h2 className="article-title">
                <button 
                  className="article-button" 
                  aria-label={`Read article: ${posts.title}`}
                >
                  {posts.title}
                </button>
              </h2>
              <p className="article-description">{posts.subtitle}</p>
              <p className="article-author">{posts.author}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostLayout;