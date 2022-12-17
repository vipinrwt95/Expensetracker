import logo from './logo.svg';
import './App.css';
import React,{useContext} from 'react';
import Signup from'./components/Signup'
import Auth from './Pages/Auth';
import TokenContext, { TokenProvider } from './store/TokenContext';
import {Route,Router,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ResetPassword from './Pages/ResetPassword';
import Expenses from './Pages/Expenses';
function App() {
  const authctx=useContext(TokenContext)
  const isloggedin=authctx.isLoggedIn
  console.log(authctx);
  return (
     <TokenProvider>
       <div className="App">
     <Routes>

    <Route path='/' exact element={<Auth />}></Route>
     <Route path='/reset' exact element={<ResetPassword />}></Route>
     <Route path='/home' exact element={ <Home />}></Route>
      <Route path='/home/:user' element={<Profile />}>
    </Route>
    <Route path='/expenses' element={<Expenses />}></Route>
     </Routes>
    </div>
     </TokenProvider>
  
  );
}

export default App;
