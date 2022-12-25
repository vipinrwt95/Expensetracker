import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth';
import expensesSlice from './Expenses';
import ThemeReducer from './ThemeReducer';

//const initialCounterState={counter:0,showCounter:true}


const store=configureStore({
  reducer:{auth:authSlice.reducer,expenses:expensesSlice.reducer,theme:ThemeReducer.reducer}
});


export const authActions=authSlice.actions;
export const ExpenseActions=expensesSlice.actions;
export const ThemeActions=ThemeReducer.actions;
export default store;
