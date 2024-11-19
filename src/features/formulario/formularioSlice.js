import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registros: []
};

const formularioSlice = createSlice({
  name: 'formulario',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.registros.push(action.payload);
    }
  }
});

export const { addData } = formularioSlice.actions;

export default formularioSlice.reducer;