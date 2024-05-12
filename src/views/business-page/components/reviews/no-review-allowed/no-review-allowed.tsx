import React, { useEffect } from "react";
import { Button, NoticeMessage } from "kiwi-design-system";
import { ModalLogin } from "../../../../../components/organisms/modal-login/modal-login";
import { useUserContext } from "../../../../../contexts/user-context/user-context";
import { useReviewsContext } from "../../../../../contexts/reviews-context/reviews-context";
import { useLoginContext } from "../../../../../contexts/login-context/login-context";

export const NoReviewAllowed = () => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useReviewsContext();
  const { userProfile } = useUserContext();
  const { isLoginSuccessful } = useLoginContext();

  useEffect(() => {
    isLoginSuccessful && setIsLoginModalOpen(false);
  }, [ isLoginSuccessful ]);

  return (
    <>
      {isLoginModalOpen && <ModalLogin onClose={() => setIsLoginModalOpen(false)} />}
      {!userProfile && (
        <NoticeMessage>
          <p className="pv--12">
            Esta funcionalidad solo está disponible para usuarios logueados
          </p>
          <Button label="Loguearme" onClick={() => setIsLoginModalOpen(true)} />
        </NoticeMessage>
      )}
    </>
  );
};
