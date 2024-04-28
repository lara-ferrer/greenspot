import React, { Suspense, useEffect, useState } from "react";
import "../../styles/index.scss";
import { useParams } from "react-router-dom";
import { Business } from "../../types";
import { BusinessHeader, Carousel, Layout, Loading } from "../../components";
import { getBusiness } from "../../api/get-business";
import { BusinessMap } from "../../components/molecules/BusinessMap/BusinessMap";
import { getSanityImageUrl } from "../../sanity-images";
import { businessGalleryBps } from "../../constants/carousel-breakpoints";
import "./business-page.scss";
import { Reviews } from "./components/reviews/reviews";
import { OpeningHours } from "./components/opening-hours/opening-hours";

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
          <Reviews businessId={ business._id } reviews={ business.reviews && business.reviews }/>
        </div>
      </Suspense>
    )
  );
};

export default BusinessPage;
