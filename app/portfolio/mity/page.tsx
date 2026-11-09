import type { Metadata } from "next";
import CaseStudyShell from "@/components/portfolio/case-study-shell";
import CaseHero from "@/components/portfolio/case-hero";
import CaseSection from "@/components/portfolio/case-section";
import NextProjects from "@/components/portfolio/next-projects";

export const metadata: Metadata = {
  title: "Mity V2 | Patrick Allen",
  description:
    "Product design and full-stack MVP for a decentralised community platform built on DeSo.",
};

const snapshot = [
  { label: "Timeline", copy: "2022–2023 (Personal Project)" },
  { label: "Role", copy: "Product Designer & Full Stack Developer" },
  { label: "Scope", copy: "UX, UI, product strategy, architecture, end-to-end MVP" },
  {
    label: "Features",
    copy: "Communities, feeds, posting, reactions, creator coin purchase, wallet flows, profiles",
  },
];

export default function PortfolioMity() {
  return (
    <CaseStudyShell>
      <CaseHero
        title="Mity V2"
        subtitle="Communities built on decentralised rails."
        snapshot={snapshot}
      />

      <CaseSection
        id="overview"
        label="01"
        title="Overview"
        caption="User profile with community invite and coin buy screens."
        grid={[
          {
            src: "/images/projects/mity/user-profile.png",
            alt: "User profile screen",
            span2: true,
          },
          { src: "/images/projects/mity/user-profile-invite.png", alt: "Invite screen" },
          { src: "/images/projects/mity/user-profile-buy.png", alt: "Buy screen" },
        ]}
      >
        <p>
          Mity is a decentralised community platform built on the DeSo blockchain. The goal
          was to create a place where communities can form, grow and share value, with
          digital money features built directly into the core experience, not added as an
          afterthought.
        </p>
        <p>
          Unlike traditional platforms where investors capture most of the upside, Mity
          explored a model where creators, communities and developers share in the success
          they generate.
        </p>
        <p>
          I owned the full product exploration: UX, UI, front-end development and the first
          working MVP.
        </p>
      </CaseSection>

      <CaseSection
        id="problem"
        label="02"
        title="Problem"
        caption="Feed with comment view."
        grid={[
          { src: "/images/projects/mity/feed.png", alt: "Feed screen" },
          { src: "/images/projects/mity/feed-comment.png", alt: "Feed comment view" },
        ]}
      >
        <p>
          Community platforms are centralised, ad-driven and extractive. Creators have
          little ownership, members don’t share in the success, and developers can’t easily
          extend the platform.
        </p>
        <p>Mity aimed to solve this by:</p>
        <ul>
          <li>giving communities ownership and portability of their data</li>
          <li>embedding wallets, tipping and community incentives at the core</li>
          <li>
            enabling developers to build extensions on top of a shared social graph
          </li>
          <li>
            making crypto-powered features accessible without deep technical knowledge
          </li>
        </ul>
      </CaseSection>

      <CaseSection
        id="approach"
        label="03"
        title="Approach"
        caption="App store concept and follow/unlockable post examples."
        grid={[
          {
            src: "/images/projects/mity/apps.png",
            alt: "App store page",
            span2: true,
          },
          { src: "/images/projects/mity/post-follow.png", alt: "Follow post example" },
          {
            src: "/images/projects/mity/post-unlockable.png",
            alt: "Unlockable post example",
          },
        ]}
      >
        <h3>1. Define the core experience</h3>
        <p>The platform was structured around:</p>
        <ul>
          <li>
            Communities — joinable spaces with posts, discussions and shared ownership
          </li>
          <li>
            Feeds — personalised timelines mixing posts, reactions and community updates
          </li>
          <li>Profiles — creator identities with social and economic data</li>
          <li>Digital money — tipping, tokenised support and reward mechanisms</li>
          <li>
            Follow Post — a feature to track specific conversations you care about
          </li>
          <li>Invites — frictionless ways to onboard new members</li>
        </ul>
        <h3>2. Build creator-friendly economic flows</h3>
        <p>I designed simple, frictionless interactions for:</p>
        <ul>
          <li>purchasing creator coins</li>
          <li>tipping and micro-support</li>
          <li>viewing social/economic reputation</li>
          <li>connecting wallets without overwhelming users</li>
        </ul>
        <p>
          The focus was on making crypto feel invisible, powerful but approachable.
        </p>
        <h3>3. App Store concept</h3>
        <p>
          I designed an early concept for a community-level App Store, enabling developers
          to build modular extensions, from voting tools to premium access tiers, using
          shared DeSo primitives.
        </p>
        <p>
          This reinforced the long-term vision of Mity as a platform, not just a social
          app.
        </p>
        <h3>4. Build the v1 MVP</h3>
        <p>
          I implemented a working MVP using Nuxt.js (Vue) as a progressive web app (PWA),
          integrating:
        </p>
        <ul>
          <li>wallet authentication</li>
          <li>feed creation</li>
          <li>posting &amp; reactions</li>
          <li>community creation/management</li>
          <li>profiles</li>
        </ul>
        <p>
          This allowed early validation of a much simpler user experience and the economic
          model, which was later refined in v2.
        </p>
      </CaseSection>

      <CaseSection id="close" label="04" title="Where it landed">
        <p>
          The work produced a working PWA MVP and a clearer product direction for a
          community platform with ownership and economics built in, later refined in the
          v2 exploration.
        </p>
      </CaseSection>

      <NextProjects currentSlug="mity" />
    </CaseStudyShell>
  );
}
