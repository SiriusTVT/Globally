import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Pages.css';

const Explorar = () => {
  return (
    <div className="page-container">
      <NavBar />
      <div className="page-content">
        <h1>Explorar</h1>
        <div className="search-section">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="search-input"
          />
          <button className="search-button">Buscar</button>
        </div>
        <div className="cards-grid">
          {/* Ejemplo de tarjetas */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="card">
              <div className="card-content">
                <h3>Elemento {item}</h3>
                <p>Descripción del elemento de exploración</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorar;