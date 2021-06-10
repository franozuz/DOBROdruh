import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BarLeft from './BarLeft';
import './style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="topbar-container">
        <BarLeft />
        <div className="navigation">
          <button
            onClick={() => (menuOpen ? setMenuOpen(false) : setMenuOpen(true))}
            className={menuOpen ? 'hamburger hamburger--open' : 'hamburger'}
            aria-label="menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={menuOpen ? 'nav-closed' : 'nav-open'}>
            <ul>
              <li>
                <Link onClick={handleClick} to="/" className="nav-link">
                  Domov
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/test/1" className="nav-link">
                  Test
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleClick}
                  to="/calculator"
                  className="nav-link"
                >
                  CO2 Kalkulačka
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/tips" className="nav-link">
                  Cestovatelské tipy
                </Link>
              </li>
              <li>
                <Link onClick={handleClick} to="/projects" className="nav-link">
                  EKO projekty
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
