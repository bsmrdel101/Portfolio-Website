import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <div>
        <Link className="navLink" to="/home">
          Home
        </Link>
        <Link className="navLink" to="/portfolio">
          Portfolio
        </Link>
        <Link className="navLink" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
