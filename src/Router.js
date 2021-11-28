/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
//import { Switch, Route } from 'react-router'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';

// Write component imports here //
export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='/car/:id' element={<Car />} />
        </Routes>
    )
}


// Start Router function here //
