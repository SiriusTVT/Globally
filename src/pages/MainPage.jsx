import React from 'react';
import NavBar from '../components/NavBar';
import NavigationCards from '../components/Cards';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <NavBar />
      <NavigationCards />
    </div>
  );
};

export default MainPage;