import { useState } from "react";
import { useEffect } from "react";

import BarraNav from '../funciones/BarraNav';
import Contactos from '../funciones/Contactos';
import Chats from '../funciones/Chats';
import Explorar from '../funciones/Explorar';
import React from 'react'
import '../Estilos/MainPage.css' 

function MainPage () {
  const [activePage, setActivePage] = useState('Explorar');
  
  useEffect(() => {
    document.title = `Globally - ${activePage}`;
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'Explorar':
        return <Explorar />;
      case 'Contactos':
        return <Contactos />;
      case 'Chats':
        return <Chats />;
      default:
        return <Explorar />;
    }
  };

  return (
    <div>
      <BarraNav setActivePage={setActivePage} />
      <div className="contenido">
        {renderPage()}
      </div>
    </div>
  );
};

export default MainPage;