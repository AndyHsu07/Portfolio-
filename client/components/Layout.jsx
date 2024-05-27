import React from 'react';
import { Link } from 'react-router-dom';
import '../src/layout.css';
//import images
import  '/public/img/logo.png';



export default function Layout() {
  return (
    <>
      {/* set layout as nav */}
      <nav>
        <img src='/img/logo.png' alt="Logo"  />
        <Link className="Nav" to="/">Home</Link>|  
        <Link className="Nav" to="/about">About Me</Link> |
        <Link className="Nav" to="/service">Service</Link> |
        <Link className="Nav" to="/project">Project</Link> | 
        <Link className="Nav" to="/contact">Contact</Link> 
      </nav>
      <br />

      
      
    
      
    </>
  );
}
