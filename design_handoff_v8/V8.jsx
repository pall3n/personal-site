// V8 — V7 with a personal "hello" intro before the toggle.
// Warmer, less SaaS-y opening for a personal site.

const V8 = () => {
  const C = window.SITE_CONTENT;
  const [mode, setMode] = React.useState("buildweek");
  const accent = "#E8621B";

  const dark = mode === "contract";
  const T = dark ? {
    bg: "#1A120C", text: "#F5ECDB", accent,
    card: "#241812", cardSoft: "#2A1D14",
    subtle: "rgba(245,236,219,.55)", hairline: "rgba(245,236,219,.12)",
    workBg: "#2A1D14", onAccent: "#1A120C",
  } : {
    bg: "#F4F0E8", text: "#1E160F", accent,
    card: "#F5ECDB", cardSoft: "#E8DFC7",
    subtle: "rgba(30,22,15,.55)", hairline: "rgba(30,22,15,.12)",
    workBg: "#E0D6BF", onAccent: "#FEFBF2",
  };

  return (
    <div style={{
      fontFamily: "ui-sans-serif, 'Inter', system-ui, sans-serif",
      background: T.bg, color: T.text, minHeight: "100%", fontSize: 15, lineHeight: 1.55,
      transition: "background .5s ease, color .5s ease",
    }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: accent }} />
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, fontStyle: "italic" }}>Patrick Allen</div>
        </div>
        <div style={{ fontSize: 12, color: T.subtle, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4A7C48" }} />{C.status}
        </div>
      </nav>

      {/* Personal hello — the new bit */}
      <div style={{ padding: "60px 36px 20px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 32, alignItems: "start" }}>
          <div style={{ width: 140, height: 140, borderRadius: "50%", background: T.cardSoft, border: `1px solid ${T.hairline}`, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', serif", fontSize: 48, fontStyle: "italic", color: accent }}>
            PA
          </div>
          <div>
            <div style={{ fontSize: 12, color: T.subtle, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 14 }}>Hello —</div>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 38, lineHeight: 1.2, letterSpacing: -0.6, margin: 0, textWrap: "pretty" }}>
              I'm <span style={{ color: accent }}>Patrick</span>. I design and build products end-to-end, and I've been doing it for about a decade, mostly for small teams where one person holding the whole picture matters more than an org chart.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: T.subtle, marginTop: 20, marginBottom: 0, maxWidth: 640 }}>
              Lately I work two ways — a focused <em>Build Week</em> for one specific problem, or a longer <em>Project</em> embedded with your team. Pick whichever fits.
            </p>
          </div>
        </div>
      </div>

      {/* Toggle */}
      <div style={{ padding: "40px 36px 20px", textAlign: "center" }}>
        <div style={{ fontSize: 12, color: T.subtle, marginBottom: 16, letterSpacing: 1.2, textTransform: "uppercase" }}>What are you here for?</div>
        <div style={{ display: "inline-flex", position: "relative", background: "#14100C", padding: 6, borderRadius: 200, boxShadow: "inset 0 2px 4px rgba(0,0,0,.3)" }}>
          <div style={{
            position: "absolute", top: 6, left: mode === "buildweek" ? 6 : "50%",
            width: "calc(50% - 6px)", height: "calc(100% - 12px)", background: accent, borderRadius: 200,
            transition: "left .35s cubic-bezier(.4,1.4,.5,1)", boxShadow: `0 4px 12px ${accent}66`,
          }} />
          {[["buildweek", "Build Week"], ["contract", "Project Work"]].map(([k, l]) => (
            <button key={k} onClick={() => setMode(k)} style={{
              position: "relative", padding: "14px 40px", borderRadius: 200, background: "transparent", border: "none", cursor: "pointer",
              color: "#F5ECDB", fontFamily: "inherit", fontSize: 15, fontWeight: 500, minWidth: 180, zIndex: 1,
            }}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{ padding: "40px 36px 60px", textAlign: "center" }} key={mode}>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 96, lineHeight: 0.96, letterSpacing: -2.6, margin: "0 auto 24px", maxWidth: 1000 }}>
          {mode === "buildweek"
            ? <>Five focused days. <em style={{ color: accent }}>One real thing</em> at the end.</>
            : <>An extra pair of hands that <em style={{ color: accent }}>designs and builds</em>.</>}
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.5, color: T.subtle, maxWidth: 640, margin: "0 auto" }}>{C.intro[mode]}</p>
      </div>

      <div style={{ padding: "0 36px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
          <div style={{ padding: 28, background: "#14100C", color: "#F5ECDB", borderRadius: 4 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.6, marginBottom: 20 }}>The Deal</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 40, color: accent, lineHeight: 1, letterSpacing: -0.8 }}>{C.pricing[mode].amount}</div>
            <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4, marginBottom: 20 }}>{C.pricing[mode].unit}</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, lineHeight: 1.35, marginBottom: 24 }}>{C.pricing[mode].line}</div>
            <a href={C.ctaUrl} style={{ display: "block", padding: "12px 20px", background: accent, color: "#14100C", fontSize: 14, fontWeight: 500, textAlign: "center", borderRadius: 2 }}>{C.cta} →</a>
          </div>
          <div style={{ padding: 28, background: T.card, borderRadius: 4, gridColumn: "span 2" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: T.subtle }}>{mode === "buildweek" ? "The Week" : "The Engagement"}</div>
              <div style={{ fontSize: 11, color: T.subtle }}>{mode === "buildweek" ? "5 days" : "4–12 weeks"}</div>
            </div>
            {mode === "buildweek" ? (
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, height: 80 }}>
                  {["D1", "D2", "D3", "D4", "D5"].map((l, i) => (
                    <div key={i} style={{ background: `${accent}${(20 + i * 15).toString(16).padStart(2, '0')}`, border: `1px solid ${accent}`, borderRadius: 3, padding: 10, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: accent, fontWeight: 600 }}>{l}</div>
                      <div style={{ display: "flex", gap: 2 }}>
                        {Array.from({ length: i + 1 }).map((_, j) => <div key={j} style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />)}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginTop: 14 }}>
                  {C.buildWeekSteps.slice(1).map((s, i) => (
                    <div key={i} style={{ fontSize: 12 }}>
                      <div style={{ fontWeight: 500, marginBottom: 3, color: T.text }}>{s.title}</div>
                      <div style={{ color: T.subtle, lineHeight: 1.4, fontSize: 11 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", gap: 4, marginBottom: 12, height: 60, alignItems: "flex-end" }}>
                  {[40, 55, 50, 60, 55, 65, 60, 70, 55].map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, background: accent, opacity: 0.3 + (i / 16) }} />)}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, fontSize: 12 }}>
                  {[{ t: "Embed", d: "Week 1 — learn the team and the product." }, { t: "Ship", d: "Weeks 2+ — weekly delivery, async-first." }, { t: "Handoff", d: "End — your team owns everything." }].map((x, i) => (
                    <div key={i}><div style={{ fontWeight: 500, marginBottom: 3, color: T.text }}>{x.t}</div><div style={{ color: T.subtle, lineHeight: 1.4 }}>{x.d}</div></div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ padding: 28, background: T.card, borderRadius: 4, gridColumn: "span 2" }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: T.subtle, marginBottom: 16 }}>Right fit if —</div>
            {(mode === "buildweek" ? C.buildWeekFit : C.contractFit).map((f, i) => (
              <div key={i} style={{ padding: "11px 0", borderTop: i > 0 ? `1px solid ${T.hairline}` : "none", display: "flex", gap: 14, fontSize: 15 }}>
                <span style={{ color: accent, fontWeight: 600, minWidth: 16 }}>{i + 1}.</span><span>{f}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: 28, background: accent, color: T.onAccent, borderRadius: 4 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.8, marginBottom: 16 }}>Ship list</div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 32, lineHeight: 1.2, letterSpacing: -0.5, marginBottom: 16 }}>{mode === "buildweek" ? "You'll leave the week with:" : "Over an engagement:"}</div>
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
              {mode === "buildweek" ? <>→ A working feature, deployed<br />→ Code in your repo<br />→ A loom walkthrough<br />→ Design files (if useful)</> : <>→ Weekly shipped features<br />→ Design system work<br />→ Weekly retros & check-ins<br />→ Clean handoff docs</>}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 36px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ padding: 36, background: T.card, borderRadius: 4 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: accent, marginBottom: 12 }}>The leverage</div>
              <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 48, margin: 0, letterSpacing: -1.2, lineHeight: 1.02 }}>{C.leverage.heading}</h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: T.subtle, margin: 0, alignSelf: "end" }}>{C.leverage.blurb}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid ${T.hairline}` }}>
            {C.leverage.items.map((it, i) => (
              <div key={i} style={{ padding: "24px 24px 24px 0", borderRight: i < C.leverage.items.length - 1 ? `1px solid ${T.hairline}` : "none", paddingLeft: i > 0 ? 24 : 0 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: accent, marginBottom: 12, letterSpacing: 1 }}>{it.k}</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.2, letterSpacing: -0.3, marginBottom: 10 }}>{it.t}</div>
                <div style={{ fontSize: 13, color: T.subtle, lineHeight: 1.5 }}>{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mode === "buildweek" && (
        <div style={{ padding: "0 36px 60px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ padding: 36, background: T.card, borderRadius: 4 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: accent, marginBottom: 12 }}>An example</div>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 48, margin: 0, letterSpacing: -1.2, lineHeight: 1.02 }}>{C.sampleScope.heading}</h2>
              </div>
              <div style={{ alignSelf: "end" }}>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: T.subtle, margin: "0 0 16px" }}>{C.sampleScope.blurb}</p>
                <span style={{ fontSize: 11, padding: "4px 10px", background: T.cardSoft, border: `1px solid ${T.hairline}`, borderRadius: 2, fontFamily: "'JetBrains Mono', monospace", letterSpacing: 0.5 }}>{C.sampleScope.client}</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[{ label: "The problem", body: C.sampleScope.problem }, { label: "The agreement", body: C.sampleScope.agreement }, { label: "The outcome", body: C.sampleScope.outcome, highlight: true }].map((b, i) => (
                <div key={i} style={{ padding: 20, background: b.highlight ? accent : T.cardSoft, color: b.highlight ? T.onAccent : T.text, borderRadius: 3 }}>
                  <div style={{ fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.65, marginBottom: 10, fontFamily: "'JetBrains Mono', monospace" }}>{b.label}</div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, lineHeight: 1.35, letterSpacing: -0.2 }}>{b.body}</div>
                </div>
              ))}
            </div>
            <div style={{ border: `1px solid ${T.hairline}`, borderRadius: 3, overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "88px 1fr 2fr", background: T.cardSoft, padding: "10px 16px", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase", color: T.subtle, fontFamily: "'JetBrains Mono', monospace" }}>
                <div>Day</div><div>Focus</div><div>Shipped</div>
              </div>
              {C.sampleScope.days.map((day, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "88px 1fr 2fr", padding: "18px 16px", borderTop: `1px solid ${T.hairline}`, alignItems: "start" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: accent, fontWeight: 600 }}>{day.d}</div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, letterSpacing: -0.3, lineHeight: 1.15, paddingRight: 16 }}>{day.t}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px 24px" }}>
                    {day.b.map((bullet, j) => (
                      <li key={j} style={{ fontSize: 13, color: T.subtle, lineHeight: 1.5, display: "flex", gap: 8 }}>
                        <span style={{ color: accent, flexShrink: 0 }}>→</span><span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div style={{ padding: "40px 36px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 52, margin: 0, letterSpacing: -1.2 }}>Recent work</h2>
          <div style={{ fontSize: 13, color: T.subtle }}>Hover a tile for context</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {C.work.map((w, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "4/3", borderRadius: 4, overflow: "hidden", background: T.workBg, cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.querySelector('.hover').style.opacity = 1}
              onMouseLeave={e => e.currentTarget.querySelector('.hover').style.opacity = 0}>
              <img src={w.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div className="hover" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(20,16,12,.94) 0%, transparent 70%)", padding: 20, display: "flex", flexDirection: "column", justifyContent: "flex-end", color: "#F5ECDB", opacity: 0, transition: "opacity .25s" }}>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, letterSpacing: -0.3 }}>{w.title}</div>
                <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 8 }}>{w.client}</div>
                <div style={{ fontSize: 13, lineHeight: 1.45 }}>{w.problem}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "40px 36px 60px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, marginBottom: 64 }}>
          <div style={{ padding: 32, background: T.card, borderRadius: 4 }}>
            <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: T.subtle, marginBottom: 16 }}>A bit more</div>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, lineHeight: 1.35, letterSpacing: -0.3, margin: 0 }}>{C.bio}</p>
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {C.stack.map(s => <span key={s} style={{ padding: "5px 10px", background: T.cardSoft, border: `1px solid ${T.hairline}`, fontSize: 12, borderRadius: 2 }}>{s}</span>)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1.2, textTransform: "uppercase", color: T.subtle, marginBottom: 16 }}>Writing</div>
            {C.notes.map((n, i) => (
              <a key={i} href="#" style={{ display: "block", padding: "12px 0", borderBottom: `1px solid ${T.hairline}`, color: "inherit" }}>
                <div style={{ fontSize: 11, color: T.subtle }}>{n.date} · {n.len}</div>
                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 19, letterSpacing: -0.2, marginTop: 2 }}>{n.title}</div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 42, margin: "0 0 20px", letterSpacing: -1 }}>FAQ</h2>
          {C.faq.map((f, i) => (
            <details key={i} style={{ padding: "16px 0", borderTop: `1px solid ${T.hairline}` }}>
              <summary style={{ cursor: "pointer", fontFamily: "'Instrument Serif', serif", fontSize: 22, listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                <span>{f.q}</span><span style={{ color: accent }}>+</span>
              </summary>
              <div style={{ marginTop: 10, fontSize: 15, color: T.subtle, lineHeight: 1.55, maxWidth: 680 }}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>

      <footer style={{ padding: "24px 36px", borderTop: `1px solid ${T.hairline}`, display: "flex", justifyContent: "space-between", fontSize: 12, color: T.subtle }}>
        <div>© 2026 Patrick Allen</div>
        <div style={{ display: "flex", gap: 20 }}><a href="#">Email</a><a href="#">Twitter</a><a href="#">GitHub</a></div>
      </footer>
    </div>
  );
};

window.V8 = V8;
