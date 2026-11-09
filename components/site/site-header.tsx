import CalendlyButton from "./calendly-button";

type SiteHeaderProps = {
  /** Prefix for in-page anchors. Use "" on home, "/#" on other routes. */
  navPrefix?: "" | "/#";
};

export default function SiteHeader({ navPrefix = "" }: SiteHeaderProps) {
  const workHref = navPrefix ? `${navPrefix}work` : "#work";
  const howHref = navPrefix ? `${navPrefix}how` : "#how";
  const aboutHref = navPrefix ? `${navPrefix}about` : "#about";

  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="/">
          <strong>Patrick Allen</strong>
          <span className="label">Product engineer</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href={workHref}>Work</a>
          <a href={howHref}>How I help</a>
          <a href={aboutHref}>About</a>
          <CalendlyButton className="nav-cta">Let&apos;s talk</CalendlyButton>
        </nav>
      </div>
    </header>
  );
}
