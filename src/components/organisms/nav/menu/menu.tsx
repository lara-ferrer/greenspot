import React, { useState } from "react";
import { Icon as KiwiIcon, Button as KiwiButton } from "kiwi-design-system";
import { Searcher } from "../../../molecules/searcher/searcher";
import { useLoginContext } from "../../../../contexts/login-context/login-context";
import { useUserContext } from "../../../../contexts/user-context/user-context";
import "./icons.scss";

export const Menu = () => {
  const [searcher, showSearcher] = useState(false);
  const [profileMenu, showProfileMenu] = useState(false);
  
  const { login } = useLoginContext();
  const { userProfile } = useUserContext();

  return (
    <div className="grsp-menu-icons">
      {!searcher ? (
        <span className="c-pointer" onClick={() => showSearcher(true)}>
          <KiwiIcon name="search" />
        </span>
      ) : (
        <Searcher placeholder="Buscar..." onClear={() => showSearcher(false)}/>
      )}
      {!userProfile && <KiwiButton label="Iniciar sesión" onClick={() => login()} />}
      {userProfile && <span className="c-pointer" onClick={() => showProfileMenu(true)}>
        <KiwiIcon name="user" />
      </span>}
    </div>
  );
};
