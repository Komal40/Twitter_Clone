import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
// import './App.css';
import Login from './pages/SignIn/Login';
import SignupPage from './pages/Signup/SignUp';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element={<Sidebar/>}/>

      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;