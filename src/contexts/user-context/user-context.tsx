import { createContext, useContext } from "react";
import { UserProvider } from "./user-provider";

export const UserContext = createContext({} as UserProvider);

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error('userContext can only be used in a ConfigProvider tree');
  }

  return userContext;
};