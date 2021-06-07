import React, { useState } from 'react';
import './style.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClose = () => {
    if (menuOpen) {
      setMenuOpen(false);
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
          <img src="/assets/img/logo_DOBROdruh.svg" alt="logo DOBROdruh" />
          <ul>
            <li>
              <a onClick={handleClose} href="/" className="nav-link">
                Domov
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="/test/1" className="nav-link">
                Test
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="/calculator" className="nav-link">
                CO2 Kalkulačka
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="/tips" className="nav-link">
                Cestovatelské tipy
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="/projects" className="nav-link">
                EKO projekty
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
