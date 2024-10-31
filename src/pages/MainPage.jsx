import React from 'react';
import NavBar from '../components/NavBar';
import Cards from '../components/Cards';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <NavBar />
      <Cards />
    </div>
  );
};

export default MainPage;