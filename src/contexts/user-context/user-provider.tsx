import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./user-context";
import { UserProfile } from "../../types/user-profile";
import { useLoginContext } from "../login-context/login-context";

export type UserProvider = {
  userProfile: UserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
};

export const UserProvider = ({ children }: any) => {
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const { isLoginSuccessful } = useLoginContext();
  
  const authTokenCookie = document.cookie.split(";")[0].split("authToken=").pop();

  useEffect(() => {
    if (authTokenCookie && isLoginSuccessful) {
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
