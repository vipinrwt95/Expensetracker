import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth';
import expensesSlice from './Expenses';

//const initialCounterState={counter:0,showCounter:true}


const store=configureStore({
  reducer:{auth:authSlice.reducer,expenses:expensesSlice.reducer}
});


export const authActions=authSlice.actions;
export const ExpenseActions=expensesSlice.actions;
export default store;
