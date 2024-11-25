"use client";

import { useEffect, useState } from "react";

function useGetData() {
  const [data, setData] = useState();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/data");
        const json = await res.json();
        setData(json);
      } catch {
        setError("There was an error");
      }
    };

    getData();
  }, []);

  return { data, isPending: !data && !error, isError: Boolean(error) };
}

export default function CapturingQueryLogic() {
  const { data, isPending, isError } = useGetData();

  if (isPending) {
    return "Loading...";
  }

  if (isError) {
    return "There was an error";
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
