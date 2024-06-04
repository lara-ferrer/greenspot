import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "kiwi-design-system";
import { getBusiness } from "../../api/get-business";
import { BusinessMap } from "../../components/molecules/business-map/business-map";
import { getSanityImageUrl } from "../../sanity-images";
import { businessGalleryBps } from "../../constants/carousel-breakpoints";
import { Reviews } from "./components/reviews/reviews";
import { OpeningHours } from "./components/opening-hours/opening-hours";
import { BusinessHeader } from "./components/business-header/business-header";
import { Business } from "../../types/business";
import { ReviewsProvider } from "../../contexts/reviews-context/reviews-provider";
import "../../styles/index.scss";
import "./business-page.scss";
import { Loading } from "../../components/atoms/loading-notice/loading-notice";
import { Carousel } from "../../components/organisms/carousel/carousel";
import { Layout } from "../../components/templates/layout/layout";

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
          <Layout numberOfColumns={2}>
            <div>
              <div className="mb--12">
                <h3>Datos de contacto</h3>
                <p className="grsp-business-page__address pv--8">
                  <Icon name="location" />
                  <span className="grsp-business-page__contact-text">{business.address}</span>
                </p>
                <p className="grsp-business-page__address mb--8">
                  <Icon name="link" />
                  <a className="grsp-business-page__contact-text" href={business.website} target="_blank">
                    {business.website}
                  </a>
                </p>
                <p className="grsp-business-page__address">
                  <Icon name="phone" />
                  <a className="grsp-business-page__contact-text" href={`tel:${business.phoneNumber}`}>
                    {business.phoneNumber}
                  </a>
                </p>
              </div>
              <BusinessMap coordinates={business.coordinates} />
            </div>
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
