import React from "react";
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
          <a href={`/restaurantes/${name}`}>
            <Button state="secondary" size="large" label="Restaurantes" />
          </a>
          <a href={`/cafeterias/${name}`}>
            <Button state="secondary" size="large" label="Cafeterías" />
          </a>
          <a href={`/moda-y-belleza/${name}`}>
            <Button state="secondary" size="large" label="Moda y belleza" />
          </a>
          <a href={`/ocio/${name}`}>
            <Button state="secondary" size="large" label="Ocio" />
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};
