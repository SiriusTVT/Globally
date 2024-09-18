import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Estilos/Inicio_sesion.css';
import '../Estilos/Botones.css';

// Función que representa la página de inicio de sesión
function Inicio_sesion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // Manejar el cambio en los campos del formulario
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // Manejar el evento de submit del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes hacer lo que necesites con los datos del formulario
        console.log(formData);
    };

    // Manejar el evento de click en el botón de regresar
    const handleBack = () => {
        navigate('/');
        console.log('Botón de regresar presionado');
    };

    function handleClick() {
        navigate('/pagina_principal');
        console.log('click');
    }

    return (
        <div>
            <div className="background-overlay"></div>

            <div className="content">
                <h1 className='title'>Inicio de Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p className='label'>Email: </p>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email'
                            required
                            className='input-field'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <p className='label'>Contraseña: </p>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Contraseña'
                            required
                            className='input-field'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className='boton-inicio-sesion' type='submit' onClick={handleClick}>Iniciar Sesión </button>
                    <button className='boton-regresar' type='button' onClick={handleBack}>Regresar</button>
                </form>
            </div>
        </div>
    );
}

export default Inicio_sesion;