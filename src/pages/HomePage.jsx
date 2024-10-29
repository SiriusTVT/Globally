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
    <div className="homepage-container">
      <nav className="navbar">
        <div className="nav-content">
          <span className="logo-text">Globally</span>
          <div className="nav-buttons">
            <button 
              className="btn-login"
              onClick={handleLogin}
              aria-label="Iniciar Sesión"
            >
              Iniciar Sesión
            </button>
            <button 
              className="btn-register"
              onClick={handleRegister}
              aria-label="Registrarse"
            >
              Registrarse
            </button>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        <section className="hero-section">
          <div className="text-content">
            <h1 className="main-title">Globally</h1>
            <h2 className="subtitle">
              Conecta al mundo, sin barreras lingüísticas.
            </h2>
            <div className="features">
              <p className="feature-item">
                <span className="feature-icon">✨</span>
                Chats traducidos instantáneamente
              </p>
              <p className="feature-item">
                <span className="feature-icon">🌍</span>
                Conoce personas de todo el mundo
              </p>
            </div>
          </div>
          <div className="background-decoration"></div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;