import ArrowIcon from "./arrow-icon";
import CalendlyButton from "./calendly-button";

export default function ClosingCta() {
  return (
    <section className="cta" id="contact" aria-labelledby="cta-h">
      <h2 id="cta-h" className="h2">
        Something in your product bothering you?
      </h2>
      <div className="stack">
        <p>
          Maybe you know exactly what needs fixing. Maybe you just have a feeling something
          could work better.
        </p>
        <p>
          Tell me a little about it and we can work out whether I&apos;m the right person to
          help.
        </p>
      </div>
      <div className="cta-actions">
        <CalendlyButton className="btn btn--primary btn--lg">
          Let&apos;s talk about it
          <ArrowIcon />
        </CalendlyButton>
        <p>A short conversation. No lengthy pitch or commitment.</p>
      </div>
    </section>
  );
}
