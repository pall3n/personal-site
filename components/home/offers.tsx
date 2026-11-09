import CalendlyButton from "./calendly-button";

export default function Offers() {
  return (
    <section className="section" aria-labelledby="ways-h">
      <div className="section-head">
        <div>
          <p className="label">Ways to work together</p>
          <h2 id="ways-h" className="h2">
            Start small. Make something better.
          </h2>
        </div>
        <p>You don&apos;t need to commit to a huge redesign or a long engagement.</p>
      </div>
      <div className="offers">
        <article className="offer" aria-labelledby="ff-h">
          <div className="offer-head">
            <h3 id="ff-h">Find &amp; Fix</h3>
            <span className="label">One-off · Fixed scope</span>
          </div>
          <p className="offer-sub">One problem. One focused improvement.</p>
          <div className="offer-body">
            <p>Got a feature or flow that isn&apos;t working as well as it should?</p>
            <p>
              We&apos;ll look at the issue, agree on a manageable improvement and work towards
              a concrete outcome. Depending on the scope, that might be a redesigned
              experience, a frontend change shipped to your codebase, or a clear plan for a
              larger fix.
            </p>
          </div>
          <div className="offer-foot">
            <p>
              <span className="price">From £550 +VAT</span>
              <span className="price-note">per fixed-scope engagement</span>
            </p>
            <CalendlyButton
              className="btn btn--secondary btn--sm"
              aria-label="Discuss a fix: Find and Fix engagement"
            >
              Discuss a fix
            </CalendlyButton>
          </div>
        </article>

        <article className="offer offer--monthly" aria-labelledby="mi-h">
          <div className="offer-head">
            <h3 id="mi-h">Monthly Improvements</h3>
            <span className="label">Ongoing · Limited slots</span>
          </div>
          <p className="offer-sub">A little more attention for your product, every month.</p>
          <div className="offer-body">
            <p>
              For teams that regularly have things worth improving but never quite have the
              capacity.
            </p>
            <p>
              Reserve a day of my time each month to tackle a prioritised product
              improvement, whether that&apos;s improving onboarding, refining an existing
              feature or working through a particularly frustrating bit of UX.
            </p>
            <p>
              You get someone who becomes familiar with your product, understands what
              you&apos;re trying to achieve and can keep making useful progress.
            </p>
          </div>
          <div className="offer-foot">
            <p>
              <span className="price">From £500/month +VAT</span>
              <span className="price-note">One reserved day per month</span>
            </p>
            <CalendlyButton className="btn btn--primary btn--sm">
              Ask about a monthly slot
            </CalendlyButton>
          </div>
        </article>
      </div>
      <p className="fine">
        For larger problems, we&apos;ll agree a separate scope and price before starting. No
        vague promises to redesign an entire product in a day.
      </p>
    </section>
  );
}
