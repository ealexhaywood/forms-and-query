"use client";

import { dataFetchingPages, formsPages } from "@/lib/pages";
import { usePathname } from "next/navigation";

export function Current() {
  const pathname = usePathname();
  const page = dataFetchingPages
    .concat(formsPages)
    .find((page) => page.href === pathname);

  return (
    <h2 className="text-center text-lg font-medium py-4">{page?.title}</h2>
  );
}
