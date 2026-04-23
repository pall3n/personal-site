export const siteContent = {
  name: "Patrick Allen",
  role: "Design Engineer",
  location: "Remote · UK",
  status: "Taking on work · May–June 2026",

  intro: {
    contract:
      "I design and build digital products end-to-end. No handoff, no 'waiting on dev', nothing lost in translation. I work with founders and small teams who need someone who can hold the whole picture, from the first Figma frame to the deployed thing running in production.",
    buildweek:
      "You probably know exactly what the problem is. The flow that confuses users. The page that never converted. The feature that shipped but never quite landed. Give me a week. I'll design it, build it, and hand it back working.",
  },

  heroLine: {
    contract:
      "Design-led product work for teams that want it shipped, not shepherded.",
    buildweek: "One problem. Five days. Something real at the end of it.",
  },

  stack: [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind",
    "Figma",
    "Claude Code",
    "Postgres",
    "tRPC",
  ],

  work: [
    {
      img: "/images/work/image-1.png",
      title: "Ops console",
      client: "Logistics · £20m revenue",
      problem:
        "Daily operations ran on four spreadsheets and a prayer. Built a unified console that now runs their whole dispatch.",
    },
    {
      img: "/images/work/image-2.png",
      title: "Booking flow",
      client: "B2C marketplace",
      problem:
        "Abandon rate at 68%. Redesigned and shipped the checkout in three weeks. Now at 41%.",
    },
    {
      img: "/images/work/image-3.png",
      title: "Inventory dashboard",
      client: "DTC brand",
      problem:
        "Warehouse team flying blind on stock. Real-time dash with alerts, predictive re-order, the lot.",
    },
    {
      img: "/images/work/image-4.png",
      title: "Onboarding redesign",
      client: "SaaS · Series A",
      problem:
        "Day-1 activation was 22%. Rebuilt the first-run experience around a single 'aha' moment. Now 58%.",
    },
    {
      img: "/images/work/image-5.png",
      title: "Admin tools",
      client: "Fintech",
      problem:
        "Support team raising 80 tickets a day to engineering. Gave them self-serve tools. Tickets down 90%.",
    },
    {
      img: "/images/work/image-6.png",
      title: "Marketing site",
      client: "Early-stage startup",
      problem:
        "Generic SaaS template. Rebuilt it around the actual product story. Conversion doubled.",
    },
  ],

  buildWeekSteps: [
    {
      label: "Before",
      title: "Scoping call",
      desc: "30 mins. We agree the one problem and what 'done' looks like.",
    },
    {
      label: "Day 1",
      title: "Discover & design",
      desc: "I dig into the problem, map the flow, start putting pixels down.",
    },
    {
      label: "Day 2",
      title: "Build the core",
      desc: "Ship the main path end-to-end. Rough but real.",
    },
    {
      label: "Day 3",
      title: "Polish & extend",
      desc: "Edge cases, error states, the details that make it feel finished.",
    },
    {
      label: "Day 4",
      title: "Integrate & test",
      desc: "Hook into your stack, check it doesn't break anything, iterate on feedback.",
    },
    {
      label: "Day 5",
      title: "Review & handoff",
      desc: "Walk you through it. Deploy. You own the code, I stay on slack for questions.",
    },
  ],

  buildWeekFit: [
    "You're sitting on a UX problem you keep de-prioritising",
    "You're not happy with something AI shipped and nobody knows how to improve it",
    "You're a growing product where the experience hasn't kept up with the features",
    "You're a founder or small team that needs to move fast",
  ],

  contractFit: [
    "You need a design-engineer embedded in a team for 1–3 months",
    "You're building an internal tool and want it to feel like a product, not a form",
    "You have a vague mandate ('make the app better') and need someone to own it",
    "You're a founder who wants design and engineering in one brain",
  ],

  bio: "I'm Patrick. I've been designing and shipping software for about a decade — mostly for small teams where being able to do both matters. Before going independent I led product at a logistics platform that did £20m/yr. I live in the UK, I work remote, I bike a lot, and I've never sent a Loom longer than four minutes.",

  faq: [
    {
      q: "Why a week? Isn't that too short?",
      a: "Most 'weeks' of work stretch into months because of process. Strip the process and you'd be surprised what fits in five focused days. It also forces us to be honest about scope.",
    },
    {
      q: "What if we need more than a week?",
      a: "You can either do mulitple build weeks or we can agree a contract instead. Usually this would be 4–12 weeks, paid monthly. A Build Week is a great way to find out if we like working together.",
    },
    {
      q: "Who owns the code?",
      a: "You do. Day one. It's in your repo, under your licence, no strings.",
    },
    {
      q: "Do you work with designers / other engineers already on the team?",
      a: "Yes, often. I pair well. I can also work alone if that's what you need.",
    },
    // {
    //   q: "Do you take equity?",
    //   a: "Sometimes, for the right story. Cash first though.",
    // },
  ],

  notes: [
    {
      date: "Apr 2026",
      title: "What a 'design engineer' actually does, in 2026",
      len: "7 min",
    },
    {
      date: "Mar 2026",
      title: "Why the handoff model is broken for small teams",
      len: "4 min",
    },
    {
      date: "Feb 2026",
      title: "Five build weeks in: what I'd change",
      len: "5 min",
    },
    {
      date: "Jan 2026",
      title: "How I scope a week of work in a 30-min call",
      len: "3 min",
    },
  ],

  pricing: {
    buildweek: {
      amount: "£2,750",
      unit: "+ VAT · per week",
      line: "Flat rate. No surprises.",
    },
    contract: {
      amount: "£450",
      unit: "+ VAT · per day",
      line: "Typical engagements 4–12 weeks.",
    },
  },

  cta: "Book a discovery call",
  ctaUrl: "https://calendly.com/heypatrick/30min",

  leverage: {
    heading: "How I move this fast",
    blurb:
      "A week is short. The reason I can ship something real in five days is that I've invested hard in the tooling around me, letting it do the undifferentiated heavy lifting.",
    items: [
      {
        k: "01",
        t: "Claude Code reads your repo on day one",
        d: "Before our kickoff I've had Claude Code walk the codebase: conventions, data model, routing, the shape of the team's taste. I come in with a map, not blank.",
      },
      {
        k: "02",
        t: "A battle-tested starter stack",
        d: "Next.js + Tailwind + Postgres patterns I've shipped a dozen times. Auth, emails, deploys, logging. Solved problems stay solved.",
      },
      {
        k: "03",
        t: "AI-paired, human-owned",
        d: "Claude drafts, I review and edit. That's 2-3x output without the slop, and every line of code gets read by me before it gets committed.",
      },
      {
        k: "04",
        t: "Design + build in one brain",
        d: "No Figma-to-Jira tax, no handoff meetings, no 'that's not quite what I meant.' The person making the pixel decisions is the person writing the JSX.",
      },
    ],
  },

  sampleScope: {
    heading: "A sample Build Week",
    blurb:
      "A real scope from a recent engagement, lightly anonymised. Yours will look different, this is just the shape of it.",
    client: "Fintech dashboard · Series A",
    problem:
      "Users dropped off at the 'connect bank account' step. We'd A/B tested three versions. None moved the needle.",
    agreement:
      "Redesign + rebuild the connection flow, end-to-end, shipped behind a feature flag by Friday.",
    days: [
      {
        d: "Mon",
        t: "Audit & reframe",
        b: [
          "Watched 12 session recordings",
          "2x user interviews",
          "Re-framed the problem: trust, not friction",
          "Sketched 4 directions, agreed on one",
        ],
      },
      {
        d: "Tue",
        t: "Design the new flow",
        b: [
          "Figma'd the 6 key screens",
          "Wrote the new copy with the founder",
          "Agreed edge cases & error states",
          "Kickoff with the eng team on integration points",
        ],
      },
      {
        d: "Wed",
        t: "Build the happy path",
        b: [
          "Built the screens in the Next.js app",
          "Wired up the Plaid SDK",
          "Stubbed the error states",
          "Deployed to preview",
        ],
      },
      {
        d: "Thu",
        t: "Edge cases & polish",
        b: [
          "All 11 error states",
          "Loading + success micro-interactions",
          "Analytics events",
          "Internal review with 3 team members",
        ],
      },
      {
        d: "Fri",
        t: "Ship & hand off",
        b: [
          "Feature flag: 10% rollout",
          "Loom walkthrough of the code",
          "Handoff doc: rollout plan, metrics, known gaps",
          "End-of-week review call",
        ],
      },
    ],
    outcome:
      "Completion rate +38% on the 10% cohort in week one. Rolled to 100% the following Monday.",
  },
} as const;

export type SiteContent = typeof siteContent;
export type Mode = "buildweek" | "contract";
