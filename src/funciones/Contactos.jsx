import React from 'react';
import '../Estilos/Contactos.css'
import { useSelector } from 'react-redux';

function Contactos () {
  const Prueba=useSelector(state => state.formulario)
  console.log(Prueba);
  
  return (
    <div>
      <h1 className="title">Contactos</h1>
      <p className='title'>Página para administrar</p>
    </div>
  );
};

export default Contactos;
