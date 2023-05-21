import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './views/Signup';
import Login from './views/Login'
// import Custom from './views/Custom'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Navbar from './views/Navbar.js'
import Filter from'./views/filter.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Signup /> */}
      {/* <Login /> */}
      <BrowserRouter>
             
             <Routes>
             <Route path="/" element={<Login />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Signup" element={<Signup />} />
  <Route path="/Navbar" element={<Navbar />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Profile" element={<Profile />} />
  
 
 
  <Route path="/filter" element={<Filter />} />
 
  {/* <Route path="/Custom" element={<Custom />} /> */}
</Routes>
             
         </BrowserRouter>
  
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
