import Image from "next/image";
import ArrowIcon from "./arrow-icon";
import CalendlyButton from "./calendly-button";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-h">
      <p className="label eyebrow">Independent Product Engineer · Design + Code</p>
      <h1 id="hero-h" className="h1">
        Your product is live. Let&apos;s make it work better.
      </h1>
      <div className="hero-row">
        <div className="hero-copy">
          <p className="lede">
            I help small software teams find and fix the friction in their products. From
            confusing onboarding and clunky workflows to improvements that never quite make
            the roadmap.
          </p>
          <p className="hero-who">
            <Image
              className="avatar-sm"
              src="/images/avatar.jpg"
              alt=""
              width={44}
              height={44}
            />
            One person for product thinking, design and frontend engineering.
          </p>
          <p className="hero-recent">
            <span className="num">Recently</span>
            <a href="/portfolio/print-evolved/">
              Redesigning and rebuilding Print Evolved&apos;s internal production platform
            </a>
          </p>
        </div>
        <div className="cta-row">
          <CalendlyButton className="btn btn--primary">
            Talk through a problem
            <ArrowIcon />
          </CalendlyButton>
          <a className="btn btn--secondary" href="#work">
            View selected work
          </a>
        </div>
      </div>
    </section>
  );
}
