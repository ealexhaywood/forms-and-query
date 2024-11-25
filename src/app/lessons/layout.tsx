import { Current } from "@/app/current";
import { ReactNode } from "react";

export default function LessonLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4">
      <Current />
      <div className="rounded border p-4 bg-background">{children}</div>
    </div>
  );
}
