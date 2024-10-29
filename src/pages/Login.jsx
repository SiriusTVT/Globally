import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../Estilos/Login.css';

function Login() {
    const navigate = useNavigate();
    
    useEffect(() => {
        document.title = 'Globally - Inicio de Sesión';
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/mainpage');
        console.log(formData);
    };

    const handleBack = () => {
        navigate('/');
        console.log('Botón de regresar presionado');
    };

    return (
        <div className="container">
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tucorreo@ejemplo.com"
                            required
                            className="input-field"
                            value={formData.email}
                            onChange={handleInputChange}
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label className="label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            required
                            className="input-field"
                            value={formData.password}
                            onChange={handleInputChange}
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="button-group">
                        <button 
                            className="boton-inicio-sesion" 
                            type="submit"
                        >
                            Iniciar Sesión
                        </button>
                        
                        <button 
                            className="boton-regresar" 
                            type="button" 
                            onClick={handleBack}
                        >
                            Regresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;