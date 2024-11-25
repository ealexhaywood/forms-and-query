"use client";

import { pages } from "@/lib/pages";
import { usePathname } from "next/navigation";

export function Current() {
  const pathname = usePathname();
  const page = pages.find((page) => page.href === pathname);

  return <h2 className="text-center text-lg font-medium">{page?.title}</h2>;
}
