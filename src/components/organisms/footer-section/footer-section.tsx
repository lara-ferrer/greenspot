import React from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../../../hooks/use-fetch-data";
import { getCityQuery, CityMethods } from "../../../api/queries";
import { City } from "../../../types/city.types";
import logo from "../../../assets/brand/logo-white.svg";
import "./footer-section.scss";
import "../../../styles/index.scss";

export const Footer = () => {
  const getCities = getCityQuery(CityMethods.GetCities, {});
  const cities: City[] = useFetchData(getCities);

  return (
    <nav className="grsp-footer">
      <div className="grsp-footer__column grsp-footer__brand">
        <img src={logo} alt="Greenspot" />
      </div>
      <div className="grsp-footer__column">
        <h4>Los mejores restaurantes green-friendly</h4>
        {cities &&
          cities.map(({ cityName }, i) => (
            <Link
              className="grsp-footer__link"
              to={`/${cityName}/restaurantes`}
              key={`res-${i}`}
            >
              Restaurantes en {cityName}
            </Link>
          ))}
      </div>
      <div className="grsp-footer__column">
        <h4>Las mejores cafeterías green-friendly</h4>
        {cities &&
          cities.map(({ cityName }, i) => (
            <Link
              className="grsp-footer__link"
              to={`/${cityName}/cafeterias`}
              key={`coffee-${i}`}
            >
              Cafeterías en {cityName}
            </Link>
          ))}
      </div>
      <div className="grsp-footer__column">
        <h4>Moda y belleza green-friendly</h4>
        {cities &&
          cities.map(({ cityName }, i) => (
            <Link
              className="grsp-footer__link"
              to={`/${cityName}/moda-y-belleza`}
              key={`shop-${i}`}
            >
              Tiendas en {cityName}
            </Link>
          ))}
      </div>
    </nav>
  );
};
