import React from 'react';
import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar">
        <div className="container">
          <a href="#" className="navbar-brand">Sumit Mukharjee</a>
          
          <div className="navbar-content">
            <div className="details">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="icons">
              <a href="" className="nav-links">Mail</a>
              <a href="" className="nav-links">Git</a>
              <a href="" className="nav-links">Linked</a>
              <a href="" className="nav-links">Hashnode</a>
            </div>
          </div>
        </div>
      </nav>
      
    )
}
export default Navbar;