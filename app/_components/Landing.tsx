"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { siteContent as C } from "@/app/_content/site";

/* ── Main component ───────────────────────────────────── */

export default function Landing() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  /* Build carousel slides from featured projects + work items */
  const slides = [
    ...C.featuredProjects.map((p) => ({
      title: p.name,
      subtitle: p.subtitle,
      color: p.color === "orange" ? "#E8965A" : "#4FC59E",
      tag: p.color === "orange" ? "Product" : "Tool",
      img: null as string | null,
    })),
    ...C.work.map((w) => ({
      title: w.title,
      subtitle: w.client,
      color: "#8B7FE0",
      tag: "Client",
      img: w.img,
    })),
  ];

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
    const els = document.querySelectorAll(".reveal-");
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

  /* Carousel: sync dot indicator with scroll position */
  const syncDots = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth
      : 1;
    const gap = 16;
    const idx = Math.round(scrollLeft / (cardWidth + gap));
    setActiveDot(Math.min(idx, slides.length - 1));
  }, [slides.length]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", syncDots, { passive: true });
    return () => el.removeEventListener("scroll", syncDots);
  }, [syncDots]);

  const scrollCarousel = (dir: -1 | 1) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth
      : 300;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  const scrollToDot = (i: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth
      : 300;
    el.scrollTo({ left: i * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-v8-bg text-v8-text text-[15px] leading-[1.55]">

      {/* ── HEADER ────────────────────────────────────── */}
      {/* <header className="max-w-[1100px] w-full mx-auto px-6 md:px-10 py-8 flex items-center justify-between"> */}
      {/* <div className="flex items-center gap-3">
          <div className="obj inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-v8-accent to-v8-accent-light align-middle">
            <img src="/images/avatar.jpg" alt="Patrick" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="text-[19px] font-bold text-v8-text tracking-tight">Patrick Allen</span>
        </div> */}


      {/* <div className="flex items-center gap-2 text-sm border border-v8-hairline-strong rounded-full px-4 py-2 ml-auto">
          <span
            className="w-2 h-2 rounded-full bg-v8-green inline-block flex-shrink-0"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />
          <span className="font-bold text-v8-text">Available</span>
          <span className="hidden sm:inline text-v8-muted">· taking on work</span>
        </div> */}
      {/* </header> */}

      {/* ── MANIFESTO INTRO ───────────────────────────── */}
      <section
        ref={introRef}
        className="max-w-[880px] mx-auto px-6 md:px-10 pt-[90px] pb-8- reveal-"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center gap-4 md:gap-6 font-bold text-v8-subtle text-lg pb-12 md:pb-16">
          <div className="text-v8-text">Design Engineer</div>
          {/* <div className="">|</div> */}
          <div className="">Next.js</div>
          <div className="">TypeScript</div>
          <div className="">Tailwind</div>
          <div className="">Figma</div>
          <div className="">AI</div>
        </div>

        <p className="text-body">
          I&apos;m Patrick{" "}
          <span className="obj inline-flex -mt-1 w-10 h-10 rounded-full bg-gradient-to-br from-v8-accent to-v8-accent-light align-middle">
            <img src="/images/avatar.jpg" alt="Patrick" className="w-full h-full object-cover rounded-full" />
          </span>. {" "}
          I design{" "}
          <span className="obj inline-block w-[0.55em] h-[0.55em] rounded-[3px] bg-v8-orange align-middle" />{" "}
          and build{" "}
          <span className="obj inline-block w-[0.55em] h-[0.55em] rounded-[3px] bg-v8-green align-middle" />{" "}
          products end-to-end, and I've been doing it for about a decade, usually at small teams with high product ownership. Currently <span
            className="w-5 h-5 rounded-full bg-v8-green inline-block flex-shrink-0"
            style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
          />{" "}available for work.
        </p>



        {/* <span className="obj inline-block w-[1.2em] h-[0.85em] rounded-[4px] border-2 border-v8-hairline-strong bg-white/10 align-middle relative">
          <span className="absolute top-[2px] left-[3px] flex gap-[2px]">
            <span className="w-[3px] h-[3px] rounded-full bg-v8-faint" />
            <span className="w-[3px] h-[3px] rounded-full bg-v8-faint" />
            <span className="w-[3px] h-[3px] rounded-full bg-v8-faint" />
          </span>
        </span>{" "} */}

        {/* <p className="text-body">
          You&apos;re shipping fast with a small team. The product works, but there&apos;s a backlog of things that never get the polish they deserve, the flow that&apos;s almost right, the feature that&apos;s been &ldquo;next quarter&rdquo; for three quarters, the screens that look like engineers built them.
          You just need someone who can take a thing and make it good, end to end, without being managed.
        </p> */}

        <p className="text-2xl text-center- font-bold text-v8-subtle- mt-40 md:mt-60">
          Lately I have been working in podcasting, where I've built and shipped my own tools as well as building internal tools to make companies more efficient.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16">
          <div className="text-lg font-bold text-v8-subtle">You&apos;re shipping fast with a small team. The product works, but there&apos;s a backlog of things that never get the polish they deserve.</div>
          <div className="text-lg font-bold text-v8-subtle">The flow that&apos;s almost right, the feature that&apos;s been &ldquo;next quarter&rdquo; for three quarters, the screens that look like engineers built them</div>
          <div className="text-lg font-bold text-v8-subtle">You just need someone who can take a thing and make it good, end to end, without being managed.</div>
        </div>
      </section>

      {/* ── HOW I WORK ───────────────────────────────── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 py-[120px]- pt-40 md:pt-60 reveal-">
        <div className="text-center mb-20">
          {/* <span className="text-sm font-semibold tracking-wide uppercase text-v8-accent">How I work</span> */}
          <h2 className="mt-4 font-bold tracking-tight leading-[1.1]" style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}>
            Two to three times the output.<br />
            <span className="text-v8-muted">None of the slop.</span>
          </h2>
          {/* <p className="mt-6 text-[17px] text-v8-subtle max-w-[640px] mx-auto leading-[1.6]">
            {C.leverage.blurb}
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {C.leverage.items.map((item, i) => (
            <div key={i} className="tile bg-v8-warm rounded-[28px] p-6">
              {/* Decorative shape area */}
              <div className="h-[150px] rounded-[20px] bg-white/[0.06] mb-6 flex items-center justify-center overflow-hidden relative">
                {i === 0 ? (
                  <>
                    <div className="w-16 h-16 rounded-full bg-v8-accent-wash/20 absolute left-[20%] top-[30%]" />
                    <div className="w-10 h-10 rounded-full bg-v8-accent/40 absolute right-[25%] top-[40%]" />
                    <div className="w-6 h-6 rounded-[6px] bg-v8-accent-light/30 absolute left-[45%] bottom-[20%]" />
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-[12px] bg-v8-green-light/20 absolute left-[22%] top-[25%]" />
                    <div className="w-10 h-10 rounded-full bg-v8-orange-light/20 absolute right-[20%] bottom-[25%]" />
                    <div className="w-8 h-8 rounded-full bg-v8-green/30 absolute left-[50%] top-[45%]" />
                  </>
                )}
              </div>
              <div className="px-2">
                <h3 className="text-xl font-bold tracking-tight mb-1">{item.t}.</h3>
                <p className="text-xl font-bold text-v8-subtle leading-[1.6]">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECENT WORK (dark carousel) ──────────────── */}
      <section className="py-40 md:py-60">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <h2 className="font-bold tracking-tight leading-[1.1] mb-4" style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}>
            Recent work.<br />
            {/* <span className="text-[#6f6a62]">Audio builds first. The craft holds up everywhere.</span> */}
          </h2>

          {/* Carousel */}
          <div className="relative mt-14">
            <div
              ref={carouselRef}
              className="track flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-none snap-start rounded-[26px] overflow-hidden relative"
                  style={{
                    // width: "clamp(300px, 78vw, 400px)",
                    width: 500,
                    height: 500,
                    background: slide.img
                      ? undefined
                      : `repeating-linear-gradient(
                          135deg,
                          transparent,
                          transparent 10px,
                          rgba(255,255,255,0.03) 10px,
                          rgba(255,255,255,0.03) 20px
                        ), #1c1c1f`,
                  }}
                >
                  {slide.img && (
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: slide.color }}
                      />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                        {slide.tag}
                      </span>
                    </div>
                    <h3 className="text-[22px] font-bold tracking-tight text-white">{slide.title}</h3>
                    <p className="text-[15px] text-white/60 mt-1">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToDot(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${activeDot === i ? "bg-v8-text w-6" : "bg-v8-faint"
                      }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => scrollCarousel(-1)}
                  className="arrowbtn w-11 h-11 rounded-full border border-v8-hairline-strong flex items-center justify-center text-v8-muted"
                  aria-label="Previous"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollCarousel(1)}
                  className="arrowbtn w-11 h-11 rounded-full border border-v8-hairline-strong flex items-center justify-center text-v8-muted"
                  aria-label="Next"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TESTIMONIAL ───────────────── */}
      <section className="bg-v8-warm py-[130px]">
        <div className="max-w-[880px] mx-auto px-6 md:px-10 text-center">
          <span className="text-[64px] leading-none font-serif text-v8-accent-wash/40 block">&ldquo;</span>
          <p
            className="font-bold tracking-tight leading-[1.2] -mt-4"
            style={{ fontSize: "clamp(28px, 4.2vw, 52px)" }}
          >
            {C.socialProof.quote}
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            {/* <span className="w-12 h-12 rounded-full bg-v8-orange flex-shrink-0" /> */}
            <div className="text-md">
              <span className="font-bold">{C.socialProof.name}</span>
              <span className="text-v8-muted">{" · "}{C.socialProof.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── RIGHT FIT ────────────────────────────────── */}
      <section className="py-[120px] reveal-">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <h2
            className="font-bold tracking-tight leading-[1.1] mb-8 md:mb-12"
            style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}
          >
            Great fits.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {C.contractFit.map((f, i) => (
              <div key={i} className={`p-6 md:p-8 bg-v8-warm rounded-xl ${i === 2 ? "col-span-2" : ""}`}>
                <span className="md:text-lg font-bold text-v8-subtle leading-[1.55]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKING TOGETHER ─────────────────────────── */}
      <section className="py-[120px] reveal-">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2
              className="font-bold tracking-tight leading-[1.1]"
              style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}
            >
              Two ways in.
            </h2>
            <p className="mt-6 text-lg md:text-xl font-bold text-v8-subtle max-w-[640px] mx-auto leading-[1.6]">
              Pick the shape that fits. Either way you get shipped work, clean handoffs, and a product that moved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Sprint tile */}
            <div className="tile bg-v8-warm rounded-[28px] p-11">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-v8-green/20 text-v8-green mb-6">
                {C.engagement.sprint.subtitle}
              </span>
              <h3 className="text-[27px] font-bold tracking-tight mb-3">{C.engagement.sprint.title}</h3>
              <p className="text-[17px] text-v8-subtle font-bold leading-[1.6] mb-8">{C.engagement.sprint.description}</p>
              <div className="flex flex-col">
                {C.engagement.sprint.breakdown.map((row, i) => (
                  <div key={i} className="flex items-start gap-3 py-4 border-t border-v8-hairline">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-v8-accent mt-0.5 flex-shrink-0 w-16">
                      {row.label}
                    </span>
                    <span className="text-[15px] text-v8-subtle">{row.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embed tile */}
            <div className="tile bg-v8-warm rounded-[28px] p-11">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-v8-orange/20 text-v8-orange mb-6">
                {C.engagement.embed.subtitle}
              </span>
              <h3 className="text-[27px] font-bold tracking-tight mb-3">{C.engagement.embed.title}</h3>
              <p className="text-[17px] text-v8-subtle leading-[1.6] mb-8">{C.engagement.embed.description}</p>
              <div className="flex flex-col">
                {C.engagement.embed.breakdown.map((row, i) => (
                  <div key={i} className="flex items-start gap-3 py-4 border-t border-v8-hairline">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-v8-orange mt-0.5 flex-shrink-0 w-16">
                      {row.label}
                    </span>
                    <span className="text-[15px] text-v8-subtle">{row.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Walk-away banner */}
          <div className="rounded-[28px] bg-gradient-to-r from-v8-accent-light to-v8-accent p-10 md:p-12 text-center">
            <p className="text-lg md:text-xl leading-[1.6] font-bold text-white">
              {C.engagement.walkAway}
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────── */}
      <section className="bg-v8-warm py-[120px]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <h2
            className="text-center font-bold tracking-tight leading-[1.1] mb-16"
            style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}
          >
            Simple, honest pricing.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {/* Sprint pricing */}
            <div className="tile bg-white/[0.06] rounded-[28px] p-11">
              <div className="text-[11px] font-semibold text-v8-green uppercase tracking-wider mb-6">A sprint</div>
              <div
                className="font-bold tracking-tight mb-3"
                style={{ fontSize: "clamp(34px, 4.6vw, 48px)" }}
              >
                {C.pricing.sprint.amount}
              </div>
              <p className="text-[17px] text-v8-subtle leading-[1.6]">{C.pricing.sprint.line}</p>
            </div>

            {/* Embedded pricing */}
            <div className="tile rounded-[28px] p-11 bg-v8-accent/10 border border-v8-accent/20">
              <div className="text-[11px] font-semibold text-v8-accent uppercase tracking-wider mb-6">Embedded</div>
              <div
                className="font-bold tracking-tight text-v8-accent mb-1"
                style={{ fontSize: "clamp(34px, 4.6vw, 48px)" }}
              >
                {C.pricing.contract.amount}
              </div>
              <div className="text-[15px] text-v8-subtle mb-3">{C.pricing.contract.unit}</div>
              <p className="text-[17px] text-v8-subtle leading-[1.6]">{C.pricing.contract.line}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="bg-v8-warm py-[120px]">
        <div className="max-w-[880px] mx-auto px-6 md:px-10">
          <h2
            className="text-center font-bold tracking-tight leading-[1.1] mb-16"
            style={{ fontSize: "clamp(34px, 5.4vw, 64px)" }}
          >
            Questions.
          </h2>
          <div className="flex flex-col gap-4">
            {C.faq.map((f, i) => (
              <div
                key={i}
                className="bg-white/[0.06] rounded-[20px] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center gap-3 p-6 md:p-7 text-left"
                >
                  <span className="font-semibold text-[17px] flex-1">{f.q}</span>
                  <span
                    className={`text-v8-muted text-xl leading-none transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === i ? 300 : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                >
                  <div className="px-6 md:px-7 pb-6 md:pb-7 text-[16px] text-v8-subtle leading-[1.6]">
                    {f.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIG CTA ──────────────────────────────────── */}
      <section className="py-[140px] reveal-">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
          <h2
            className="font-bold tracking-tight leading-[0.95]"
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            Ready to talk?
          </h2>
          <p className="mt-8 text-[17px] md:text-[19px] text-v8-subtle max-w-[520px] mx-auto leading-[1.6]">
            Your product deserves to feel designed. Clear proposal back the same day.
          </p>
          <a
            href={C.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-white text-[#111113] text-[17px] font-semibold pill-hover"
          >
            {C.cta}
            <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 border-t border-v8-hairline">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="text-sm text-v8-muted space-y-2">
            <p className="flex items-center gap-2">
              <span className="inline-block w-[0.55em] h-[0.55em] rounded-[3px] bg-v8-accent" />
              <span className="text-v8-subtle">Designed &amp; built end-to-end</span>
            </p>
            <p>
              <a href="mailto:hey@patrickallen.xyz" className="inklink">
                hey@patrickallen.xyz
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Patrick Allen</p>
          </div>
          <a
            href={C.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center py-3 px-6 text-sm font-semibold rounded-full bg-white text-[#111113] pill-hover"
          >
            Book a call
          </a>
        </div>
      </footer>

      {/* ── STICKY CTA BAR ────────────────────────────── */}
      <div
        className={`fixed bottom-3 left-0 right-0 z-50 transition-all duration-300 text-center pointer-events-none ${showStickyCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
      >
        <div className="pl-6 pr-2 py-2 inline-flex gap-6 items-center bg-white/10 backdrop-blur-xl border border-white/10 text-white rounded-full pointer-events-auto shadow-lg">
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
