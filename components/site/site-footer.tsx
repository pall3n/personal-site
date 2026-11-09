export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>Patrick Allen · Product Engineer · UK-based</p>
        <nav aria-label="Footer">
          <a href="/portfolio/">Portfolio</a>
          <a
            href="https://www.linkedin.com/in/patrick-builds"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/patrickallenxyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          {/* <a href="mailto:hey@patrickallen.xyz">Email</a> */}
        </nav>
      </div>
    </footer>
  );
}
