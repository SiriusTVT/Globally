import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../features/formulario/formularioSlice.js'

export const store = configureStore({
  reducer: {
    formulario: formReducer
    
  },
})
