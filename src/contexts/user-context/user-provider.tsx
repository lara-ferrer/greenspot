import React, { useEffect, useState } from "react";
import { UserContext } from "./user-context";
import { UserProfile } from "../../types/user-profile";
import axios from "axios";

export type UserProvider = {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
};

export const UserProvider = ({ children }: any) => {
  const [userProfile, setUserProfile] = useState<UserProfile>();
  
  const authTokenCookie = document.cookie.split(";")[0].split("authToken=").pop();

  useEffect(() => {
    if (authTokenCookie) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${authTokenCookie}`,
          {
            headers: {
              Authorization: `Bearer ${authTokenCookie}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUserProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [authTokenCookie]);

  const provider = {
    userProfile,
    setUserProfile
  };

  return (
    <UserContext.Provider value={provider}>
      {children}
    </UserContext.Provider>
  );
};
