"use client";

import { useEffect, useState } from "react";

export default function PendingState() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/data");
      const json = await res.json();
      setData(json);
    };

    getData();
  }, []);

  if (!data) {
    return "Loading...";
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
