import axios from "axios";
import { useState, useEffect } from "react";
import { googleLogout } from '@react-oauth/google';
import { UserProfile } from "../types/userProfile";

export const useUserProfile = (user: any) => {
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const logOut = () => {
    googleLogout();
    setUserProfile(null);
    };

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setUserProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return { userProfile, logOut };
};
