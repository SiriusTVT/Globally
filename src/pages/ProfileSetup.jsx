import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import '../styles/ProfileSetup.css';

function ProfileSetup() {
    const registros = useSelector((state) => state.formulario.registros);
    const nombreUsuario = registros.length > 0 ? registros[registros.length - 1].nombre : '';
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
    }
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

  return (
    <div className="ps-container">
      <form className="ps-form">
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
          <button 
            type="button" 
            className="ps-select-button"
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
                  onChange={() => setFormData(prev => ({
                    ...prev,
                    intereses: {
                      ...prev.intereses,
                      [key]: !prev.intereses[key]
                    }
                  }))}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className="ps-buttons">
          <button type="submit" className="ps-button-primary">Continuar</button>
          <button type="button" className="ps-button-secondary" onClick={() => navigate('/')}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileSetup;