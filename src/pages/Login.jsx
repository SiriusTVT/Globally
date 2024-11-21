import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

function Login() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', formData);
            
            if (response.status === 200) {
                // Guardar la información del usuario en localStorage
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('userName', response.data.nombre);
                localStorage.setItem('isAuthenticated', 'true');
                
                // Log para verificar que se guardó correctamente
                console.log('Datos de autenticación guardados:', {
                    userId: response.data.userId,
                    nombre: response.data.nombre,
                    isAuthenticated: true
                });

                navigate('/mainpage');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorMessage(error.response?.data?.error || 'Error al iniciar sesión');
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    // Verificar si ya hay una sesión activa al cargar el componente
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            navigate('/mainpage');
        }
    }, [navigate]);

    return (
        <div className="login-page-container">
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Inicio de Sesión</h1>
                    
                    <form onSubmit={handleSubmit} className="login-form">
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <div className="login-form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="tucorreo@ejemplo.com"
                                required
                                className="login-input"
                                value={formData.email}
                                onChange={handleInputChange}
                                autoComplete="email"
                            />
                        </div>
                        <div className="login-form-group">
                            <label> Contraseña: </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="login-input"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleInputChange}
                                autoComplete="current-password"
                            />
                        </div>
                        <div className="login-button-group">
                            <button 
                                className="login-submit-btn" 
                                type="submit"
                            >
                                Iniciar Sesión
                            </button>
                            
                            <button 
                                className="login-back-btn" 
                                type="button" 
                                onClick={handleBack}
                            >
                                Regresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="login-right-image">
                <img 
                    src="/images/Login.jpg" 
                    alt="Una chica leyendo y su imaginacion se muestra en nubes a su alrededor"
                />
            </div>
        </div>
    );
}

export default Login;