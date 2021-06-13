import React from 'react';
import logoUrl from './img/logo_DOBROdruh.svg';
import './style.css';

const BarLeft = () => {
  return (
    <div className="topbar-left">
      <a href="/">
        <img className="logo-dobrodruh" src={logoUrl} alt="Logo DOBROdruh" />
      </a>
    </div>
  );
};
export default BarLeft;
