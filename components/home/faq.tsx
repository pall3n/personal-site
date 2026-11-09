const faqs = [
  {
    q: "Do you only work on existing products?",
    a: "That's my main focus. I think there's a lot of value in making an existing product better, although I'm open to interesting new product work too.",
    open: true,
  },
  {
    q: "Can you actually implement the changes?",
    a: "Yes. I work across design and frontend engineering. Depending on the project, I can work in your existing Vue.js or React/Next.js codebase or provide designs ready for your team to implement.",
  },
  {
    q: "What if we don't know exactly what's wrong?",
    a: "That's fine. We can start with a particular area of concern and work out what needs attention. If the problem requires deeper investigation, I'll recommend that before committing to a build.",
  },
  {
    q: "What if the work takes longer than a day?",
    a: "We'll scope it properly. Small improvements can fit into a focused engagement. More involved work gets a separate estimate rather than being squeezed into an unrealistic promise.",
  },
  {
    q: "Can we work together regularly?",
    a: "Yes. I offer a limited number of monthly product improvement slots, alongside one-off engagements.",
  },
];

export default function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-h">
      <div>
        <p className="label" style={{ marginBottom: 14 }}>
          FAQs
        </p>
        <h2 id="faq-h" className="h2">
          Good questions to ask first.
        </h2>
      </div>
      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.q} open={item.open || undefined}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
