import React from "react";
import { Button, Modal } from "kiwi-design-system";
import { useLoginContext } from "../../../contexts/login-context/login-context";
import './modal-login.scss';

export const ModalLogin = ({
    onClose
}) => {
    const { login } = useLoginContext();

    const body = "Si quieres formar parte de #LaRevoluciónVerde es muy sencillo: haz click en el siguiente botón y accede a tu perfil de usuario donde podrás activar funcionalidades exclusivas para usuarios."
    const footer = <Button state="primary" size="large" label="Loguearme con mi cuenta Google" onClick={() => login() } />

    return (
        <Modal size="large" heading="Accede a Greenspot" body={ body } footer={ footer } onClose={ onClose } />
    );
};
