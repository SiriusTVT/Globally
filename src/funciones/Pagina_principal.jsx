import { useState } from "react";
import { useEffect } from "react";

import BarraNav from './BarraNav';
import Contactos from './Contactos';
import Chats from './Chats';
import Explorar from './Explorar';
import React from 'react'
import '../Estilos/Pagina_principal.css' 

function Pagina_principal () {
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

export default Pagina_principal;