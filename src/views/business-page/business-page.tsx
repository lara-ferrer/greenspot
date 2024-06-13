import React, { Suspense, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "kiwi-design-system";
import { getBusiness } from "../../api/get-business";
import { BusinessMap } from "../../components/molecules/business-map/business-map";
import { getSanityImageUrl } from "../../sanity-images";
import { businessGalleryBps } from "../../constants/carousel-breakpoints";
import { Reviews } from "./components/reviews/reviews";
import { OpeningHours } from "./components/opening-hours/opening-hours";
import { BusinessHeader } from "./components/business-header/business-header";
import { Business } from "../../types/business.types";
import { ReviewsProvider } from "../../contexts/reviews-context/reviews-provider";
import "../../styles/index.scss";
import "./business-page.scss";
import { Loading } from "../../components/atoms/loading-notice/loading-notice";
import { Carousel } from "../../components/organisms/carousel-section/carousel-section";
import { Layout } from "../../components/templates/layout-temp/layout-temp";

const BusinessPage = () => {
  const { businessUrl } = useParams();
  const [business, setBusiness] = useState<Business>();

  useEffect(() => {
    getBusiness(businessUrl).then((data) => setBusiness(data));
  }, []);

  const businessImages =
    business &&
    business.images.map((image) => (
      <img
        src={getSanityImageUrl(image)}
        alt={business.name}
        className="grsp-business-page__image"
        key={image}
      />
    ));

  return (
    business && (
      <Suspense fallback={<Loading />}>
        <div className="grsp-business-page">
          <BusinessHeader
            businessName={business.name}
            categoryName={business.category}
            cityId={business.city._ref}
          />
          <Layout className="grsp-business-page__contact-section" numberOfColumns={1}>
            <div className="mb--12">
              <h3>Datos de contacto</h3>
              <p className="grsp-business-page__address pv--8">
                <Icon name="location" />
                <span className="grsp-business-page__contact-text">
                  {business.address}
                </span>
              </p>
              <p className="grsp-business-page__address pv--8">
                <Icon name="link" />
                <Link
                  className="grsp-business-page__contact-text"
                  to={business.website}
                  target="_blank"
                >
                  {business.website}
                </Link>
              </p>
              <p className="grsp-business-page__address pv--8">
                <Icon name="phone" />
                <Link
                  className="grsp-business-page__contact-text"
                  to={`tel:${business.phoneNumber}`}
                >
                  {business.phoneNumber}
                </Link>
              </p>
            </div>
          </Layout>
          <Layout numberOfColumns={2} className="grsp-business-page__map-section">
            <BusinessMap coordinates={business.coordinates} />
            <OpeningHours business={business} />
          </Layout>
          <Layout numberOfColumns={1}>
            <div>
              <h3>Galería</h3>
            </div>
          </Layout>
          <div className="grsp-business-page__gallery">
            <Carousel
              carouselItems={businessImages}
              breakpoints={businessGalleryBps}
            />
          </div>
          <ReviewsProvider>
            <Reviews
              businessId={business._id}
              reviews={business.reviews && business.reviews}
            />
          </ReviewsProvider>
        </div>
      </Suspense>
    )
  );
};

export default BusinessPage;
