import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { useGoogleLogin } from "@react-oauth/google";
import { useUserProfile } from "../../hooks/useUserProfile";

export type UserProvider = {
  user: any,
  userProfile: any,
  login: any,
  logOut: any
};

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const { userProfile, logOut } = useUserProfile(user);

  const provider = {
    user,
    userProfile,
    login,
    logOut
  }
    return (
      <UserContext.Provider value={ provider }>
        { children }
      </UserContext.Provider>
    );
  };