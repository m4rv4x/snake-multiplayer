import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Snake Game
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/rooms" className="navbar-link">
              Rooms
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/leaderboard" className="navbar-link">
              Leaderboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
