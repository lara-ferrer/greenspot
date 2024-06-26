import React from "react";
import { Link } from "react-router-dom";
import { CityCard as KiwiCityCard } from "kiwi-design-system";
import { getSanityImageUrl } from "../../../sanity-images";
import { CityCardProps } from "../../../types/components/city-card.types";

export const CityCard = ({ city }: CityCardProps) => {
  const { cityName, country, coverImage } = city;

  return (
    <Link to={`/ciudades/${cityName}`}>
      <KiwiCityCard
        city={cityName}
        country={country}
        image={getSanityImageUrl(coverImage)}
      />
    </Link>
  );
};
