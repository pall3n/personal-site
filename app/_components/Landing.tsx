"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { siteContent as C } from "@/app/_content/site";

/* ── Helper components ────────────────────────────────── */

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-10 text-v8-faint text-xs font-medium uppercase tracking-[0.15em]">
      <span>{number}</span>
      <span className="flex-1 border-t border-v8-hairline" />
      <span>{title}</span>
      <span className="flex-1 border-t border-v8-hairline" />
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-v8-hairline p-6 md:p-8 card-hover- ${className}`}>
      {children}
    </div>
  );
}

/* ── Main component ───────────────────────────────────── */

export default function Landing() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const introRef = useRef<HTMLDivElement>(null);

  /* Sticky CTA: show after scrolling past the intro */
  useEffect(() => {
    const el = introRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Scroll-reveal: animate .reveal elements on viewport enter */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-v8-bg text-v8-text text-[15px] leading-[1.55]">

      {/* ── HEADER ────────────────────────────────────── */}
      <header className="max-w-[1100px] mx-auto px-6 md:px-10 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-v8-accent to-v8-accent-light flex items-center justify-center">
            <span className="text-white text-[11px] font-extrabold leading-none">PA</span>
          </div>
          <span className="text-sm font-medium text-v8-text tracking-tight">patrick allen</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-v8-subtle">
          <span
            className="w-2 h-2 rounded-full bg-v8-green inline-block"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          <span className="hidden sm:inline">{C.status}</span>
          <span className="sm:hidden">Available</span>
        </div>
      </header>

      {/* ── MANIFESTO INTRO ───────────────────────────── */}
      <section ref={introRef} className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-8- md:pb-8- reveal-">
        <p
          className="text-body"
        >
          I&apos;m Patrick{" "}
          <span className="obj inline-flex -mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-v8-accent to-v8-accent-light align-middle">
            <img src="/images/avatar.jpg" alt="Patrick" className="w-full h-full object-cover rounded-full" />
          </span>{" "}
          an extra pair of hands that designs{" "}
          <span className="obj inline-block w-[0.55em] h-[0.55em] rounded-[3px] bg-v8-orange align-middle" />{" "}
          and builds{" "}
          <span className="obj inline-block w-[0.55em] h-[0.55em] rounded-[3px] bg-v8-green align-middle" />{" "}
          products end-to-end. I've been doing it for about a decade, usually at small teams where one person holding the whole picture matters more than an org chart. Lately a lot of that has been in audio and podcasting, where I've built and shipped my own tools.
        </p>

        <p
          className="text-body"
        >
          You're shipping fast with a small team. The product works, but there's a backlog of things that never get the polish they deserve, the flow that's almost right, the feature that's been "next quarter" for three quarters, the screens that look like engineers built them.{" "}
          <span className="obj inline-block w-[1.2em] h-[0.85em] rounded-[4px] border-2 border-v8-hairline-strong bg-white align-middle relative">
            <span className="absolute top-[2px] left-[3px] flex gap-[2px]">
              <span className="w-[3px] h-[3px] rounded-full bg-v8-faint" />
              <span className="w-[3px] h-[3px] rounded-full bg-v8-faint" />
              <span className="w-[3px] h-[3px] rounded-full bg-v8-faint" />
            </span>
          </span>{" "}
          You don't have a spare designer. You don't want the overhead of a hire or the layers of an agency. You just need someone who can take a thing and make it good, end to end, without being managed.
        </p>
      </section>

      {/* ── 01 HOW I WORK ─────────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8- pb-8 md:pb-10 reveal-">
        <p className="text-body">
          {C.intro.contract}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 -mx-12">
          <Card>
            <h3 className="text-lg md:text-xl font-bold tracking-tight mb-1"> {C.leverage.items[0].t}</h3>
            <p className="md:text-xl text-neutral-400 font-bold">{C.leverage.items[0].d}</p>
          </Card>
          <Card>
            <h3 className="text-lg md:text-xl font-bold tracking-tight mb-1">{C.leverage.items[1].t}</h3>
            <p className="md:text-xl text-neutral-400 font-bold">{C.leverage.items[1].d}</p>
          </Card>
        </div>

      </section>

      {/* ── 02 RECENT WORK ────────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        {/* <SectionHeader number="02" title="Recent work" /> */}
        <h2 className="text-body">
          Audio builds first. The craft holds up everywhere.
        </h2>

        {/* Featured project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {C.featuredProjects.map((proj, i) => (
            <Card key={i} className="overflow-hidden !p-0">
              <div
                className={`h-32 ${proj.color === "orange"
                  ? "bg-gradient-to-br from-orange-100 to-orange-50"
                  : "bg-gradient-to-br from-emerald-100 to-emerald-50"
                  }`}
              />
              <div className="p-4 flex items-center gap-3">
                <span
                  className={`w-3.5 h-3.5 rounded-full ${proj.color === "orange" ? "bg-v8-orange" : "bg-v8-green"
                    }`}
                />
                <div>
                  <div className="font-bold text-sm">{proj.name}</div>
                  <div className="text-xs text-v8-muted">{proj.subtitle}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Thumbnail grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {C.work.map((w, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-xl border border-v8-hairline card-hover"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── 03 IN THEIR WORDS ─────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        {/* <SectionHeader number="03" title="In their words" /> */}
        <div className="border-l-4 border-v8-accent pl-6 md:pl-8">
          <span className="text-5xl leading-none text-v8-accent-wash font-serif">&ldquo;</span>
          <p className="text-xl md:text-2xl font-bold tracking-tight leading-[1.3] -mt-6">
            {C.socialProof.quote}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <span className="w-8 h-8 rounded-full bg-v8-orange flex-shrink-0" />
            <div className="text-sm">
              <span className="font-bold">{C.socialProof.name}</span>
              <span className="text-v8-muted">{" · "}{C.socialProof.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 RIGHT FIT IF ───────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        {/* <SectionHeader number="04" title="Right fit" /> */}
        <div className="flex flex-col gap-3">
          {C.contractFit.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-v8-green flex-shrink-0 flex items-center justify-center mt-0.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="text-[15px] leading-[1.55]">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 WORKING TOGETHER ───────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        {/* <SectionHeader number="05" title="Working together" /> */}
        <h2 className="text-2xl font-bold tracking-tight mb-6">Two ways in.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Sprint card */}
          <Card>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-v8-green-light text-v8-text mb-4">
              {C.engagement.sprint.subtitle}
            </span>
            <h3 className="text-lg font-bold tracking-tight mb-1">{C.engagement.sprint.title}</h3>
            <p className="text-sm text-v8-subtle leading-[1.55] mb-5">{C.engagement.sprint.description}</p>
            <div className="flex flex-col gap-3">
              {C.engagement.sprint.breakdown.map((row, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-v8-accent bg-v8-accent-wash/40 rounded-full px-2.5 py-0.5 mt-0.5 flex-shrink-0">
                    {row.label}
                  </span>
                  <span className="text-sm text-v8-subtle">{row.text}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Embed card */}
          <Card>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-v8-orange-light text-v8-text mb-4">
              {C.engagement.embed.subtitle}
            </span>
            <h3 className="text-lg font-bold tracking-tight mb-1">{C.engagement.embed.title}</h3>
            <p className="text-sm text-v8-subtle leading-[1.55] mb-5">{C.engagement.embed.description}</p>
            <div className="flex flex-col gap-3">
              {C.engagement.embed.breakdown.map((row, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-v8-orange bg-v8-orange-light/40 rounded-full px-2.5 py-0.5 mt-0.5 flex-shrink-0">
                    {row.label}
                  </span>
                  <span className="text-sm text-v8-subtle">{row.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Walk-away banner */}
        <div className="rounded-2xl bg-gradient-to-br from-v8-accent to-v8-accent-light p-6 md:p-8 text-white">
          <p className="text-sm md:text-base leading-[1.6] font-medium">{C.engagement.walkAway}</p>
        </div>
      </section>

      {/* ── 06 THE PRICE ──────────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        {/* <SectionHeader number="06" title="The price" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <div className="text-xs font-semibold text-v8-muted uppercase tracking-wider mb-3">A sprint</div>
            <div className="text-xl font-bold tracking-tight mb-1">{C.pricing.sprint.amount}</div>
            <p className="text-sm text-v8-subtle">{C.pricing.sprint.line}</p>
          </Card>
          <Card className="!bg-gradient-to-br from-white to-v8-accent-wash/20">
            <div className="text-xs font-semibold text-v8-muted uppercase tracking-wider mb-3">Embedded</div>
            <div className="text-2xl font-bold tracking-tight text-v8-accent mb-0.5">
              {C.pricing.contract.amount}
            </div>
            <div className="text-sm text-v8-subtle">{C.pricing.contract.unit}</div>
            <p className="text-sm text-v8-subtle mt-1">{C.pricing.contract.line}</p>
          </Card>
        </div>
      </section>

      {/* ── 07 FAQ ────────────────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        {/* <SectionHeader number="07" title="FAQ" /> */}
        <div className="flex flex-col gap-3">
          {C.faq.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-v8-hairline overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center gap-3 p-5 text-left"
              >
                <span className="font-medium text-[15px] flex-1">{f.q}</span>
                <span
                  className={`text-v8-muted text-lg leading-none transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""
                    }`}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-[15px] text-v8-subtle leading-[1.55]">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING MANIFESTO ─────────────────────────── */}
      <section className="max-w-[880px] mx-auto px-6 md:px-10 pt-8 pb-12 md:pb-14 reveal-">
        <p className="text-body">
          {C.closing.text}
        </p>
        <p className="text-body">
          {C.closing.cta}
        </p>
        {/* <a
          href={C.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-v8-accent font-bold text-lg hover:underline underline-offset-4 pill-hover"
        >
          {C.closing.link}
        </a> */}
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="max-w-[880px] mx-auto px-6 md:px-10 py-12 border-t border-v8-hairline">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-sm text-v8-muted space-y-1">
            <p>
              <a href={`mailto:hey@patrickallen.xyz`} className="text-v8-subtle hover:text-v8-text transition-colors">
                hey@patrickallen.xyz
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Patrick Allen</p>
          </div>
          {/* <a
            href={C.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3 px-6 text-sm font-semibold rounded-full bg-v8-darker-card text-white pill-hover"
          >
            Book a call
          </a> */}
        </div>
      </footer>

      {/* ── STICKY CTA BAR ────────────────────────────── */}
      <div
        className={`fixed bottom-3 left-0 right-0 z-50 transition-all duration-300 text-center pointer-events-none ${showStickyCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
      >
        <div className="pl-6 pr-2 py-2 inline-flex gap-6 items-center bg-v8-darker-card text-white rounded-full pointer-events-auto shadow-lg">
          <span className="text-sm font-medium tracking-tight">Ready to talk?</span>
          <a
            href={C.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 text-sm font-semibold rounded-full bg-v8-orange text-white"
          >
            {C.cta} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
