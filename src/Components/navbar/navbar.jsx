// src/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded shadow-sm my-3">
      <div className="container-fluid mx-3"> {/* Added mx-3 for horizontal margin */}
        <a className="navbar-brand" href="#">Naveen Murugan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#personal-details">Personal Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#work-experience">Work Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#hobbies">Hobbies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;