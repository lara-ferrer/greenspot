import React from 'react';
import logo from '../../../assets/brand/logo-green.svg';
import './menu.scss';
import '../../../styles/index.scss';
import { Icons } from './Icons/Icons';

export const Menu = () => {
  return (
    <nav className="grsp-menu">
        <a href="/" className="grsp-menu__logo"><img src={logo} alt="Greenspot" /></a>
        <Icons />
    </nav>
  );
}