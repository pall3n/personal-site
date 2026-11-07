const focusAreas = [
  {
    num: "01",
    title: "Onboarding & activation",
    desc: "Help new users understand and experience the value of your product.",
  },
  {
    num: "02",
    title: "Product UX & workflows",
    desc: "Make complicated tasks simpler, clearer and more intuitive.",
  },
  {
    num: "03",
    title: "Conversion & upgrades",
    desc: "Reduce unnecessary friction between interest, trial and purchase.",
  },
  {
    num: "04",
    title: "Frontend polish",
    desc: "Improve the interactions, responsiveness and details that make software feel considered.",
  },
];

export default function HowIHelp() {
  return (
    <section className="section split" id="how" aria-labelledby="how-h">
      <div>
        <p className="label" style={{ marginBottom: 14 }}>
          How I help
        </p>
        <h2 id="how-h" className="h2">
          Less talking about improvements. More making them.
        </h2>
        <div className="stack">
          <p>
            I work directly with founders and small product teams to improve the software
            they&apos;ve already built.
          </p>
          <p>
            Sometimes that means digging into an onboarding flow to understand why users get
            stuck. Sometimes it&apos;s simplifying a complicated interaction or giving an
            important feature the attention it deserves.
          </p>
          <p style={{ color: "var(--ink)" }}>
            I bring the product thinking, design and engineering together, so we can move
            from identifying a problem to doing something about it.
          </p>
        </div>
      </div>
      <div className="focus-card">
        <p className="label">The work typically covers</p>
        <ul>
          {focusAreas.map((item) => (
            <li key={item.num}>
              <span className="num" aria-hidden="true">
                {item.num}
              </span>
              <span>
                <strong>{item.title}</strong>
                <span className="desc">{item.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
