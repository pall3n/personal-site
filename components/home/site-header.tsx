import CalendlyButton from "./calendly-button";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="brand" href="/">
          <strong>Patrick Allen</strong>
          <span className="label">Product engineer</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#how">How I help</a>
          <a href="#about">About</a>
          <CalendlyButton className="nav-cta">Let&apos;s talk</CalendlyButton>
        </nav>
      </div>
    </header>
  );
}
