import React from "react";
import './index.css';

const Navbar = () => {
  console.log("Bootstrap CSS check:", getComputedStyle(document.body).padding);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <h2 className="navbar-brand m-0">MyApp</h2>

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
