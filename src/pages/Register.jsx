import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../Estilos/Register.css';
import { useDispatch } from 'react-redux';
import { addData } from '../features/formulario/formularioSlice.js';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Globally - Registro';
  }, []);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setError('');
    dispatch(addData(formData));
    console.log('Datos del formulario:', formData);
  };

  const handleBack = () => {
    navigate('/');
    console.log('Botón de regresar presionado');
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h1 className="register-title">Registro</h1>
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="register-form-group">
            <label className="register-label">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="register-input"
              autoComplete="name"
            />
          </div>

          <div className="register-form-group">
            <label className="register-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="register-input"
              autoComplete="email"
            />
          </div>

          <div className="register-form-group">
            <label  className="register-label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              required
              className="register-input"
              autoComplete="new-password"
            />
          </div>

          <div className="register-form-group">
            <label  className="register-label">
              Confirmar Contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirma tu contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="register-input"
              autoComplete="new-password"
            />
          </div>

          {error && <div className="register-error">{error}</div>}

          <div className="register-button-group">
            <button className="register-submit-btn" type="submit">
              Registrarse
            </button>
            <button className="register-back-btn" type="button" onClick={handleBack}>
              Regresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;