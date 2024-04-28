import React from "react";
import { Menu } from "./menu/menu";
import logo from "../../../assets/brand/logo-green.svg";
import "../../../styles/index.scss";
import "./nav.scss";

export const Nav = () => {
  return (
    <nav className="grsp-nav">
      <a href="/" className="grsp-menu__logo">
        <img src={logo} alt="Greenspot" />
      </a>
      <Menu />
    </nav>
  );
};
