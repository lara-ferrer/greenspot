import React from "react";
import "./footer.scss";
import "../../../styles/index.scss";
import logo from "../../../assets/brand/logo-white.svg";
import { Icon } from "kiwi-design-system";
import { useFetchData } from "../../../hooks/use-fetch-data";
import { getCityQuery, CityMethods } from "../../../api/queries";
import { City } from "../../../types";

export const Footer = () => {
  const getCities = getCityQuery(CityMethods.GetCities, {});
  const cities: City[] = useFetchData(getCities);

  return (
    <nav className="grsp-footer">
      <div className="grsp-footer__column grsp-footer__brand">
        <img src={logo} alt="Greenspot" />
        <a href="https://www.tiktok.com/@greenspot.app" target="_blank">
          <Icon name="instagram" />
        </a>
      </div>
      <div className="grsp-footer__column">
        <h4>Los mejores restaurantes green-friendly</h4>
        {cities &&
          cities.map(({ cityName }, i) => (
            <a
              className="grsp-footer__link"
              href={`/cities/${cityName}/restaurantes`}
              key={`res-${i}`}
            >
              Restaurantes en {cityName}
            </a>
          ))}
      </div>
      <div className="grsp-footer__column">
        <h4>Los mejores restaurantes green-friendly</h4>
        {cities &&
          cities.map(({ cityName }, i) => (
            <a
              className="grsp-footer__link"
              href={`/cities/${cityName}/restaurantes`}
              key={`rest-${i}`}
            >
              Restaurantes en {cityName}
            </a>
          ))}
      </div>
    </nav>
  );
};
