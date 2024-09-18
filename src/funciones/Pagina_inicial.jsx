import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../Estilos/Pagina_inicial.css';
import '../Estilos/Botones.css';


function HomePage () {

    const navigate = useNavigate();

    function handleClick2() {
        navigate('/registro');
        console.log('click');
    }

    function handleClick1() {
        navigate('/inicio_sesion');
        console.log('click');
    }


    return (
        
        <div>
            <div className="background-overlay"></div>

            <div className="content">
                <header>
                    <div>
                        <h1 className="title1">Globally</h1>
                        <div>
                            <button className='boton-inicio-sesion' onClick={handleClick1}>
                                Iniciar Sesión
                            </button>
                            <button className='boton-registro' onClick={handleClick2}>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </header>
                <main>
                    <div>
                        <h2 className="paragraph1">
                            Conecta al mundo, sin barreras lingüística.
                        </h2>
                        <p className="paragraph1">
                            Conéctate con amigos y comparte tus momentos especiales.
                        </p>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default HomePage;
