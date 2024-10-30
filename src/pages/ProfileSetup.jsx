import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/ProfileSetup.css';

function ProfileSetup() {
  const registros = useSelector((state) => state.formulario.registros);
  const nombreUsuario = registros.length > 0 ? registros[registros.length - 1].nombre : '';

  const [profileData, setProfileData] = useState({
    usuarioNom: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del perfil:', profileData);

    //Agregar la lógica para enviar los datos
  };

  return (
    <div className="profile-setup-container">
      <div className="profile-setup-content">
        <div className="welcome-section">
          <h1 className="welcome-title">¡Hola {nombreUsuario}!</h1>
          <p className="welcome-subtitle">Vamos a realizar configuraciones para tu perfil</p>
        </div>

        <form onSubmit={handleSubmit} className="profile-setup-form">
          <div className="form-group">
            <label className="form-label">Nombre de Usuario</label>
            <input
              type="text"
              name="usuarioNom"
              value={profileData.usuarioNom}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Idiomas Dominados</label>
            <input
              type="text"
              name="idiomasDomin"

              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              type="date"
              name="fechaNacimiento"

              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">País</label>
            <input
              type="text"
              name="pais"
              value={profileData.pais}
              onChange={handleChange}
              className="form-input"
              placeholder="¿Dónde vives?"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Intereses</label>
            <input
              type="text"
              name="intereses"

              onChange={handleChange}
              className="form-input"
              placeholder="Tecnología, Viajes, Música..."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Biografía</label>
            <textarea
              name="biografia"

              onChange={handleChange}
              className="form-textarea"
              placeholder="Cuéntanos un poco sobre ti..."
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Guardar Perfil
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileSetup;