import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Estilos/Registro.css';
import '../Estilos/Botones.css';

function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Manejar el evento de submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData); // Imprimir los datos del formulario
  };

  // Manejar el evento de click en el botón de regresar
  const handleBack = () => {
    navigate('/');
    console.log('Botón de regresar presionado');
  };

  return (
    <div>
      <div className="background-overlay"></div>

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
          <div>
            <button className='boton-registro' type='submit'>
              Registrarse
            </button>

            <button className='boton-regresar' type='button' onClick={handleBack}>
              X
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Registro;
