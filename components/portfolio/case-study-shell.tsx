import type { ReactNode } from "react";
import "@/app/site.css";
import SiteHeader from "@/components/site/site-header";
import SiteFooter from "@/components/site/site-footer";
import ClosingCta from "@/components/site/closing-cta";

export default function CaseStudyShell({ children }: { children: ReactNode }) {
  return (
    <div className="pa-site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader navPrefix="/#" />
      <main id="main">
        <div className="container">
          {children}
          <ClosingCta />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
