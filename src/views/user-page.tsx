import React, { Suspense } from "react";
import { TextCard as KiwiTextCard } from "kiwi-design-system";
import { Layout, Loading } from "../components";
import { useUserContext } from "../contexts/user-context/user-context";
import { Header } from "../components/organisms/header/header";

export const UserPage = () => {
  const { userProfile } = useUserContext();

  return (
    <Suspense fallback={<Loading />}>
      <Header title="Mi perfil" />
        <Layout numberOfColumns={2}>
          <KiwiTextCard>
            <div className="d-flex">
              <img src={userProfile.picture} alt="Foto del usuario" />
              <div>
                <p><strong>Nombre:</strong> { userProfile.name }</p>
                <p><strong>E-mail:</strong> { userProfile.email }</p>
              </div>
            </div>
          </KiwiTextCard>
          <div>
            <h2>Mis reseñas</h2>
          </div>
        </Layout>
    </Suspense>
  );
};

export default UserPage;