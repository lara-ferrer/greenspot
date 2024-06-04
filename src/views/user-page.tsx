import React, { Suspense } from "react";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import { useUserContext } from "../contexts/user-context/user-context";
import { Header } from "../components/organisms/header-section/header-section";
import { Loading } from "../components/atoms/loading-notice/loading-notice";
import { Layout } from "../components/templates/layout-temp/layout-temp";

export const UserPage = () => {
  const { userProfile } = useUserContext();

  return (
    <Suspense fallback={<Loading />}>
      <Header title="Mi perfil" />
        <Layout numberOfColumns={1}>
          <KiwiTextCard>
            <div className="d-flex">
              <img src={userProfile.picture} alt="Foto del usuario" />
              <div>
                <p><strong>Nombre:</strong> { userProfile.name }</p>
                <p><strong>E-mail:</strong> { userProfile.email }</p>
              </div>
            </div>
          </KiwiTextCard>
        </Layout>
    </Suspense>
  );
};

export default UserPage;