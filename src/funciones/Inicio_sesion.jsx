import React, { useState } from 'react';

function Inicio_sesion() {
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
        // Aquí puedes hacer lo que necesites con los datos del formulario
        console.log(formData);
    };

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
                    <button className='button' type='submit'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default Inicio_sesion;