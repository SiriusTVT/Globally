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
        {/* Primera sección (Hero) */}
        <section className="hm-section">
        <div className="hm-section-content hm-section-left-image">
            <div className="hm-text-content hm-animate-fade-in">  
              <h2 className="hm-section-subtitle">
              Un mundo de historias, sin barreras de idioma
              </h2>
              <div>
                <p className="hm-section-text">     
                ✨Chats traducidos instantáneamente
                </p>
                <p className="hm-section-text">
                  🌍Conoce personas de todo el mundo
                </p>
 
              </div>
            </div>
            <div className="hm-image-container">
              <img 
                src="/api/placeholder/600/400" 
                alt="Demostración de chat traducido" 
              />
            </div>
          </div>
        </section>

        {/* Segunda sección */}
        <section className="hm-section">
          <div className="hm-section-content hm-section-right-image">
            <div className="hm-text-content hm-animate-fade-in">
              <h2 className="hm-section-title">Comunícate sin límites</h2>
              <p className="hm-section-subtitle">
              Tu cultura, tu idioma, tu historia - compartida con el mundo.
              </p>
              <p className="hm-section-text">
                Texto
              </p>
            </div>
            <div className="hm-image-container">
              <img 
                src="/api/placeholder/600/400" 
                alt="Demostración de chat traducido" 
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
                Mejora tu idioma mientras exploras nuevas culturas
              </p>
              <p className="hm-section-text">
                texto
              </p>
            </div>
            <div className="hm-image-container">
              <img 
                src="/api/placeholder/600/400" 
                alt="Conexiones globales" 
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;