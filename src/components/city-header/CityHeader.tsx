import React from "react";
import { CityHeaderProps } from "./CityHeader.types";
import "./city-header.scss";

export const CityHeader = ({ title, image }: CityHeaderProps) => {
  return (
    <div className="grsp-city-header">
      <div className="grsp-city-header__overlay"></div>
      <div
        className="grsp-city-header__image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="grsp-city-header__content">
          <h1 className="grsp-city-header__title">{title}</h1>
        </div>
      </div>
    </div>
  );
};
