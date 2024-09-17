//hook de estado
import { useContext, createContext } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

import './App.css';

function Estado() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h2>Ejemplo de useState</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

// ----------------------------------------------------------------------------------------------------------------------------

//hook de contexto
const MyContext = createContext() // Crear un contexto


//componente padre
function MyProvider({ children }) { // Crear un proveedor de contexto que envuelve a los hijos
    const [count, setCount] = useState(0)
    
    return (
        // Pasar el estado y la función de actualización como valores del contexto
        //maneja el estado y la función de actualización
        <MyContext.Provider value={{ count, setCount }}> 
        {children}
        </MyContext.Provider>
    )
    }

//componente hijo
function MyComponent() {
    const { count, setCount } = useContext(MyContext) // Consumir el contexto
    return (
        <div className='card'>
        <h2>Ejemplo de useContext</h2>
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
            Increment
        </button>
        </div>
    )
}

// ----------------------------------------------------------------------------------------------------------------------------

//hook de ref

function InputFocus() {
    const inputRef = useRef(null); // Crear una referencia

    const handleClick = () => { // Función para enfocar el input
        inputRef.current.focus(); // Acceder al nodo del DOM
    };

    return (
        <div className='card'>
            <h2>Ejemplo de useRef</h2>
            <input ref={inputRef} 
            type='text' 
            placeholder='Escribe algo aqui'/>

            {/* // Botón para enfocar el input */}
            <button onClick={handleClick}>
                Enfocar el Input
            </button>
        </div>
    )
}

// ----------------------------------------------------------------------------------------------------------------------------

//hook de useEffect

function PagetitleUpdater() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // Actualizar el título del documento usando el API del navegador
        document.title = `You clicked ${count} times`;

        // Limpiar el efecto
        return () => {
            document.title = 'React App'; // Restaurar el título original
        };

    }, [count]); //solo se ejecuta cuando count cambia

    return (
        <div className='card'>
            <h2>Ejemplo de useEffect</h2>
            <p>Has hehco clic {count} veces</p>
            <button onClick={() => setCount((count) => count + 1)}>
                Incrementar
            </button>
        </div>
    )
}

// ----------------------------------------------------------------------------------------------------------------------------

//hook personalizado

function useCounter(initialCount = 0) { // Crear un hook personalizado
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount((count) => count + 1)
    }

    const decrement = () => {
        setCount((count) => count - 1)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return { count, increment, decrement, reset } // Devolver el estado y las funciones de actualización
}

function Counter() { // Consumir el hook personalizado
    const { count, increment, decrement, reset } = useCounter(0)

    return (
        <div className='card'>
            <h2>Hook personalizado</h2>
            <p>count is {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

// ----------------------------------------------------------------------------------------------------------------------------

//hook de useMemo y useCallback

export {Estado,MyProvider,MyComponent,InputFocus,PagetitleUpdater,Counter}


