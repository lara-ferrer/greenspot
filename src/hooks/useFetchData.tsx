import { useEffect, useState } from "react";
import { client } from "../sanity-client";

export const useFetchData = (groqQuery: string) => {
  const [data, setData] = useState();

  useEffect(() => {
    client.fetch(groqQuery)
    .then((data: any) => setData(data))
    .catch(console.error);
  }, [groqQuery]);

  return data;
};
