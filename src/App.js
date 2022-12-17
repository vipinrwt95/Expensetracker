import logo from './logo.svg';
import './App.css';
import Signup from'./components/Signup'
import Auth from './Pages/Auth';
import { TokenProvider } from './store/TokenContext';
import {Route,Router,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ResetPassword from './Pages/ResetPassword';
function App() {
  return (
    <TokenProvider>
      <div className="App">
    <Routes>

    <Route path='/' exact element={<Auth />}></Route>
    <Route path='/reset' exact element={<ResetPassword />}></Route>
    <Route path='/home' exact element={ <Home />}></Route>
     <Route path='/home/:user' element={<Profile />}>
   </Route>
    </Routes>
   </div>
    </TokenProvider>
  );
}

export default App;
