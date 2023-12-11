
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
function App() {
  return (
 <>
 <ToastContainer/> 
 <BrowserRouter>
 <Routes>
  <Route path='/'element={<Login/>}/>
  <Route path='/home'element={<Home/>}/>
  </Routes>
  </BrowserRouter>

 </>
  );
}

export default App;
