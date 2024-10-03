import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
}]

export const formularioSlice = createSlice({
    name:'formulario',
    initialState,
    reducers:{
        addData: (state,action)=>{
            state.push(action.payload);
        }
    }
})

export const {addData} = formularioSlice.actions;

export default formularioSlice.reducer