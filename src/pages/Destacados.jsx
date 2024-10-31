import React from 'react';
import PostLayout from '../components/PostLayout';
import NavBar from '../components/NavBar';
import '../styles/Pages.css';

const Destacados= () => {
  return (
    <div className="page-container">
      <NavBar />
      <PostLayout />
    </div>
  );
};

export default Destacados;