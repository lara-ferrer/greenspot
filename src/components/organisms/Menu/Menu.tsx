import React from 'react';
import './menu.scss';
import '../../../styles/index.scss';
import logo from '../../../assets/brand/logo-green.svg';
import { Searcher } from '../../molecules/Searcher/Searcher';

export const Menu = () => {
  return (
    <nav className="grsp-menu">
        <a href="/" className="grsp-menu__logo"><img src={logo} alt="Greenspot" /></a>
        <Searcher placeholder="Buscar..." />
    </nav>
  );
}