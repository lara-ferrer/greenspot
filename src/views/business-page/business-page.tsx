import React, { Suspense, useEffect, useState } from 'react';
import '../../styles/index.scss';
import { useParams } from 'react-router-dom';
import { Business } from "../../types";
import { BusinessHeader, Layout, Loading } from '../../components';
import { getBusiness } from '../../api/getBusiness';
import { GridGallery } from '../../components/organisms/GridGallery/GridGallery';
import './business-page.scss';
import { BusinessMap } from '../../components/molecules/BusinessMap/BusinessMap';

const BusinessPage = () => {
  const { businessUrl } = useParams();
  const [business, setBusiness] = useState<Business>();

  useEffect(() => {
    getBusiness(businessUrl).then((data) => setBusiness(data));
  }, []);

  return (
    business &&
    <Suspense fallback={ <Loading/> }>
      <BusinessHeader businessName={business.name} />
      <Layout numberOfColumns={2}>
        <BusinessMap coordinates={business.coordinates} />
        <div className='grsp-business-page__gallery'>
          <GridGallery images={[ business.coverImage ]} />
        </div>
      </Layout>
    </Suspense>
  );
}

export default BusinessPage;