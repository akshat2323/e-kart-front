import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
// import Navbar from './components/Navbar';
import Home from './components/Home/Home';
// import Footer from './components/Footer';
import About from './components/About/About';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import Profile from './components/Profile/Profile';
import Subs from './components/Subs/Subs';
import Logout from './components/Logout/Logout';


function App() {

  return (
    <div className="App">
        
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={ <Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/subs" element={<Subs/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
        
    </div>

  );
}

export default App;
