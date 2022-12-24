import { createSlice } from "@reduxjs/toolkit";

 const initialExpenseState={expenses:[],totalexpense:0}

const ExpensesSlice=createSlice(
   {
      name:'expenses',
      initialState:initialExpenseState,
       reducers:{
          push(state,action)
          {
           state.expenses=action.payload;
          }
    }})

    export default ExpensesSlice;
    
