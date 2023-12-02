import React, { Suspense, useEffect, useState } from "react";
import "../../styles/index.scss";
import { useParams } from "react-router-dom";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import { Business } from "../../types";
import { BusinessHeader, Carousel, Layout, Loading } from "../../components";
import { getBusiness } from "../../api/getBusiness";
import { BusinessMap } from "../../components/molecules/BusinessMap/BusinessMap";
import { getSanityImageUrl } from "../../sanity-images";
import { cityBps } from "../../constants/carousel-breakpoints";
import "./business-page.scss";

const BusinessPage = () => {
  const { businessUrl } = useParams();
  const [business, setBusiness] = useState<Business>();

  useEffect(() => {
    getBusiness(businessUrl).then((data) => setBusiness(data));
  }, []);

  return (
    business && (
      <Suspense fallback={<Loading />}>
        <div className="grsp-business-page">
          <BusinessHeader businessName={business.name} />
          <Layout numberOfColumns={2}>
            <div>
              <h3>Localización</h3>
              <p className="grsp-business-page__address pv--8">{business.address}</p>
              <BusinessMap coordinates={business.coordinates} />
            </div>
            <div>
              <KiwiTextCard>
                <h4>Horario de apertura</h4>
                <table>
                  {business.schedule.map(({openingDay, opening, closing}) => (
                    <tr>
                      <th className="grsp-business-page__opening-day">
                        <h5 className="t-uppercase">{openingDay}</h5>
                      </th>
                      <th className="grsp-business-page__opening-hours">
                        <p>{opening}h - {closing}h</p>
                      </th>
                    </tr>
                  ))}
                </table>
              </KiwiTextCard>
            </div>
          </Layout>
          <Layout numberOfColumns={1}>
            <div>
              <h3>Galería</h3>
              <div className="grsp-business-page__gallery">
                <Carousel carouselItems={[]} breakpoints={cityBps} />
              </div>
            </div>
          </Layout>
          <Layout numberOfColumns={1}>
            <div>
              <h3>Otros negocios cerca</h3>
            </div>
          </Layout>
        </div>
      </Suspense>
    )
  );
};

export default BusinessPage;
