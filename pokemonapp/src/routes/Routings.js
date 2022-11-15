import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "../pages/About";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import Home from "../pages/Home";

const Routings = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/details/:name" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routings