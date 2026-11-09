import type { Metadata } from "next";
import CaseStudyShell from "@/components/portfolio/case-study-shell";
import CaseHero from "@/components/portfolio/case-hero";
import CaseSection from "@/components/portfolio/case-section";
import NextProjects from "@/components/portfolio/next-projects";

export const metadata: Metadata = {
  title: "Podcast App | Patrick Allen",
  description:
    "Product design and React Native prototyping for a podcast app with listening, discovery and community features.",
};

const snapshot = [
  { label: "Timeline", copy: "2023" },
  { label: "Role", copy: "Product Designer & Front-End Developer" },
  { label: "Delivery", copy: "UX, UI, Prototyping + React Native implementation" },
  {
    label: "Scope",
    copy: "Podcast player, discovery feed, social features, queues, community interactions",
  },
];

export default function PortfolioPodcastApp() {
  return (
    <CaseStudyShell>
      <CaseHero
        title="Podcast App"
        subtitle="Bringing social layers to podcasts."
        snapshot={snapshot}
      />

      <CaseSection
        id="overview"
        label="01"
        title="Overview"
        featured={{
          src: "/images/projects/podcast/podcast-screens-1.png",
          alt: "Podcast app listening and feed screens",
        }}
      >
        <p>
          This project explored how to combine podcast listening with a lightweight social
          layer that brings audiences and creators together. Alongside standard features
          like following, listening and queueing episodes, the app introduced community
          interactions, comments, likes, clips, AMAs, polls, to help listeners engage
          with each other and with podcasters.
        </p>
        <p>I led all UX and UI design and built the initial React Native prototype.</p>
      </CaseSection>

      <CaseSection
        id="problem"
        label="02"
        title="Problem"
        caption="Discovery and community screens from the podcast prototype."
        featured={{
          src: "/images/projects/podcast/podcast-screens-2.png",
          alt: "Podcast app discovery and community screens",
        }}
      >
        <p>
          Podcast discovery is passive and slow. Listeners struggle to find new shows,
          creators struggle to foster community and most apps isolate listening from social
          interaction.
        </p>
        <p>The product aimed to solve this by:</p>
        <ul>
          <li>adding community features directly into the listening experience</li>
          <li>making discovery active and dynamic, powered by social signals</li>
          <li>giving creators a place to interact with their audience</li>
          <li>letting listeners explore podcasts through generated previews</li>
        </ul>
      </CaseSection>

      <CaseSection
        id="approach"
        label="03"
        title="Approach"
        caption="Core listening, engagement and discovery flows."
        featured={{
          src: "/images/projects/podcast/podcast-screens-3.png",
          alt: "Podcast app player and engagement screens",
        }}
      >
        <h3>1. Define the structure</h3>
        <p>We shaped the product around three pillars:</p>
        <ul>
          <li>Listen — follow shows, play episodes, build a queue</li>
          <li>Engage — like, comment, vote, ask questions, join AMAs</li>
          <li>
            Discover — scroll through a feed of episode previews generated from transcripts
            or metadata
          </li>
        </ul>
        <p>These pillars guided the app’s navigation, interaction model and UI.</p>
        <h3>2. Design the core listening experience</h3>
        <p>I designed flows for:</p>
        <ul>
          <li>following shows and creators</li>
          <li>playing episodes</li>
          <li>queue management</li>
          <li>lightweight interactions (likes, clips, shares) in the player</li>
          <li>episode detail screens with discussion threads</li>
        </ul>
        <p>The player UI was built around clarity and quick actions.</p>
        <h3>3. Add the community layer</h3>
        <p>To bring listeners together, I designed:</p>
        <ul>
          <li>episode-level comment threads</li>
          <li>simple upvotes and reactions</li>
          <li>AMA boards where creators could answer listener questions</li>
          <li>quick clip creation (highlight → clip) for sharing moments</li>
          <li>basic user profiles</li>
        </ul>
        <h3>4. Build a dynamic discovery feed</h3>
        <p>
          The Discovery tab used episode metadata or auto-generated previews to create:
        </p>
        <ul>
          <li>short audio snippets</li>
          <li>teaser cards</li>
          <li>simple episode summaries</li>
          <li>quick “add to queue” actions</li>
        </ul>
        <h3>5. Prototype the full app</h3>
        <p>
          I created a high-fidelity Figma prototype and a functional React Native front-end
          to test:
        </p>
        <ul>
          <li>onboarding</li>
          <li>feed behaviour</li>
          <li>player interactions</li>
          <li>comment flows</li>
          <li>queue management</li>
        </ul>
        <p>
          This allowed for early testing of engagement ideas and feed behaviour.
        </p>
      </CaseSection>

      <CaseSection id="outcomes" label="04" title="Outcomes">
        <ul>
          <li>Full UX and UI for the MVP</li>
          <li>Working React Native prototype covering core flows</li>
          <li>
            A cohesive product concept combining listening, discovery and social features
          </li>
          <li>Clear direction for future feature prioritisation</li>
        </ul>
      </CaseSection>

      <NextProjects currentSlug="podcast-app" />
    </CaseStudyShell>
  );
}
