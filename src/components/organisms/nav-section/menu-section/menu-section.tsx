import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Icon as KiwiIcon, Button as KiwiButton } from "kiwi-design-system";
import { useLoginContext } from "../../../../contexts/login-context/login-context";
import { useUserContext } from "../../../../contexts/user-context/user-context";
import { ProfileMenu } from "./profile-menu/profile-menu";
import "./menu-section.scss";

export const Menu = () => {
  let navigate = useNavigate();
  const [profileMenu, showProfileMenu] = useState(false);
  
  const { login, logOut } = useLoginContext();
  const { userProfile } = useUserContext();

  const handleNavigation = () => {
    handleOnClose();
    navigate("/mi-perfil")
  };

  const handleOnClose = () => showProfileMenu(false)

  const options = [
    {
      name: "Ver perfil",
      action: () => handleNavigation(),
    },
    {
      name: "Logout",
      action: () => logOut(),
    },
  ];

  return (
    <div className="grsp-menu">
      {!userProfile && <KiwiButton label="Iniciar sesión" onClick={() => login()} />}
      {userProfile && <span className="c-pointer" onClick={() => showProfileMenu(true)}>
        <KiwiIcon name="user" />
      </span>}
      { profileMenu && <ProfileMenu options={options} onClose={() => showProfileMenu(false)} />}
    </div>
  );
};
