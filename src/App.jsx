import './App.css'
import React from "react"

import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainpage" element={<MainPage />} />
        </Routes>
    </div>
  )
}

export default App
// App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Páginas
// import HomePage from './pages/HomePage';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import MainPage from './pages/MainPage';

// // Estilos
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <main className="app-container">
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/mainpage" element={<MainPage/>} />
//       </Routes>
//     </main>
//   );
// };

// export default App;
