import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/Component/Navbar.jsx';
import About from './assets/Component/About.jsx';
import Contact from './assets/Component/Contact.jsx';
import Login from './assets/Component/Login.jsx';
import Home from './assets/Component/Home.jsx';
import SignIn from './assets/Component/Singin.jsx';
import './index.css';
import Footer from './assets/Component/Footer.jsx';
import Hospital from './assets/Component/Hospital.jsx';
import Hospitaldetails from './assets/Component/Hospitaldeitals.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Navbar/>
       <Routes>
       <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/categories/hospital" element={<Hospital />} />
        <Route path="/hospital/viewdetails" element={< Hospitaldetails/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
) ;


