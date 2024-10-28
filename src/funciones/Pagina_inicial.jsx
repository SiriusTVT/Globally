import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Estilos/Pagina_inicial.css';
import '../Estilos/Botones.css';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Globally - Inicio';
  }, []);

  const handleLogin = () => {
    navigate('/inicio_sesion');
  };

  const handleRegister = () => {
    navigate('/registro');
  };

  return (
    <>
      <nav className="navbar">
        <div className="auth-buttons">
          <button className="boton-inicio-sesion" onClick={handleLogin}
            aria-label="Iniciar Sesión"> Iniciar Sesión
          </button>
          <button className="boton-registro" onClick={handleRegister}
            aria-label="Registrarse"> Registrarse
          </button>
        </div>
      </nav>

      <div className="content">
        <main>
          <section>
            <h1 className="titulo">Globally</h1>
            <h2 className="parrafo">
              Conecta al mundo, sin barreras lingüísticas.
            </h2>
            <div>
              <p className="parrafo">Chats traducidos instantáneamente</p>
              <p className="parrafo">Conoce personas de todo el mundo</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;
