import { createSlice } from "@reduxjs/toolkit";

const initialState={mode:'light'}
export const ThemeReducer=createSlice(
{
   name:'theme',
   initialState,
   reducers:{
        toggle(state)
        {
          state.mode==='light'?state.mode ='dark':state.mode ='light'
        }
     
   }
})
export  default ThemeReducer;