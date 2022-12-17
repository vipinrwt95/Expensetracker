import logo from './logo.svg';
import './App.css';
import Signup from'./components/Signup'
import Auth from './Pages/Auth';
import { TokenProvider } from './store/TokenContext';
import {Route,Router,Routes} from 'react-router-dom'
import Home from './Pages/Home';
function App() {
  return (
    <TokenProvider>
      <div className="App">
    <Routes>
    <Route path='/' exact element={<Auth />}></Route>
    <Route path='/home' exact element={ <Home />}>
   </Route>
    </Routes>
   </div>
    </TokenProvider>
  );
}

export default App;
