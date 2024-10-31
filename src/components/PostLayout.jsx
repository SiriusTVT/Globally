import React from 'react';
import '../styles/PostLayout.css';

const PostLayout = () => {
  const mainNews = {
    category: "COMMENTARY",
    title: "TRUMP'S PLOT AGAINST AMERICA",
    subtitle: "A leading historian looks back at Philip Roth's novel and how it perfectly predicts the rise of Trump and his willing collaborators",
    author: "By SEAN WILENTZ"
  };

  const sideNews = [
    {
      title: "CYNDI LAUPER STILL WANTS TO HAVE FUN",
      subtitle: "Latest updates and news about the artist",
      author: "By ROB SHEFFIELD",
      category: "THE LAST WORD"
    },
    {
      title: "TERI GARR WAS A COMEDIC GENIUS AHEAD OF HER TIME",
      subtitle: "A tribute to the legendary actress",
      author: "By ALAN SEPINWALL",
      category: "TRIBUTE"
    }
  ];

  const leftNews = [
    {
      title: "YSL Trial: Two More Defendants Take Plea Deals in Young Thug's RICO Case",
      subtitle: "Young Thug is now on trial with only two other co-defendants",
      author: "By NANCY DILLON"
    },
    {
      title: "On 'Chromakopia,' Tyler, the Creator Has to Deal With the Truth",
      subtitle: "His eighth studio album finds Tyler at the end of the line with his own mythology",
      author: "By JEFF IHAZA"
    },
    {
      title: "Megan Thee Stallion Sues Tory Lanez Supporter for Cyberstalking, Deepfake Porn",
      subtitle: "Suit accuses blogger Milagro Gramz of harassment and spreading falsehoods about the rapper for years",
      author: "By MANKAPRR CONTEH"
    }
  ];

  return (
    <div className="news-container">
      <div className="news-grid">
        {/* Left Column */}
        <div className="side-column">
          {leftNews.map((news, index) => (
            <article key={index} className="article-card">
              <h2 className="article-title">
                <button className="article-button" aria-label={`Read article: ${news.title}`}>
                  {news.title}
                </button>
              </h2>
              <p className="article-description">{news.subtitle}</p>
              <p className="article-author">{news.author}</p>
            </article>
          ))}
        </div>

        {/* Center Column - Main Article */}
        <article className="main-article">
          <img 
            src="/api/placeholder/800/600" 
            alt="Main article cover" 
            className="main-image"
          />
          <div>
            <span className="category-tag">{mainNews.category}</span>
            <h1 className="main-title">
              <button className="article-button" aria-label="Read main article">
                {mainNews.title}
              </button>
            </h1>
            <p className="article-description">{mainNews.subtitle}</p>
            <p className="article-author">{mainNews.author}</p>
          </div>
        </article>

        {/* Right Column */}
        <div className="side-column">
          {sideNews.map((news, index) => (
            <article key={index} className="article-card">
              <img 
                src="/api/placeholder/400/300" 
                alt="Article thumbnail" 
                className="thumbnail"
              />
              <span className="category-tag">{news.category}</span>
              <h2 className="article-title">
                <button 
                  className="article-button" 
                  aria-label={`Read article: ${news.title}`}
                >
                  {news.title}
                </button>
              </h2>
              <p className="article-description">{news.subtitle}</p>
              <p className="article-author">{news.author}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostLayout;