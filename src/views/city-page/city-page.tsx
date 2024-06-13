import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getSanityImageUrl } from "../../sanity-images";
import { Business } from '../../types/business.types';
import { businessBps } from '../../constants/carousel-breakpoints';
import { getCity } from '../../api/city/get-city';
import { CityHeader } from './components/city-header/city-header';
import { City } from '../../types/city.types';
import { getCategoryBusinesses } from '../../api/get-category-businesses';
import '../../styles/index.scss';
import { Loading } from '../../components/atoms/loading-notice/loading-notice';
import { BusinessCard } from '../../components/molecules/business-card/business-card';
import { Carousel } from '../../components/organisms/carousel-section/carousel-section';
import { Section } from '../../components/organisms/section-org/section-org';
import { Layout } from '../../components/templates/layout-temp/layout-temp';

const CityPage = () => {
  const { cityName } = useParams();
  const [city, setCity] = useState<City>();
  const [cityRestaurants, setCityRestaurants] = useState<Business[]>();
  const [cityCoffees, setCityCoffees] = useState<Business[]>();
  const [cityFashion, setCityFashion] = useState<Business[]>();

  const image = city && getSanityImageUrl(city.coverImage);

  useEffect(() => {
    getCity(cityName).then((data) => setCity(data));
    getCategoryBusinesses(cityName, 'restaurant').then((data) => setCityRestaurants(data));
    getCategoryBusinesses(cityName, 'cafe').then((data) => setCityCoffees(data));
    getCategoryBusinesses(cityName, 'fashion').then((data) => setCityFashion(data));
  }, []);

  const cityRestaurantCards = cityRestaurants ? cityRestaurants.map((restaurant, i) => (
    <Link to={`/restaurantes/${restaurant.url}`}>
      <BusinessCard
        key={i}
        business={restaurant}
      />
    </Link>
  )) : [];

  const cityCoffeeCards = cityCoffees ? cityCoffees.map((coffee, i) => (
    <Link to={`/cafeterias/${coffee.url}`}>
      <BusinessCard
        key={i}
        business={coffee}
      />
    </Link>
  )) : [];

  const cityFashionCards = cityFashion ? cityFashion.map((fashion, i) => (
    <Link to={`/moda-y-belleza/${fashion.url}`}>
      <BusinessCard
        key={i}
        business={fashion}
      />
    </Link>
  )) : [];

  return (
    <Suspense fallback={ <Loading/> }>
      <CityHeader image={image} name={cityName} />
      <Layout numberOfColumns={2}>
        <div className="align-right">
          <h2>Descubre {cityName}</h2>
          <p>{city?.cityDescription}</p>
        </div>
        <div className="align-left">
          <img src={image} alt={cityName} className="w-100" />
        </div>
      </Layout>
      <Section title={`Los mejores restaurantes en ${cityName}`} link={`/${cityName}/restaurantes`}>
        <Carousel
          carouselItems={cityRestaurantCards}
          breakpoints={businessBps}
        />
      </Section>
      <Section title={`Las mejores cafeterías en ${cityName}`} link={`/${cityName}/cafeterias`}>
        <Carousel
          carouselItems={cityCoffeeCards}
          breakpoints={businessBps}
        />
      </Section>
      <Section title={`Los mejores negocios de moda y belleza en ${cityName}`} link={`/${cityName}/moda-y-belleza`}>
        <Carousel
          carouselItems={cityFashionCards}
          breakpoints={businessBps}
        />
      </Section>
    </Suspense>
  );
}

export default CityPage;