import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './menu.scss';
import '../../../styles/index.scss';
import logo from '../../../assets/brand/logo-green.svg';
import { Searcher } from '../../molecules/Searcher/Searcher';

export const Menu = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
      console.log(error);
  };

  return (
    <nav className="grsp-menu">
        <a href="/" className="grsp-menu__logo"><img src={logo} alt="Greenspot" /></a>
        <div>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <Searcher placeholder="Buscar..." />
    </nav>
  );
}