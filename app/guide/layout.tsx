import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { guideSource } from "@/lib/source";
import { GeistSans } from "geist/font/sans";
import { config } from "@/app.config";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={GeistSans.className}>
      <DocsLayout
        tree={guideSource.pageTree}
        {...baseOptions}
        sidebar={{
          className: "font-medium",
        }}
        githubUrl={`https://github.com/${config.repository}`}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
