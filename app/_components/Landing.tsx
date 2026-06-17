"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { siteContent as C } from "@/app/_content/site";

/* ── Local helper components ────────────────────────────── */

function VerifiedBadge({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      className="inline-block ml-1 align-text-bottom"
    >
      <path
        d="M20.396 11c.002-.77-.37-1.497-1.004-1.962a2.028 2.028 0 0 0-.092-2.187 2.028 2.028 0 0 0-1.846-1.066 2.028 2.028 0 0 0-1.066-1.846 2.028 2.028 0 0 0-2.187-.092A2.028 2.028 0 0 0 12.239.843a2.028 2.028 0 0 0-2.478 0A2.028 2.028 0 0 0 7.8 1.847a2.028 2.028 0 0 0-2.187.092A2.028 2.028 0 0 0 4.547 3.785a2.028 2.028 0 0 0-1.846 1.066 2.028 2.028 0 0 0-.092 2.187A2.028 2.028 0 0 0 1.605 9.0a2.028 2.028 0 0 0 0 4 2.028 2.028 0 0 0 1.004 1.962 2.028 2.028 0 0 0 .092 2.187 2.028 2.028 0 0 0 1.846 1.066 2.028 2.028 0 0 0 1.066 1.846 2.028 2.028 0 0 0 2.187.092A2.028 2.028 0 0 0 9.761 21.157a2.028 2.028 0 0 0 2.478 0 2.028 2.028 0 0 0 1.962 1.004 2.028 2.028 0 0 0 2.187-.092 2.028 2.028 0 0 0 1.066-1.846 2.028 2.028 0 0 0 1.846-1.066 2.028 2.028 0 0 0 .092-2.187A2.028 2.028 0 0 0 20.396 15a2.028 2.028 0 0 0 0-4z"
        fill="#1D9BF0"
      />
      <path
        d="M9.585 14.929l-3.292-3.293 1.414-1.414 1.878 1.879 4.586-4.586 1.414 1.414-6 6z"
        fill="#fff"
      />
    </svg>
  );
}

