import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/ProfileSetup.css';

function ProfileSetup() {
  const registros = useSelector((state) => state.formulario.registros);
  const nombreUsuario = registros.length > 0 ? registros[registros.length - 1].nombre : '';
  const emailUsuario = registros.length > 0 ? registros[registros.length - 1].email : '';
  const navigate = useNavigate();
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const idiomas = [
      'Español', 'Inglés', 'Francés', 'Portugués', 'Alemán',
      'Italiano', 'Ruso', 'Japonés'
  ];

  const [formData, setFormData] = useState({
      nombre: '',
      idiomasDominados: [],
      idiomasInteres: [],
      intereses: {
          tecnologia: false,
          deportes: false,
          arte: false,
          musica: false,
          viajes: false
      },
      profilePicture: null,
      profilePicturePreview: null
  });

  const [dropdowns, setDropdowns] = useState({
      dominados: false,
      interes: false
  });

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (!dropdownRef1.current?.contains(event.target)) {
              setDropdowns(prev => ({ ...prev, dominados: false }));
          }
          if (!dropdownRef2.current?.contains(event.target)) {
              setDropdowns(prev => ({ ...prev, interes: false }));
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    console.log('Registros:', registros);
  }, [registros]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prev => ({ ...prev, profilePicture: file, profilePicturePreview: reader.result }));
        };
        reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailUsuario) {
      console.error('No se encontró el email del usuario');
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append('email', emailUsuario);
    formDataToSend.append('nombre', formData.nombre);
    formDataToSend.append('idiomasDominados', JSON.stringify(formData.idiomasDominados));
    formDataToSend.append('idiomasInteres', JSON.stringify(formData.idiomasInteres));
    formDataToSend.append('intereses', JSON.stringify(formData.intereses));
    if (formData.profilePicture) {
      formDataToSend.append('profilePicture', formData.profilePicture);
    }
    try {
      const response = await fetch('/api/profile-setup', {
        method: 'POST',
        body: formDataToSend
      });
      if (response.ok) {
        navigate('/mainpage');
      } else {
        const data = await response.json();
        console.error(data.error || 'Error al actualizar el perfil');
      }
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
    }
  };

  const handleCancel = () => {
      navigate('/register');
  };

  const toggleDropdown = (dropdown) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const handleSelect = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item) 
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const removeItem = (field, item) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter(i => i !== item)
    }));
  };

  const handleCheckboxChange = (key) => {
    setFormData(prev => ({
      ...prev,
      intereses: {
        ...prev.intereses,
        [key]: !prev.intereses[key]
      }
    }));
  };

  return (
    <div className="ps-container">
      <form className="ps-form" onSubmit={handleSubmit}>
            <h1 className="ps-title">¡Hola {nombreUsuario}!</h1>
            <p className="ps-subtitle">Vamos a realizar configuraciones para tu perfil</p>
        <div className="ps-form-group">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            required
            className="ps-input"
            autoComplete="name"
            placeholder='Nombre Único como ID'
            value={formData.nombre}
            onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
          />
        </div>

        <div className="ps-form-group" ref={dropdownRef1}>
          <label>Idiomas que dominas</label>
          <div className="ps-tags">
            {formData.idiomasDominados.map(idioma => (
              <span key={idioma} className="ps-tag">
                {idioma}
                <button type="button" onClick={() => removeItem('idiomasDominados', idioma)}>×</button>
              </span>
            ))}
          </div>
          <button type="button" className="ps-select-button" 
                  onClick={() => toggleDropdown('dominados')}
          >
            Seleccionar idiomas ▼
          </button>
          {dropdowns.dominados && (
            <div className="ps-dropdown">
              {idiomas.map(idioma => (
                <div
                  key={idioma}
                  className={`ps-dropdown-item ${formData.idiomasDominados.includes(idioma) ? 'ps-selected' : ''}`}
                  onClick={() => handleSelect('idiomasDominados', idioma)}
                >
                  {idioma}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ps-form-group" ref={dropdownRef2}>
          <label>Idiomas de interés</label>
          <div className="ps-tags">
            {formData.idiomasInteres.map(idioma => (
              <span key={idioma} className="ps-tag">
                {idioma}
                <button type="button" onClick={() => removeItem('idiomasInteres', idioma)}>×</button>
              </span>
            ))}
          </div>
          <button 
            type="button" 
            className="ps-select-button"
            onClick={() => toggleDropdown('interes')}
          >
            Seleccionar idiomas ▼
          </button>
          {dropdowns.interes && (
            <div className="ps-dropdown">
              {idiomas.map(idioma => (
                <div
                  key={idioma}
                  className={`ps-dropdown-item ${formData.idiomasInteres.includes(idioma) ? 'ps-selected' : ''}`}
                  onClick={() => handleSelect('idiomasInteres', idioma)}
                >
                  {idioma}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="ps-form-group">
          <label>Intereses</label>
          <div className="ps-checkbox-group">
            {Object.entries({
              tecnologia: 'Tecnología',
              deportes: 'Deportes',
              arte: 'Arte',
              musica: 'Música',
              viajes: 'Viajes'
            }).map(([key, label]) => (
              <label key={key} className="ps-checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.intereses[key]}
                  onChange={() => handleCheckboxChange(key)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className="ps-form-group">
          <label>Foto de Perfil</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="ps-file-input"
          />
          {formData.profilePicturePreview && (
            <div className="ps-image-preview">
                <img src={formData.profilePicturePreview} alt="Vista previa de la imagen" />
            </div>
          )}
        </div>

        <div className="ps-buttons">
          <button type="submit" className="ps-button-primary">
            Continuar
          </button>
          <button type="button" className="ps-button-secondary" 
                  onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSetup;