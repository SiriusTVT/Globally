import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Estilos/Login.css';
import '../Estilos/Botones.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      navigate('/');
    } catch (error) {
      console.error('Error de autenticación:', error);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body p-5">
            <h1 className="card-title text-center h2 fw-bold mb-5">Inicio de Sesión</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: "500px"}}>
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg py-3"
                  id="email"
                  name="email"
                  placeholder="ejemplo@correo.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  aria-label="Email address"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="form-label fw-semibold">
                  Contraseña:
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg py-3"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  aria-label="Password"
                />
              </div>
              <div className="d-grid gap-3 mt-4">
                <button 
                  className="btn btn-primary btn-lg py-3 fw-semibold"
                  type="submit"
                >
                  Iniciar Sesión
                </button>
                <button 
                  className="btn btn-outline-secondary btn-lg py-3"
                  type="button"
                  onClick={handleBack}
                >
                  Regresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;