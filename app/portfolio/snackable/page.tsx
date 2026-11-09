import type { Metadata } from "next";
import CaseStudyShell from "@/components/portfolio/case-study-shell";
import CaseHero from "@/components/portfolio/case-hero";
import CaseSection from "@/components/portfolio/case-section";
import NextProjects from "@/components/portfolio/next-projects";

export const metadata: Metadata = {
  title: "Snackable | Patrick Allen",
  description:
    "MVP product design for a platform that helps creators build and publish bite-sized courses.",
};

const snapshot = [
  { label: "Company", copy: "Decode" },
  { label: "Timeline", copy: "2023" },
  { label: "Role", copy: "Product Designer (UX, UI, Product Exploration)" },
  { label: "Delivery", copy: "Figma prototype (no dev)" },
  {
    label: "Scope",
    copy: "Onboarding, course management, markup editor, learner flow",
  },
];

export default function PortfolioSnackable() {
  return (
    <CaseStudyShell>
      <CaseHero
        title="Snackable MVP"
        subtitle="A platform for creating and managing snackable content."
        snapshot={snapshot}
      />

      <CaseSection
        id="overview"
        label="01"
        title="Overview"
        caption="Screens showing the onboarding process."
        carousel={[
          {
            src: "/images/projects/snackable/onboarding/onboarding-1.0.jpg",
            alt: "Create account screen",
          },
          {
            src: "/images/projects/snackable/onboarding/onboarding-2.0.jpg",
            alt: "Choose your creator name",
          },
          {
            src: "/images/projects/snackable/onboarding/onboarding-3.0.jpg",
            alt: "First course type",
          },
          {
            src: "/images/projects/snackable/onboarding/onboarding-4.0.jpg",
            alt: "First course overview",
          },
          {
            src: "/images/projects/snackable/onboarding/onboarding-5.0.jpg",
            alt: "Digital hangouts",
          },
          {
            src: "/images/projects/snackable/onboarding/onboarding-6.0.jpg",
            alt: "Team invites",
          },
          {
            src: "/images/projects/snackable/onboarding/onboarding-7.0.jpg",
            alt: "Course example",
          },
        ]}
      >
        <p>
          I was hired to design the MVP of Snackable, a platform that helps creators build
          and publish bite-sized courses designed to be completed quickly. The goal: reduce
          overwhelm, increase completion rates and help learners build momentum through
          small, repeatable wins.
        </p>
        <p>
          I led all UX and UI design, defining the product structure and creating a full
          prototype covering creator tools and learner flows.
        </p>
      </CaseSection>

      <CaseSection
        id="problem"
        label="02"
        title="Problem"
        caption="Screens showing the course creation process."
        grid={[
          { src: "/images/projects/snackable/home.png", alt: "Home screen" },
          { src: "/images/projects/snackable/home-create.png", alt: "Create a new snackable" },
          {
            src: "/images/projects/snackable/editor-split.png",
            alt: "Split snackable editor",
            span2: true,
          },
          { src: "/images/projects/snackable/editor-code.png", alt: "Code editor" },
          { src: "/images/projects/snackable/editor-quiz.png", alt: "Quiz editor example" },
          {
            src: "/images/projects/snackable/editor-published.png",
            alt: "Published snackable",
            span2: true,
          },
        ]}
      >
        <p>
          Traditional courses are long, dense and hard to finish. Creators struggle with
          heavy LMS tools, and learners often abandon content early.
        </p>
        <p>Snackable needed:</p>
        <ul>
          <li>a lightweight way for creators to build micro-courses, and</li>
          <li>a simple, focused learner experience that encouraged completion.</li>
        </ul>
      </CaseSection>

      <CaseSection
        id="approach"
        label="03"
        title="Approach"
        caption="Screens showing the creator preview flows."
        grid={[
          { src: "/images/projects/snackable/preview-course.png", alt: "Preview screen" },
          {
            src: "/images/projects/snackable/preview-menu-open.png",
            alt: "Preview with menu open",
          },
          {
            src: "/images/projects/snackable/preview-end-screen.png",
            alt: "End screen",
            span2: true,
          },
        ]}
      >
        <h3>1. Define the model</h3>
        <p>
          The product is built around short “nuggets” of content that can be completed in
          minutes, and chained together to form small courses.
        </p>
        <h3>2. Design creator workflows</h3>
        <p>I explored flows for:</p>
        <ul>
          <li>creating courses</li>
          <li>adding and reordering nuggets</li>
          <li>writing content using a markup-based editor</li>
          <li>inserting sections and quizzes</li>
          <li>previewing the learner view</li>
        </ul>
        <p>
          The markup editor kept creation fast, structured and portable. Users can use the
          Snackable editor or bring in courses created from their favourite markdown tool
          such as Obsidian.
        </p>
        <h3>3. Map the learner experience</h3>
        <p>
          I designed a minimal, focused reading and quiz flow with clear progress indicators
          and momentum cues to encourage quick wins.
        </p>
        <h3>4. Prototype the full MVP</h3>
        <p>
          A clickable Figma prototype covered onboarding, dashboards, nugget creation and
          the full learner journey. This allowed the founder to validate the concept and
          prioritise build phases.
        </p>
      </CaseSection>

      <CaseSection id="outcomes" label="04" title="Outcomes">
        <ul>
          <li>Full MVP UX/UI delivered for validation and pitching</li>
          <li>Clear product structure and content model established</li>
          <li>Lightweight flows for both creators and learners</li>
          <li>A scalable foundation for future development</li>
        </ul>
      </CaseSection>

      <NextProjects currentSlug="snackable" />
    </CaseStudyShell>
  );
}
