"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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

export default function Problem2() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id="my-checkbox"
          checked={hidden}
          onCheckedChange={(checked: boolean) => setHidden(checked)}
        />
        <Label htmlFor="my-checkbox">Hide the component</Label>
      </div>
      {!hidden && <Component name="Component 1" />}
    </div>
  );
}
