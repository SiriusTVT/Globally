// Profile.jsx
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'; 
import axios from 'axios';
import '../styles/Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error.response || error.message || error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="profile-container">
        {profileData ? (
          <>
            <div className="profile-photo">
              <img src={profileData.profilePicture} alt="Profile" />
            </div>
            <div className="profile-info">
              <label>Nombre:</label>
              <input type="text" value={profileData.nombre} readOnly />
              <label>Email:</label>
              <input type="email" value={profileData.email} readOnly />
              <label>Idiomas Dominados:</label>
              <textarea value={profileData.idiomasDominados.join(', ')} readOnly />
              <label>Idiomas de Interés:</label>
              <textarea value={profileData.idiomasInteres.join(', ')} readOnly />
              <label>Intereses:</label>
              <textarea value={profileData.intereses.join(', ')} readOnly />
            </div>
          </>
        ) : (
          <p>Cargando datos del perfil...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
