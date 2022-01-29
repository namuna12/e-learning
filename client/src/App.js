import React from 'react';
import Home from './components/home';
import SignUpUseState from './components/signup';
import Nav from './components/navigationbar';
import SignInUseState from './components/login';
import Course from './components/courses.js';
import { Route, NavLink, Routes } from "react-router-dom";
import  { useState, useEffect } from "react";



function App() {
  return (
    <div className="App">
      
     <Nav />
		<Routes>
		
		<Route path='/' element={<Home />} />
		<Route path='/signup' element={<SignUpUseState />} />
    <Route path='/signin' element={<SignInUseState />} />
    <Route path='/courses' element={<Course />} />

    
         
		</Routes>
  </div>
  );
}

export default App;
