import React, { useEffect, useState } from "react";
import { client } from "../sanity-client";

export const useFetchData = (groqQuery: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(groqQuery);
      setData(data);
    };

    fetchData();
  });

  return data;
};
