// PostForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Publicar.css';
import { useNavigate } from 'react-router-dom';

const languageOptions = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
];

const levelOptions = [
  { value: 'A1', label: 'Principiante (A1)' },
  { value: 'A2', label: 'Básico (A2)' },
  { value: 'B1', label: 'Intermedio (B1)' },
  { value: 'B2', label: 'Intermedio Alto (B2)' },
  { value: 'C1', label: 'Avanzado (C1)' },
  { value: 'C2', label: 'Maestría (C2)' },
];

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    language: '',
    level: '',
    image: null,
    imagePreview: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_POST',
      payload: formData
    });
  };

  const handleCancel = () => {
    navigate('/mainpage');
    console.log('Cancelando publicación');
  };

  return (
    <div className="pub-form-container">
      <form onSubmit={handleSubmit}>
        <div className="pub-layout">
          {/* Columna Izquierda */}
          <div className="pub-left-column">
            <div className="pub-form-group">
              <label htmlFor="image">Imagen de portada</label>
              <div className="pub-image-upload-area">
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="pub-file-input"
                />
                {formData.imagePreview ? (
                  <img
                    src={formData.imagePreview}
                    alt="Vista previa"
                    className="pub-image-preview"
                  />
                ) : (
                  <div className="pub-image-placeholder">
                    Haz clic o arrastra una imagen aquí
                  </div>
                )}
              </div>
            </div>

            <div className="pub-form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Ingresa el título"
              />
            </div>

            <div className="pub-form-group">
              <label htmlFor="subtitle">Subtítulo</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                placeholder="Ingresa el subtítulo"
              />
            </div>

            <div className="pub-form-group">
              <label htmlFor="language">Idioma</label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccionar idioma</option>
                {languageOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pub-form-group">
              <label htmlFor="level">Nivel</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                required
              >
                <option value="">Seleccionar nivel</option>
                {levelOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pub-buttons">
              <button type="submit" className="pub-submit-button">
                Publicar
              </button>
              <button 
                type="button" 
                className="pub-cancel-button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="pub-right-column">
            <div className="pub-form-group">
              <label htmlFor="content">Contenido</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                placeholder="Escribe aquí el contenido principal..."
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;