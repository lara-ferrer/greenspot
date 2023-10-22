import React, { Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CityCard as KiwiCityCard } from "kiwi-design-system";
import { City } from "../../../types/city";
import { getSanityImageUrl } from "../../../sanity-images";
import { Loading } from "../../atoms";
import { useCityBusinesses } from "../../../hooks/useCityBusinesses";

export const CityCard = ({
  cityName,
  country,
  coverImage,
  businessType,
}: City) => {
  // const cityBusinesses = useCityBusinesses(cityName);

  return (
    <Suspense fallback={<Loading />}>
      <Link to={`/cities/${cityName}`}>
        <KiwiCityCard
          city={cityName}
          country={country}
          image={getSanityImageUrl(coverImage)}
          businessCount={1}
          businessName={businessType}
        />
      </Link>
    </Suspense>
  );
};
