"use client";

import { dataFetchingPages, formsPages, recipePages } from "@/lib/pages";
import { usePathname } from "next/navigation";

export function Current() {
  const pathname = usePathname();
  const page = dataFetchingPages
    .concat(formsPages)
    .concat(recipePages)
    .find((page) => page.href === pathname);

  return (
    <h2 className="text-center text-lg font-medium py-4">{page?.title}</h2>
  );
}
