const problems = [
  {
    num: "01",
    title: "Users sign up, then disappear.",
    body: "People are interested enough to try your product, but don't always reach the moment where it becomes useful.",
  },
  {
    num: "02",
    title: "Customers keep getting stuck.",
    body: "A confusing workflow, complicated setup or unclear feature keeps generating the same questions.",
  },
  {
    num: "03",
    title: "The small improvements never get done.",
    body: "Your team is busy building what's next, while the things that would make the existing product better keep slipping down the list.",
  },
  {
    num: "04",
    title: "You know something needs improving, but aren't sure how.",
    body: "You can see the problem. Finding the right solution, designing it and making time to build it is another matter.",
  },
];

export default function Problems() {
  return (
    <section className="section" aria-labelledby="problems-h">
      <div className="section-head">
        <div>
          <p className="label">The problems</p>
          <h2 id="problems-h" className="h2">
            Good products still have rough edges.
          </h2>
        </div>
        <p>
          You&apos;ve built something people use. But there are probably parts of the
          experience that could work harder.
        </p>
      </div>
      <ul className="problem-grid">
        {problems.map((item) => (
          <li className="problem" key={item.num}>
            <span className="num" aria-hidden="true">
              {item.num}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <p className="kicker">That&apos;s where I come in.</p>
    </section>
  );
}
