import './App.css'
import React from "react"

import Registro from './funciones/Registro'
import HomePage from './funciones/Pagina_inicial'
import Inicio_sesion from './funciones/Inicio_sesion'
import Pagina_principal from './funciones/Pagina_principal'

import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/inicio_sesion" element={<Inicio_sesion />} />
            <Route path="/pagina_principal" element={<Pagina_principal />} />
        </Routes>
    </div>
  )
}

export default App
