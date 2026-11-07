import Image from "next/image";
import ArrowIcon from "./arrow-icon";

export default function SelectedWork() {
  return (
    <section className="section" id="work" aria-labelledby="work-h">
      <div className="section-head">
        <div>
          <p className="label">Selected work</p>
          <h2 id="work-h" className="h2">
            A few things I&apos;ve worked on.
          </h2>
        </div>
        <p>
          I&apos;ve worked across SaaS products, operational tools and creator platforms,
          designing experiences and building the interfaces behind them.
        </p>
      </div>

      <article className="feature" aria-labelledby="pe-h">
        <a
          className="shot shot--wide"
          href="/portfolio/print-evolved/"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src="/images/projects/print-evolved/batch/manual-batch-2.png"
            alt=""
            width={1600}
            height={1000}
            sizes="(max-width: 1160px) 100vw, 1160px"
            loading="lazy"
          />
        </a>
        <div className="feature-meta">
          <div className="feature-title">
            <span className="num">01</span>
            <h3 id="pe-h">
              <a className="project-link" href="/portfolio/print-evolved/">
                Print Evolved
              </a>
            </h3>
            <p>Internal production platform · 2024 to present</p>
          </div>
          <dl className="facts">
            <div>
              <dt className="label">Challenge</dt>
              <dd>
                Operators switched between ageing systems by customer, carrier or product,
                and memorised routing exceptions. Training was slow and dispatch errors were
                common.
              </dd>
            </div>
            <div>
              <dt className="label">What I did</dt>
              <dd>
                Shadowed operators on live jobs, mapped the workflows, then designed and
                built three focused apps on a shared React and Storybook component system.
              </dd>
            </div>
            <div className="is-outcome">
              <dt className="label">Outcome</dt>
              <dd>
                Operators now complete workflows in one app instead of three, with fewer
                dispatch errors and faster onboarding for new staff.
              </dd>
            </div>
          </dl>
        </div>
      </article>

      <div className="work-pair">
        <article className="work-card" aria-labelledby="sn-h">
          <a
            className="shot shot--card"
            href="/portfolio/snackable/"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src="/images/projects/snackable/editor-split.png"
              alt=""
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 560px"
              loading="lazy"
            />
          </a>
          <div className="card-head">
            <h3 id="sn-h">
              <span className="num">02</span>
              <a className="project-link" href="/portfolio/snackable/">
                Snackable
              </a>
            </h3>
            <p>MVP product design · Decode · 2023</p>
          </div>
          <p className="soft">
            Long courses rarely get finished, and heavy LMS tools are hard for creators to
            use. I defined the product structure around short &quot;nuggets&quot; and designed
            the creator and learner flows end to end.
          </p>
          <p>
            <strong>Outcome:</strong> a clickable prototype the founder used to validate the
            concept and prioritise build phases.
          </p>
        </article>

        <article className="work-card" aria-labelledby="pa-h">
          <a
            className="shot shot--card"
            href="/portfolio/podcast-app/"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src="/images/projects/podcast/podcast-screens-1.png"
              alt=""
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 560px"
              loading="lazy"
            />
          </a>
          <div className="card-head">
            <h3 id="pa-h">
              <span className="num">03</span>
              <a className="project-link" href="/portfolio/podcast-app/">
                Podcast App
              </a>
            </h3>
            <p>Own product · Design + React Native · 2023</p>
          </div>
          <p className="soft">
            Podcast discovery is passive, and listening is cut off from community. I designed
            the listening, discovery and community flows, then built the front end in React
            Native.
          </p>
          <p>
            <strong>Outcome:</strong> a working prototype covering onboarding, feed, player,
            comments and queue.
          </p>
        </article>
      </div>

      <a className="btn btn--secondary work-more" href="/portfolio">
        Explore selected work
        <ArrowIcon />
      </a>
    </section>
  );
}
