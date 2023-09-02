import React from 'react';
import './footer.scss';
import '../../../styles/index.scss';
import logo from '../../../assets/brand/logo-white.svg';

export const Footer = () => {
  return (
    <nav className="grsp__footer">
        <img src={logo} alt="Greenspot" />
    </nav>
  );
}