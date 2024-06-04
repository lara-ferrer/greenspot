import { createContext, useContext } from "react";
import { LoginProvider } from "./login-provider";

export const LoginContext = createContext({} as LoginProvider);

export const useLoginContext = () => {
  const loginContext = useContext(LoginContext);

  if (loginContext === undefined) {
    throw new Error('loginContext can only be used in a ConfigProvider tree');
  }

  return loginContext;
};