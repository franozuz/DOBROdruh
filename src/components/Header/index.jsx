import React from 'react';
import './style.css';
import { Link } from 'react-dom';

const Header = () => {
  return (
    <nav>
      <img src="/assets/img/logo_DOBROdruh.svg" alt="logo DOBROdruh" />
      <ul>
        <li>
          <a href="/">Domov</a>
        </li>
        <li>
          <a href="/test/1">Test</a>
        </li>
        <li>
          <a href="/calculator">CO2 Kalkulačka</a>
        </li>
        <li>
          <a href="/tips">Cestovatelské tipy</a>
        </li>
        <li>
          <a href="/projects">EKO projekty</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
