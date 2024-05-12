import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Icon as KiwiIcon, Button as KiwiButton } from "kiwi-design-system";
import { Searcher } from "../../../molecules/searcher/searcher";
import { useLoginContext } from "../../../../contexts/login-context/login-context";
import { useUserContext } from "../../../../contexts/user-context/user-context";
import { ProfileMenu } from "./profile-menu/profile-menu";
import "./menu.scss";

export const Menu = () => {
  let navigate = useNavigate();
  const [searcher, showSearcher] = useState(false);
  const [profileMenu, showProfileMenu] = useState(false);
  
  const { login, logOut } = useLoginContext();
  const { userProfile } = useUserContext();

  const handleNavigation = () => {
    showProfileMenu(false);
    navigate("/mi-perfil")
  };

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
        { profileMenu && <ProfileMenu options={options} onClose={() => showProfileMenu(false)} />}
      </span>}

    </div>
  );
};
