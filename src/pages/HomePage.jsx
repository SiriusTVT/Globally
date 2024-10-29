import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Globally - Inicio';
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="hm-container">
      <nav className="hm-navbar">
        <div className="hm-nav-content">
          <h1 className="hm-section-title">Globally</h1>
          <div className="hm-nav-buttons">
            <button 
              className="hm-btn-login"
              onClick={handleLogin}
              aria-label="Iniciar Sesión">
              Iniciar Sesión
            </button>
            <button 
              className="hm-btn-register"
              onClick={handleRegister}
              aria-label="Registrarse">
              Registrarse
            </button>
          </div>
        </div>
      </nav>
      
      <main>
        <section className="hm-section">
        <div className="hm-section-content hm-section-left-image">
            <div className="hm-text-content hm-animate-fade-in">  
              <h2 className="hm-section-title">
              Un mundo de historias, sin barreras lingüisticas.
              </h2>
              <div>
                <p className="hm-section-subtitle">   
                  🤝Conecta, comparte y aprende en cualquier idioma  
                </p>
                <p className="hm-section-subtitle">
                  🌍Conoce personas de todo el mundo
                </p>
                <p className="hm-section-subtitle">
                  ✨Chats traducidos instantáneamente
                </p>
              </div>
            </div>
            <div className="hm-image-container">
              <img src="/images/PersonasConversando.jpg" 
                alt="Personas de diversas culturas conversando" 
              />
            </div>
          </div>
        </section>

        {/* Segunda sección */}
        <section className="hm-section">
          <div className="hm-section-content hm-section-right-image">
            <div className="hm-text-content hm-animate-fade-in">
              <h2 className="hm-section-title">Aprende a tu ritmo</h2>
              <p className="hm-section-subtitle">
              Tu cultura, tu idioma, tu historia - compartida con el mundo.
              </p>
              <p className="hm-section-text">
              Explora publicaciones compartidas por usuarios de todo el mundo 
              en su idioma nativo. Desde historias cotidianas hasta reflexiones profundas, 
              cada publicación es una oportunidad para mejorar al nivel que más te convenga.
              </p>
            </div>
            <div className="hm-image-container">
              <img 
                src="/images/Publicaciones.jpg" 
                alt="Una chica leyendo y su imaginacion se muestra en nubes a su alrededor" 
              />
            </div>
          </div>
        </section>

        {/* Tercera sección */}
        <section className="hm-section">
          <div className="hm-section-content hm-section-left-image">
            <div className="hm-text-content hm-animate-fade-in">
              <h2 className="hm-section-title">Expande tus horizontes</h2>
              <p className="hm-section-subtitle">
                Conecta Sin Fronteras
              </p>
              <p className="hm-section-text">
              Gracias a nuestro sistema integrado de traducción de chat, 
              las conversaciones fluyen naturalmente. Interactúa con personas 
              de todo el mundo, haz preguntas y forma conexiones significativas
              sin preocuparte por las barreras del idioma.
              </p>
            </div>
            <div className="hm-image-container">
              <img 
                src="/images/Computadora.jpg" 
                alt="Una computadora que despliega muchas aplicaciones de conversación" 
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;