// Profile.jsx
import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  // Estado para almacenar y actualizar los datos del perfil
  const [profile, setProfile] = useState({
    name: 'Nombre de Usuario',
    age: 'Edad',
    description: 'Descripción breve sobre ti',
    photo: '' // URL o imagen en blanco
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          photo: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <h2>Perfil</h2>
      <div className="profile-photo">
        <img 
          src={profile.photo || 'https://via.placeholder.com/150'} 
          alt="Foto de perfil" 
        />
        <input type="file" onChange={handlePhotoChange} />
      </div>
      <div className="profile-info">
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Edad:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="description"
            value={profile.description}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Profile;
