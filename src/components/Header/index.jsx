import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };
  const [logoChange, setLogoChange] = useState('nav-closed');
  const handleOnChange = () => {
    const img = 'logo_beznazvu.svg';
    if (logoChange) {
      setLogoChange(img);
    }
  };
  return (
    <header>
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
          <img
            src={
              !menuOpen
                ? '/assets/img/logo_DOBROdruh.svg'
                : '/assets/img/logo_beznazvu.svg'
            }
            alt="logo DOBROdruh"
          />
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
              <Link onClick={handleClick} to="/calculator" className="nav-link">
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
    </header>
  );
};

export default Header;
