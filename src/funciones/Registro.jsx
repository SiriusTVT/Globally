import React, { useState } from 'react';
import '../Estilos/Registro.css';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div>
      <div className="background-overlay"></div>

      <div className="content">
        <h1 className='title'>Registro</h1>
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
          <button type="submit" className='button'>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
