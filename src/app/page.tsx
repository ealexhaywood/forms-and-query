import { Button } from "@/components/ui/button";
import { dataFetchingPages, formsPages } from "@/lib/pages";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-2xl tracking-tight font-bold pt-4">
        Data fetching
      </div>
      <ol className="list-decimal list-inside text-sm">
        {dataFetchingPages.map((page) => (
          <li key={page.title}>
            <Button asChild variant="link" className="py-0 h-6 text-wrap">
              <Link href={page.href}>{page.title}</Link>
            </Button>
          </li>
        ))}
      </ol>
      <div className="text-2xl tracking-tight font-bold pt-4">Forms</div>
      <ol className="list-decimal list-inside text-sm">
        {formsPages.map((page) => (
          <li key={page.title}>
            <Button asChild variant="link" className="py-0 h-6 text-wrap">
              <Link href={page.href}>{page.title}</Link>
            </Button>
          </li>
        ))}
      </ol>
    </>
  );
}
