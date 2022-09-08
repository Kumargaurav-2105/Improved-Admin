
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import SignupPage from './Pages/SignupPage';
import Userdashboard from './Pages/Userdashboard';
import Application from './Pages/Userdashboard/application';
import Admin from './Pages/Admin/Admin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
        <Route path="/userdashboard" element={<Userdashboard></Userdashboard>}></Route> 
        <Route path='/application' element={<Application></Application>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
