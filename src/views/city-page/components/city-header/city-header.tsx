import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'kiwi-design-system';
import "./city-header.scss";

type CityHeaderProps = {
  name: string;
  image?: string;
};

export const CityHeader = ({ name, image }: CityHeaderProps) => {
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
          <h1 className="grsp-city-header__title">{name}</h1>
          <div className="grsp-city-header__links">
          <Link to={`/${name}/restaurantes`} className="grsp-city-header__link">
            <Button state="secondary" size="large" label="Restaurantes" />
          </Link>
          <Link to={`/${name}/cafeterias`} className="grsp-city-header__link">
            <Button state="secondary" size="large" label="Cafeterías" />
          </Link>
          <Link to={`/${name}/moda-y-belleza`} className="grsp-city-header__link">
            <Button state="secondary" size="large" label="Moda y belleza" />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