function Avatar({ size = 36 }: { size?: number }) {
  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/avatar.jpg"
        alt="Patrick Allen"
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

function PostMetrics({
  comments,
  reposts,
  likes,
  views,
}: {
  comments: string;
  reposts: string;
  likes: string;
  views: string;
}) {
  return (
    <div className="pl-[48px] flex gap-8 mt-4 text-v8-subtle text-sm">
      <span className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        {comments}
      </span>
      <span className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        {reposts}
      </span>
      <span className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {likes}
      </span>
      <span className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        {views}
      </span>
    </div>
  );
}

function Post({
  label,
  children,
  metrics,
  pinned,
}: {
  label: string;
  children: React.ReactNode;
  metrics?: { comments: string; reposts: string; likes: string; views: string };
  pinned?: boolean;
}) {
  return (
    <div className="border-b border-v8-hairline px-4 py-4">
      {pinned && (
        <div className="pl-[48px] text-xs text-v8-subtle font-medium mb-2 flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-v8-subtle">
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5v6h2v-6h5v-2z" />
          </svg>
          Pinned
        </div>
      )}
      <div className="flex items-center gap-3">
        <Avatar size={36} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 text-sm flex-wrap">
            {/* <span className="font-bold">{C.name}</span> */}
            {/* <VerifiedBadge size={16} /> */}
            {/* <span className="text-v8-subtle">{C.handle}</span> */}
            {/* <span className="text-v8-subtle">·</span> */}
            <span className="text-v8-subtle uppercase tracking-wide font-medium">{label}</span>
          </div>
        </div>
      </div>
      <div className="pl-[48px] mt-2-">{children}</div>
      {metrics && <PostMetrics {...metrics} />}
    </div>
  );
}

/* ── Meta icon helper ────────────────────────────────────── */

function MetaIcon({ icon }: { icon: string }) {
  if (icon === "clock")
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-v8-subtle">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  if (icon === "link")
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-v8-subtle">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    );
  // calendar
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-v8-subtle">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

/* ── Main component ─────────────────────────────────────── */

type Tab = "posts" | "work" | "faq";

export default function Landing() {
  const [activeTab, setActiveTab] = useState<Tab>("posts");
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const howIWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = howIWorkRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCta(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Tab visibility helpers */
  const show = (tab: "posts" | "work" | "faq") =>
    activeTab === "posts" || activeTab === tab;

  const tabs: { id: Tab; label: string }[] = [
    { id: "posts", label: "Posts" },
    { id: "work", label: "Work" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen text-[15px] leading-[1.55] bg-v8-bg text-v8-text">
      <div className="max-w-[1080px] mx-auto flex">
        {/* ── Feed column ── */}
        <div className="flex-1 min-w-0 border-r border-v8-hairline lg:max-w-[calc(100%-320px)]">
          {/* ── Profile Header ── */}
          <div>
            {/* Cover image */}
            <div className="overflow-hidden rounded-xl mx-4 mt-4">
              <img
                src="/images/cover.jpg"
                alt="Cover"
                className="w-full h-auto"
              />
            </div>

            {/* Profile info */}
            <div className="px-4">
              {/* Avatar row + Book a call button */}
              <div className="flex items-end justify-between -mt-10">
                <div className="w-[48px] h-[48px] rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Patrick Allen"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <a
                  href={C.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-4 text-sm font-semibold rounded-full border border-v8-hairline hover:bg-v8-card-soft transition-colors"
                >
                  Book a call
                </a>
              </div>

              {/* Name + verified */}
              <div className="mt-3">
                <h1 className="text-xl font-bold tracking-tight">
                  {C.name}
                  <VerifiedBadge size={18} />
                </h1>
                <p className="text-sm text-v8-subtle">{C.handle}</p>
              </div>

              {/* Bio */}
              <p className="mt-2 text-[15px] leading-[1.55]">{C.bio}</p>

              {/* Meta line */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-v8-subtle">
                {C.profileMeta.map((m, i) => (
                  <span key={i} className="flex items-center gap-1">
                    <MetaIcon icon={m.icon} />
                    {"href" in m ? (
                      <a href={m.href} className="text-v8-accent hover:underline">
                        {m.text}
                      </a>
                    ) : (
                      m.text
                    )}
                  </span>
                ))}
              </div>

              {/* Stats line */}
              <div className="flex items-center gap-4 mt-2 text-sm">
                {C.profileStats.map((s, i) => (
                  <span key={i}>
                    <span className="font-bold text-v8-text">{s.value}</span>{" "}
                    <span className="text-v8-subtle">{s.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tab bar */}
            <div className="flex gap-4 border-b border-v8-hairline px-3 mt-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1- px-1 py-3 text-md font-semibold text-center relative transition-colors ${activeTab === tab.id
                    ? "text-v8-text"
                    : "text-v8-subtle hover:text-v8-text"
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-[3px] rounded-full bg-v8-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Posts feed ── */}

          {/* 1. Pinned intro */}
          {show("posts") && (
            <Post
              label="intro"
              pinned
              metrics={{ comments: "13", reposts: "26", likes: "214", views: "3K" }}
            >
              <h2 className="text-2xl font-bold tracking-tight leading-[1.2] mb-3">
                An extra pair of hands that designs &amp; builds
              </h2>
              <p className="text-v8-subtle leading-[1.55]">
                {C.intro.contract}
              </p>
            </Post>
          )}

          {/* 2. The problem */}
          {show("posts") && (
            <Post
              label="the problem"
              metrics={{ comments: "6", reposts: "12", likes: "98", views: "1.2K" }}
            >
              {C.problem.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`leading-[1.4] ${i === 0 ? "text-xl font-bold tracking-tight" : "text-v8-subtle mt-3"
                    }`}
                >
                  {para}
                </p>
              ))}
            </Post>
          )}

          {/* 3. What I do */}
          {show("posts") && (
            <Post
              label="what I do"
              metrics={{ comments: "9", reposts: "17", likes: "142", views: "1.7K" }}
            >
              <p className="text-lg font-bold tracking-tight leading-[1.4] mb-3">
                I design and build digital products end-to-end.{" "}
                <mark className="bg-cyan-100 text-v8-text rounded px-0.5">
                  No handoff. No waiting on dev.
                </mark>{" "}
                Nothing lost in translation.
              </p>
              <p className="text-v8-subtle leading-[1.55] mb-3">
                From the first Figma frame to the deployed thing running in
                production, one person holds the whole picture.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs font-medium rounded-full border border-cyan-300 text-cyan-700">
                  #design
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full border border-orange-300 text-orange-700">
                  #build
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full border border-green-300 text-green-700">
                  #ship
                </span>
              </div>
            </Post>
          )}

          {/* 4. How I work */}
          {show("posts") && (
            <Post
              label="how I work"
              metrics={{ comments: "10", reposts: "20", likes: "167", views: "1.8K" }}
            >
              <div ref={howIWorkRef}>
                <p className="text-v8-subtle mb-4">How the work actually gets done ↓</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-orange-50 p-5">
                    <div className="flex gap-1.5 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-200" />
                    </div>
                    <div className="font-bold text-base mb-1">{C.leverage.items[0].t}</div>
                    <p className="text-sm text-v8-subtle leading-[1.55]">{C.leverage.items[0].d}</p>
                  </div>
                  <div className="rounded-xl bg-sky-50 p-5">
                    <div className="flex gap-1.5 mb-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-200" />
                    </div>
                    <div className="font-bold text-base mb-1">{C.leverage.items[1].t}</div>
                    <p className="text-sm text-v8-subtle leading-[1.55]">{C.leverage.items[1].d}</p>
                  </div>
                </div>
              </div>
            </Post>
          )}

          {/* 5. Recent work */}
          {show("work") && (
            <Post
              label="recent work"
              metrics={{ comments: "23", reposts: "47", likes: "389", views: "3.9K" }}
            >
              <h3 className="text-lg font-bold tracking-tight mb-3">
                Audio builds first. The craft holds up everywhere.
              </h3>
              {/* Featured project cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                {C.featuredProjects.map((proj, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-v8-hairline overflow-hidden"
                  >
                    <div
                      className={`h-28 ${proj.color === "orange"
                        ? "bg-gradient-to-br from-orange-100 to-orange-50"
                        : "bg-gradient-to-br from-cyan-100 to-cyan-50"
                        }`}
                    />
                    <div className="p-3 flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${proj.color === "orange" ? "bg-orange-400" : "bg-cyan-400"
                          }`}
                      />
                      <div>
                        <div className="font-bold text-sm">{proj.name}</div>
                        <div className="text-xs text-v8-subtle">{proj.subtitle}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Thumbnail row */}
              <div className="grid grid-cols-4 gap-2 rounded-lg overflow-hidden">
                {C.work.map((w, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={w.img}
                      alt={w.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </Post>
          )}

          {/* 6. In their words */}
          {show("work") && (
            <Post
              label="in their words"
              metrics={{ comments: "5", reposts: "9", likes: "76", views: "1.1K" }}
            >
              <p className="text-v8-subtle mb-3">Kind words from people I&apos;ve shipped for ↓</p>
              <div className="rounded-xl border border-v8-hairline p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-full bg-orange-400 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-sm">{C.socialProof.name}</span>
                    <span className="text-v8-subtle text-sm"> · {C.socialProof.role}</span>
                  </div>
                </div>
                <p className="text-lg leading-[1.4] tracking-tight">
                  &ldquo;{C.socialProof.quote}&rdquo;
                </p>
              </div>
              <p className="text-v8-subtle mt-3 text-sm leading-[1.55]">
                Recent work includes tools for teams in audio &amp; podcasting, ops &amp; SaaS, and creator tools.
              </p>
            </Post>
          )}

          {/* 7. Working together */}
          {show("posts") && (
            <Post
              label="working together"
              metrics={{ comments: "12", reposts: "24", likes: "203", views: "2.6K" }}
            >
              <h3 className="text-lg font-bold tracking-tight mb-3">
                Two ways in. 🤝
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="rounded-xl bg-v8-card-soft p-5">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-v8-accent text-white mb-3">
                    {C.engagement.sprint.subtitle}
                  </span>
                  <div className="font-bold text-base mb-1">{C.engagement.sprint.title}</div>
                  <p className="text-sm text-v8-subtle leading-[1.55]">
                    {C.engagement.sprint.description}
                  </p>
                </div>
                <div className="rounded-xl bg-v8-card-soft p-5">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-v8-accent text-white mb-3">
                    {C.engagement.embed.subtitle}
                  </span>
                  <div className="font-bold text-base mb-1">{C.engagement.embed.title}</div>
                  <p className="text-sm text-v8-subtle leading-[1.55]">
                    {C.engagement.embed.description}
                  </p>
                </div>
              </div>
              {/* WalkAway highlight */}
              <div className="rounded-xl bg-gradient-to-br from-violet-500 to-violet-400 p-5 text-white">
                <p className="text-sm leading-[1.55] font-medium">{C.engagement.walkAway}</p>
              </div>
            </Post>
          )}

          {/* 8. Right fit if */}
          {show("posts") && (
            <Post
              label="right fit if"
              metrics={{ comments: "9", reposts: "18", likes: "151", views: "2.1K" }}
            >
              <p className="text-v8-subtle mb-3">We&apos;re a good fit if ↓</p>
              <div className="flex flex-col gap-2">
                {C.contractFit.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-[15px] leading-[1.55]">{f}</span>
                  </div>
                ))}
              </div>
            </Post>
          )}

          {/* 9. The price */}
          {show("posts") && (
            <Post
              label="the price"
              metrics={{ comments: "7", reposts: "14", likes: "118", views: "1.1K" }}
            >
              <p className="text-v8-subtle mb-3">
                No surprises. You know the number before we start. ↓
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="rounded-xl bg-v8-card-soft p-5">
                  <div className="text-xs font-semibold text-v8-subtle uppercase tracking-wide mb-2">
                    a sprint
                  </div>
                  <div className="text-xl font-bold tracking-tight mb-1">Quoted per project</div>
                  <p className="text-sm text-v8-subtle">Fixed scope and price.</p>
                </div>
                <div className="rounded-xl bg-v8-card-soft p-5">
                  <div className="text-xs font-semibold text-v8-subtle uppercase tracking-wide mb-2">
                    embedded
                  </div>
                  <div className="text-2xl font-bold tracking-tight text-v8-accent mb-0.5">
                    {C.pricing.contract.amount}
                  </div>
                  <div className="text-sm text-v8-subtle">{C.pricing.contract.unit}</div>
                  <p className="text-sm text-v8-subtle mt-1">{C.pricing.contract.line}</p>
                </div>
              </div>
            </Post>
          )}

          {/* 10. In the replies (FAQ) */}
          {show("faq") && (
            <Post
              label="FAQ"
              metrics={{ comments: "4", reposts: "8", likes: "64", views: "768" }}
            >
              <h3 className="text-lg font-bold tracking-tight mb-3">
                Answering the usual questions. 💬
              </h3>
              <div className="flex flex-col gap-2">
                {C.faq.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-v8-hairline overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center gap-3 p-4 text-left"
                    >
                      <span className="w-7 h-7 rounded-full bg-violet-100 flex-shrink-0 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(139,92,246)" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <circle cx="12" cy="17" r="0.5" fill="rgb(139,92,246)" />
                        </svg>
                      </span>
                      <span className="font-medium text-[15px] flex-1">{f.q}</span>
                      <span className="text-v8-subtle text-lg leading-none transition-transform duration-200">
                        {openFaq === i ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 pl-14 text-[15px] text-v8-subtle leading-[1.55]">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Post>
          )}

          {/* 11. Final CTA */}
          {show("posts") && (
            <div className="border-b border-v8-hairline px-4 py-8 text-center">
              <div className="flex justify-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-orange-400" />
                <span className="w-10 h-10 rounded-full bg-violet-400" />
                <span className="w-10 h-10 rounded-full bg-cyan-400" />
              </div>
              <h2 className="text-5xl font-bold tracking-tight mb-5">
                Ready to talk?
              </h2>
              <a
                href={C.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-8 text-base font-semibold rounded-full bg-v8-darker-card text-white"
              >
                {C.cta} →
              </a>
              <p className="text-sm text-v8-subtle mt-3">
                clear proposal back the same day, no obligation
              </p>
            </div>
          )}
        </div>

        {/* ── Right Sidebar ── */}
        <div className="hidden lg:block w-[320px] flex-shrink-0">
          <div className="sticky top-0 pt-4 px-4 flex flex-col gap-4 max-h-screen overflow-y-auto pb-4">
            {/* Widget 1: The stack */}
            <div className="rounded-xl border border-v8-hairline p-4">
              <h3 className="font-bold text-base mb-3">The stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "React Native", "TypeScript", "Tailwind", "Figma", "Claude Code"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-v8-hairline"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Widget 2: Recent ships */}
            <div className="rounded-xl border border-v8-hairline p-4">
              <h3 className="font-bold text-base mb-3">Recent ships</h3>
              <div className="flex flex-col gap-3">
                {C.featuredProjects.map((proj, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-full flex-shrink-0 ${proj.color === "orange" ? "bg-orange-400" : "bg-cyan-400"
                        }`}
                    />
                    <div>
                      <div className="font-bold text-sm">{proj.name}</div>
                      <div className="text-xs text-v8-subtle">{proj.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 3: CTA card */}
            <div className="rounded-xl bg-gradient-to-br from-violet-400 to-violet-300 p-5">
              <div className="text-xs font-medium text-white/70 mb-1">available now</div>
              <h3 className="font-bold text-white text-lg mb-3">Taking on new work.</h3>
              <a
                href={C.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-5 text-sm font-semibold rounded-full bg-white text-violet-600 mb-2"
              >
                Book a call →
              </a>
              <p className="text-xs text-white/80">proposal back the same day</p>
            </div>

            {/* Widget 4: Footer */}
            <p className="text-xs text-v8-subtle text-center py-2">
              patrickallen.xyz · 2026
            </p>
          </div>
        </div>
      </div>

      {/* ── Sticky CTA bar ── */}
      <div
        className={`fixed bottom-2 left-0 right-0 z-50 transition-all duration-300 text-center pointer-events-none
          ${showStickyCta ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
      >
        <div className="pl-6 pr-3 py-3 inline-flex gap-8 items-center justify-between bg-v8-darker-card text-white rounded-full pointer-events-auto">
          <span className="text-base font-medium tracking-tight">
            Ready to talk?
          </span>
          <a
            href={C.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 text-sm font-semibold rounded-full bg-v8-accent text-white"
          >
            {C.cta} →
          </a>
        </div>
      </div>
    </div>
  );
}
