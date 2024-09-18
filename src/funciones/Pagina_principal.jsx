import { useState } from "react";
import BarraNav from './BarraNav';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import React from 'react'
import '../Estilos/Pagina_principal.css' // Asegúrate de importar el archivo CSS

function Pagina_principal () {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="fondo">
      <BarraNav setActivePage={setActivePage} />
      <div className="contenido">
        {renderPage()}
      </div>
    </div>
  );
};

export default Pagina_principal;