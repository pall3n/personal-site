type SnapshotItem = { label: string; copy: string };

type CaseHeroProps = {
  title: string;
  subtitle: string;
  snapshot: SnapshotItem[];
};

export default function CaseHero({ title, subtitle, snapshot }: CaseHeroProps) {
  return (
    <header className="case-hero" aria-labelledby="case-h">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <a href="/portfolio/">Portfolio</a>
        <span className="breadcrumb-sep" aria-hidden="true">
          /
        </span>
        <span>{title}</span>
      </nav>
      <p className="label">Case study</p>
      <h1 id="case-h" className="h1">
        {title}
      </h1>
      <p className="lede">{subtitle}</p>
      <dl className="snapshot">
        {snapshot.map((item) => (
          <div key={item.label}>
            <dt className="label">{item.label}</dt>
            <dd>{item.copy}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
