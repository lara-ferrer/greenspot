import React, { useState } from "react";
import { Button, NoticeMessage } from "kiwi-design-system";
import { ModalLogin } from "../../../../../components/organisms/modal-login/modal-login";
import { useUserContext } from "../../../../../contexts/user-context/user-context";

export const NoReviewAllowed = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { userProfile } = useUserContext();

  return (
    <>
      {modalOpen && <ModalLogin onClose={() => setModalOpen(false)} />}
      {!userProfile && (
        <NoticeMessage>
          <p className="pv--12">
            Esta funcionalidad solo está disponible para usuarios logueados
          </p>
          <Button label="Loguearme" onClick={() => setModalOpen(true)} />
        </NoticeMessage>
      )}
    </>
  );
};
