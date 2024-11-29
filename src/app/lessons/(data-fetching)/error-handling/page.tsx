"use client";

import { useEffect, useState } from "react";

export default function ErrorHandling() {
  const [data, setData] = useState();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/data?reject=true");
        const json = await res.json();
        setData(json);
      } catch {
        setError("There was an error");
      }
    };

    getData();
  }, []);

  if (error) {
    return error;
  }

  if (!data) {
    return "Loading...";
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
