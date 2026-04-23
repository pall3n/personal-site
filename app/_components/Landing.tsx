"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent as C, type Mode } from "@/app/_content/site";

const ACCENT = "#E8621B";

const darkOverrides = {
  "--v8-bg": "#1A120C",
  "--v8-text": "#F5ECDB",
  "--v8-card": "#241812",
  "--v8-card-soft": "#2A1D14",
  "--v8-subtle": "rgba(245,236,219,.55)",
  "--v8-hairline": "rgba(245,236,219,.12)",
  "--v8-work-bg": "#2A1D14",
  "--v8-on-accent": "#1A120C",
} as React.CSSProperties;

export default function Landing() {
  const [mode, setMode] = useState<Mode>("buildweek");
  console.log("[Landing] current mode:", mode);

  return (
    <div
      className="min-h-screen text-[15px] leading-[1.55] bg-v8-bg text-v8-text transition-colors duration-500"
      style={mode === "contract" ? darkOverrides : undefined}
    >
      {/* ── Nav ── */}
      {/* <nav className="flex justify-between items-center px-6 md:px-9 py-5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-v8-accent" />
          <div className="font-serif italic text-[22px]">Patrick Allen</div>
        </div>
        <div className="text-xs flex items-center gap-2 text-v8-subtle">
          <span className="w-[7px] h-[7px] rounded-full inline-block bg-v8-status" />
          {C.status}
        </div>
      </nav> */}

      {/* ── Hello block ── */}
      <div className="px-6 md:px-9 pt-10 xl:pt-24 pb-5 xl:pb-10 max-w-[1000px] mx-auto">
        <div className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
          <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative border border-v8-hairline">
            <Image
              src="/images/avatar.jpg"
              alt="Patrick Allen"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif xl:text-4xl text-3xl leading-[1.2] tracking-[-0.6px] m-0 [text-wrap:pretty]">
              I&apos;m <span className="font-serif italic text-v8-accent">Patrick</span>. I design
              and build products end-to-end, and I&apos;ve been doing it for about a decade, usually at small teams where one person holding the whole picture matters more than an org chart.
            </p>
            <p className="text-base xl:text-lg leading-[1.55] mt-5 mb-0 max-w-[640px] text-v8-subtle">
              Lately I work two ways. There's a focused <em>Build Week</em> for one specific problem, or a longer <em>Project</em> embedded with your team. Pick whichever fits.
            </p>
          </div>
        </div>
      </div>

      {/* ── Toggle ── */}
      <div className="px-6 md:px-9 pt-10 xl:pt-16 pb-5 text-center">
        <div className="text-xs xl:text-sm font-bold mb-4 tracking-[1.2px] uppercase text-v8-subtle">
          What are you here for?
        </div>
        <div className="inline-flex relative p-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,.3)] bg-v8-dark-card">
          <div
            className="absolute top-1.5 w-[calc(50%-6px)] h-[calc(100%-12px)] rounded-full transition-[left] duration-350 ease-[cubic-bezier(.4,1.4,.5,1)] bg-v8-accent pointer-events-none"
            style={{
              left: mode === "buildweek" ? 6 : "50%",
              boxShadow: `0 4px 12px ${ACCENT}66`,
            }}
          />
          {(
            [
              ["buildweek", "Build Week"],
              ["contract", "Project Work"],
            ] as const
          ).map(([k, l]) => (
            <button
              key={k}
              onClick={() => {
                console.log("[Toggle] clicked:", k, "| current mode:", mode);
                setMode(k);
              }}
              className="relative px-7 md:px-10 py-3.5 rounded-full bg-transparent border-none cursor-pointer text-sm xl:text-base font-semibold md:min-w-[180px] z-[1] text-textDark-500"
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="px-6 md:px-9 pt-10 pb-[60px] text-center" key={mode}>
        <h1 className="font-serif font-normal text-5xl md:text-[96px] leading-[0.96] tracking-[-2.6px] mx-auto mb-6 max-w-[1000px]">
          {mode === "buildweek" ? (
            <>
              Five focused days.{" "}
              <em className="text-v8-accent">One real thing</em> at the end.
            </>
          ) : (
            <>
              An extra pair of hands that{" "}
              <em className="text-v8-accent">designs and builds</em>.
            </>
          )}
        </h1>
        <p className="text-lg leading-[1.5] max-w-[640px] mx-auto text-v8-subtle">
          {C.intro[mode]}
        </p>
      </div>

      {/* ── Four-card grid ── */}
      <div className="px-6 md:px-9 pb-[60px] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Deal card — always dark */}
          <div className="p-7 rounded-[4px] bg-v8-dark-card text-textDark-500">
            <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase opacity-60 mb-5">
              The Deal
            </div>
            <div className="font-serif text-4xl xl:text-5xl leading-none tracking-[-0.8px] text-v8-accent">
              {C.pricing[mode].amount}
            </div>
            <div className="text-xs xl:text-sm text-semibold opacity-60 mt-2 mb-6">
              {C.pricing[mode].unit}
            </div>
            <div className="font-serif text-xl xl:text-2xl leading-[1.35] mb-8">
              {C.pricing[mode].line}
            </div>
            <a
              href={C.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-5 text-sm xl:text-base font-medium text-center rounded-[2px] bg-v8-accent text-v8-dark-card"
            >
              {C.cta} →
            </a>
          </div>

          {/* Week / Engagement card — spans 2 */}
          <div className="p-7 rounded-[4px] col-span-2 bg-v8-card">
            <div className="flex justify-between mb-5">
              <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase text-v8-subtle">
                {mode === "buildweek" ? "The Week" : "The Engagement"}
              </div>
              <div className="text-xs xl:text-sm text-semibold text-v8-subtle">
                {mode === "buildweek" ? "5 days" : "4–12 weeks"}
              </div>
            </div>
            {mode === "buildweek" ? (
              <div>
                <div className="hidden md:grid grid-cols-5 gap-1.5 h-20">
                  {["D1", "D2", "D3", "D4", "D5"].map((label, i) => (
                    <div
                      key={i}
                      className="rounded-[3px] p-2.5 flex flex-col justify-between border border-v8-accent"
                      style={{
                        background: `${ACCENT}${(20 + i * 15).toString(16).padStart(2, "0")}`,
                      }}
                    >
                      <div className="font-mono text-[10px] font-semibold text-v8-accent">
                        {label}
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: i + 1 }).map((_, j) => (
                          <div
                            key={j}
                            className="w-1.5 h-1.5 rounded-full bg-v8-accent"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-5 gap-6 md:gap-2 mt-3.5">
                  {C.buildWeekSteps.slice(1).map((s, i) => (
                    <div key={i} className="text-xs">
                      <div className="text-xs xl:text-sm font-medium mb-0.5">
                        {s.title}
                      </div>
                      <div className="leading-[1.4] text-xs xl:text-sm text-semibold text-v8-subtle">
                        {s.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex gap-1 mb-3 h-[60px] items-end">
                  {[40, 55, 50, 60, 55, 65, 60, 70, 55].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-v8-accent"
                      style={{
                        height: `${h}%`,
                        opacity: 0.3 + i / 16,
                      }}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs">
                  {[
                    {
                      t: "Embed",
                      d: "Week 1 - learn the team and the product.",
                    },
                    {
                      t: "Ship",
                      d: "Weeks 2+ - weekly delivery, async-first.",
                    },
                    {
                      t: "Handoff",
                      d: "End - your team owns everything.",
                    },
                  ].map((x, i) => (
                    <div key={i}>
                      <div className="font-medium mb-0.5">
                        {x.t}
                      </div>
                      <div className="leading-[1.4] text-v8-subtle">
                        {x.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Fit card — spans 2 */}
          <div className="p-7 rounded-[4px] col-span-2 bg-v8-card">
            <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase mb-4 text-v8-subtle">
              Right fit if —
            </div>
            {(mode === "buildweek" ? C.buildWeekFit : C.contractFit).map(
              (f, i) => (
                <div
                  key={i}
                  className={`py-[11px] flex gap-3.5 text-[15px] ${i > 0 ? "border-t border-v8-hairline" : ""}`}
                >
                  <span className="font-semibold min-w-4 text-v8-accent">
                    {i + 1}.
                  </span>
                  <span>{f}</span>
                </div>
              )
            )}
          </div>

          {/* Ship List card — always accent */}
          <div className="p-7 rounded-[4px] bg-v8-accent text-v8-on-accent">
            <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase opacity-80 mb-4">
              Ship list
            </div>
            <div className="font-serif text-2xl xl:text-3xl leading-[1.2] tracking-[-0.5px] mb-4">
              {mode === "buildweek"
                ? "You'll leave the week with:"
                : "Over an engagement:"}
            </div>
            <div className="text-sm xl:text-base leading-[1.7]">
              {mode === "buildweek" ? (
                <>
                  → A working feature, deployed
                  <br />
                  → Code in your repo
                  <br />
                  → A loom walkthrough
                  <br />→ Design files (if useful)
                </>
              ) : (
                <>
                  → Weekly shipped features
                  <br />
                  → Design system work
                  <br />
                  → Weekly retros & check-ins
                  <br />→ Clean handoff docs
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Leverage block ── */}
      <div className="px-6 md:px-9 pb-[60px] max-w-[1200px] mx-auto">
        <div className="p-6 md:p-9 rounded-[4px] bg-v8-card">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-8">
            <div>
              <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase mb-3 text-v8-accent">
                The leverage
              </div>
              <h2 className="font-serif font-normal text-3xl xl:text-4xl m-0 tracking-[-1.2px] leading-[1.02]">
                {C.leverage.heading}
              </h2>
            </div>
            <p className="text-base leading-[1.55] m-0 self-end text-v8-subtle">
              {C.leverage.blurb}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-v8-hairline">
            {C.leverage.items.map((it, i) => (
              <div
                key={i}
                className={`py-6 pr-6 ${i < C.leverage.items.length - 1 ? "border-b md:border-b-0 md:border-r border-v8-hairline" : ""} ${i > 0 ? "md:pl-6" : ""}`}
              >
                <div className="font-mono text-xs xl:text-sm font-semibold mb-3 tracking-[1px] text-v8-accent">
                  {it.k}
                </div>
                <div className="font-serif text-xl xl:text-2xl leading-[1.2] tracking-[-0.3px] mb-3">
                  {it.t}
                </div>
                <div className="text-sm xl:text-base leading-[1.5] text-v8-subtle">
                  {it.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sample scope (build week only) ── */}
      {mode === "buildweek" && (
        <div className="px-6 md:px-9 pb-[60px] max-w-[1200px] mx-auto">
          <div className="p-6 md:p-9 rounded-[4px] bg-v8-card">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 mb-8">
              <div>
                <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase mb-3 text-v8-accent">
                  An example
                </div>
                <h2 className="font-serif font-normal text-3xl xl:text-4xl m-0 tracking-[-1.2px] leading-[1.02]">
                  {C.sampleScope.heading}
                </h2>
              </div>
              <div className="self-end">
                <p className="text-base leading-[1.55] m-0 mb-4 text-v8-subtle">
                  {C.sampleScope.blurb}
                </p>
                <span className="text-[11px] py-1 px-2.5 rounded-[2px] font-mono tracking-[0.5px] bg-v8-card-soft border border-v8-hairline">
                  {C.sampleScope.client}
                </span>
              </div>
            </div>

            {/* Problem / Agreement / Outcome cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {(
                [
                  {
                    label: "The problem",
                    body: C.sampleScope.problem,
                    highlight: false,
                  },
                  {
                    label: "The agreement",
                    body: C.sampleScope.agreement,
                    highlight: false,
                  },
                  {
                    label: "The outcome",
                    body: C.sampleScope.outcome,
                    highlight: true,
                  },
                ] as const
              ).map((b, i) => (
                <div
                  key={i}
                  className={`p-5 rounded-[3px] ${b.highlight ? "bg-v8-accent text-v8-on-accent" : "bg-v8-card-soft"}`}
                >
                  <div className="font-mono text-2xs xl:text-xs font-bold tracking-[1.2px] uppercase opacity-65 mb-2.5">
                    {b.label}
                  </div>
                  <div className="font-serif text-xl leading-[1.35] tracking-[-0.2px]">
                    {b.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Day table */}
            <div className="rounded-[3px] overflow-hidden border border-v8-hairline">
              <div className="hidden md:grid grid-cols-[88px_1fr_2fr] py-2.5 px-4 font-mono text-2xs xl:text-xs font-bold tracking-[1.2px] uppercase bg-v8-card-soft text-v8-subtle">
                <div>Day</div>
                <div>Focus</div>
                <div>Shipped</div>
              </div>
              {C.sampleScope.days.map((day, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[88px_1fr_2fr] gap-2 md:gap-0 py-[18px] px-4 items-start border-t border-v8-hairline"
                >
                  <div className="font-mono text-sm xl:text-base font-medium text-v8-accent">
                    {day.d}
                  </div>
                  <div className="font-serif text-[22px] tracking-[-0.3px] leading-[1.15] pr-4">
                    {day.t}
                  </div>
                  <ul className="m-0 p-0 list-none grid grid-cols-2 gap-x-6 gap-y-1">
                    {day.b.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm leading-[1.5] flex gap-2 text-v8-subtle"
                      >
                        <span className="shrink-0 text-v8-accent">
                          →
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Recent work ── */}
      <div className="px-6 md:px-9 pt-10 pb-[60px] max-w-[1200px] mx-auto">
        <div className="flex items-baseline mb-6">
          <h2 className="font-serif font-normal text-[52px] m-0 tracking-[-1.2px]">
            Recent work
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {C.work.map((w, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3]- rounded-[4px] overflow-hidden cursor-pointer- bg-v8-work-"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-full object-cover-"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,12,.94)] to-transparent to-70% p-5 flex flex-col justify-end text-textDark-500 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <div className="font-serif text-[22px] tracking-[-0.3px]">
                  {w.title}
                </div>
                <div className="text-[11px] opacity-70 mb-2">{w.client}</div>
                <div className="text-[13px] leading-[1.45]">{w.problem}</div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* ── Bio + Writing + FAQ ── */}
      <div className="px-6 md:px-9 pt-10 pb-[60px] max-w-[1200px] mx-auto">
        {/* <div className="grid grid-cols-[1.2fr_1fr] gap-12 mb-16"> */}
        {/* Bio card */}
        {/* <div className="p-8 rounded-[4px] bg-v8-card">
            <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase mb-4 text-v8-subtle">
              A bit more
            </div>
            <p className="font-serif text-[28px] leading-[1.35] tracking-[-0.3px] m-0">
              {C.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {C.stack.map((s) => (
                <span
                  key={s}
                  className="py-[5px] px-2.5 text-xs rounded-[2px] bg-v8-card-soft border border-v8-hairline"
                >
                  {s}
                </span>
              ))}
            </div>
          </div> */}

        {/* Writing list */}
        {/* <div>
            <div className="text-xs xl:text-sm font-bold tracking-[1.2px] uppercase mb-4 text-v8-subtle">
              Writing
            </div>
            {C.notes.map((n, i) => (
              <a
                key={i}
                href="#"
                className="block py-3 no-underline text-inherit border-b border-v8-hairline"
              >
                <div className="text-[11px] text-v8-subtle">
                  {n.date} · {n.len}
                </div>
                <div className="font-serif text-[19px] tracking-[-0.2px] mt-0.5">
                  {n.title}
                </div>
              </a>
            ))}
          </div> */}
        {/* </div> */}

        {/* FAQ */}
        <div>
          <h2 className="font-serif font-normal text-2xl xl:text-3xl m-0 mb-5 tracking-[-1px]">
            FAQ
          </h2>
          {C.faq.map((f, i) => (
            <details
              key={i}
              className="py-4 group/faq border-t border-v8-hairline"
            >
              <summary className="cursor-pointer font-serif text-[22px] list-none flex justify-between [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span className="text-v8-accent">+</span>
              </summary>
              <div className="mt-2.5 text-[15px] leading-[1.55] max-w-[680px] text-v8-subtle">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="px-6 md:px-9 py-6 flex justify-between text-xs border-t border-v8-hairline text-v8-subtle">
        <div>© 2026 Patrick Allen</div>
        <div className="flex gap-5">
          <a href="#" className="text-inherit">
            Email
          </a>
          <a href="#" className="text-inherit">
            Twitter
          </a>
          <a href="#" className="text-inherit">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
