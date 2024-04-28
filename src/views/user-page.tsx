import React, { Suspense } from "react";
import { Loading } from "../components";
import { useUserContext } from "../contexts/user-context/user-context";

export const UserPage = () => {
  const { userProfile } = useUserContext();

  return (
    <Suspense fallback={<Loading />}>
      <pre>{ userProfile.given_name }</pre>
    </Suspense>
  );
};

export default UserPage;