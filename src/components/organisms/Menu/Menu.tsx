import React from 'react';
import './menu.scss';
import '../../../styles/index.scss';
import logo from '../../../assets/brand/logo-green.svg';

export const Menu = () => {
  return (
    <nav className="grsp__menu">
        <a href="/"><img src={logo} alt="Greenspot" /></a>
    </nav>
  );
}