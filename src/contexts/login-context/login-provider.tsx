import React from "react";
import { LoginContext } from "./login-context";
import { OverridableTokenClientConfig, googleLogout, useGoogleLogin } from "@react-oauth/google";

export type LoginProvider = {
  login: (overrideConfig?: OverridableTokenClientConfig) => void;
  logOut: () => void;
};

export const LoginProvider = ({ children }: any) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      document.cookie = `authToken=${codeResponse.access_token}; expires=Wed, 31 Dec 2025 23:59:59 GMT; Secure`;
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
  };

  const provider = {
    login,
    logOut,
  };

  return (
    <LoginContext.Provider value={provider}>
      {children}
    </LoginContext.Provider>
  );
};
