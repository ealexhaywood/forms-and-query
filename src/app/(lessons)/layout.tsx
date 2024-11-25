import { ReactNode } from "react";

export default function LessonLayout({ children }: { children: ReactNode }) {
  return <div className="rounded border p-4 bg-background">{children}</div>;
}
