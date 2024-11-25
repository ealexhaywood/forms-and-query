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

function Component({ name }: { name: string }) {
  const { data, isPending, isError } = useGetData();

  if (isPending) {
    return <div>Loading for {name}...</div>;
  }

  if (isError) {
    return "There was an error";
  }

  return (
    <div>
      <div>{name}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default function Problem1() {
  return (
    <div className="flex flex-col gap-4">
      <Component name="Component 1" />
      <Component name="Component 2" />
      <Component name="Component 3" />
    </div>
  );
}
