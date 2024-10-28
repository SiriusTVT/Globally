import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Estilos/Registro.css';
import '../Estilos/Botones.css';
import { useDispatch } from 'react-redux';
import {addData} from '../features/formulario/formularioSlice.js';

function Registro() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState, // Mantener los valores anteriores
      [name]: value // Actualizar el valor del campo que cambió
    }));
  };

  // Manejar el evento de submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    
    dispatch(addData(formData)); // Añadir los datos al store

    console.log('Datos del formulario:', formData); // Imprimir los datos del formulario
  };

  // Manejar el evento de click en el botón de regresar
  const handleBack = () => {
    navigate('/');
    console.log('Botón de regresar presionado');
  };

  return (
    <div>
      <div className="content">
        <h1 className='title2'>Registro</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p className='label'>Nombre: </p>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder='Nombre'
              value={formData.nombre}
              onChange={handleChange}
              required
              className='input-field'
            />
          </div>
          <div>
            <p className='label'>Email: </p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
              className='input-field'
            />
          </div>
          <div>
            <p className='label'>Contraseña: </p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Contraseña'
              value={formData.password}
              onChange={handleChange}
              required
              className='input-field'
            />
          </div>
          <div>
            <p className='label'>Confirmar Contraseña: </p>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder='Confirmar Contraseña'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className='input-field'
            />
          </div>
          {/* // Mostrar mensaje de error si existe */}
          {error && <p className='error-message'>{error}</p>} 
          <div>
            <button className='boton-registro' type='submit'>
              Registrarse
            </button>

            <button className='boton-regresar' type='button' onClick={handleBack}>
              Regresar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Registro;
