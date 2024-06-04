import React from "react";
import { Menu } from "./menu-section/menu-section";
import logo from "../../../assets/brand/logo-green.svg";
import "../../../styles/index.scss";
import "./nav-section.scss";

export const Nav = () => {
  return (
    <nav className="grsp-nav">
      <a href="/" className="grsp-nav__logo">
        <img src={logo} alt="Greenspot" />
      </a>
      <Menu />
    </nav>
  );
};
