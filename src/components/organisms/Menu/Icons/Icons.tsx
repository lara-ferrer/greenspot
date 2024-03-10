import React, { useState } from "react";
import { Icon as KiwiIcon } from "kiwi-design-system";
import { Searcher } from "../../../molecules/Searcher/Searcher";
import "./icons.scss";
import { useUserContext } from "../../../../contexts/UserContext/UserContext";

export const Icons = () => {
  const [searcher, showSearcher] = useState(false);
  const [profileMenu, showProfileMenu] = useState(false);
  
  const { userProfile, login, logOut } = useUserContext();

  return (
    <div className="grsp-menu-icons">
      {!searcher ? (
        <span className="c-pointer" onClick={() => showSearcher(true)}>
          <KiwiIcon name="search" />
        </span>
      ) : (
        <Searcher placeholder="Buscar..." onClear={() => showSearcher(false)}/>
      )}
      <span className="c-pointer" onClick={() => showProfileMenu(true)}>
        <KiwiIcon name="user" />
      </span>
      {profileMenu && (
        <nav className="grsp-menu-icons__submenu">
          {!userProfile && <p onClick={() => login()}>Login</p>}
          {userProfile && (
            <>
              <p>Hola {userProfile.given_name}!</p>
              <p>Mi perfil</p>
              <p onClick={logOut}>Log out</p>
            </>
          )}
        </nav>
      )}
    </div>
  );
};
