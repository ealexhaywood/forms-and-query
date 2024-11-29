import { Button } from "@/components/ui/button";
import { dataFetchingPages, formsPages, recipePages } from "@/lib/pages";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="pt-6 space-y-2">
        <div className="text-2xl tracking-tight font-bold">Data fetching</div>
        <ol className="list-decimal list-inside text-sm">
          {dataFetchingPages.map((page) => (
            <li key={page.title}>
              <Button asChild variant="link" className="py-0 h-6 text-wrap">
                <Link href={page.href}>{page.title}</Link>
              </Button>
            </li>
          ))}
        </ol>
      </div>
      <div className="space-y-2">
        <div className="text-2xl tracking-tight font-bold">Forms</div>
        <ol className="list-decimal list-inside text-sm">
          {formsPages.map((page) => (
            <li key={page.title}>
              <Button asChild variant="link" className="py-0 h-6 text-wrap">
                <Link href={page.href}>{page.title}</Link>
              </Button>
            </li>
          ))}
        </ol>
      </div>
      <div className="space-y-2">
        <div className="text-2xl tracking-tight font-bold">Recipes</div>
        <ol className="list-decimal list-inside text-sm">
          {recipePages.map((page) => (
            <li key={page.title}>
              <Button asChild variant="link" className="py-0 h-6 text-wrap">
                <Link href={page.href}>{page.title}</Link>
              </Button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
