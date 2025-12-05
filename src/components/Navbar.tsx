import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

        {/* Brand */}
        <h2 className="navbar-brand m-0">MyApp</h2>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
