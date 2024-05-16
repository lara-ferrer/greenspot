import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Layout, Loading } from "../../components";
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
          <BusinessHeader businessName={business.name} />
          <Layout numberOfColumns={2}>
            <div>
              <h3>Datos de contacto</h3>
              <p className="grsp-business-page__address pv--8">
                {business.address}
              </p>
              <h3>Localización</h3>
              <p className="grsp-business-page__address pv--8">
                {business.address}
              </p>
              <BusinessMap coordinates={business.coordinates} />
            </div>
            <OpeningHours business={ business } />
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
            <Reviews businessId={ business._id } reviews={ business.reviews && business.reviews }/>
          </ReviewsProvider>
        </div>
      </Suspense>
    )
  );
};

export default BusinessPage;
