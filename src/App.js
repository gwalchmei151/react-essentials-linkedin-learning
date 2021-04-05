import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact, Whoops404, Services, CompanyHistory, Location } from "./pages";

// https://api.github.com/users/gwalchmei151

function App() {
    return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
        <Route path="/services" element={<Services />}/>
        <Route path="/services" element={<CompanyHistory />}/>
        <Route path="/services" element={<Location />}/>
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Whoops404 />}/>
      </Routes>   
    </div>);
  
}

export default App;
