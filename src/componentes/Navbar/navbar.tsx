import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
  return (
    <nav id="containerHeader" className="navbar navbar-expand-md">
      <div id="contNav" className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#melNav"
          aria-controls="melNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          
        </button>

        <div className="collapse navbar-collapse" id="melNav">
          <div id="melNav1" className="navbar-nav mr-auto">
            <div style={{color:"white", marginLeft:15}} className="row">
            <i style={{fontSize:28,paddingTop:5 }} className="fas fa-bars"></i>
            <label style={{fontSize:25, paddingLeft:50}}>Somos</label>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
