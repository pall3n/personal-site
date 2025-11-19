import PortfolioViewHeader from "../components/portfolioViewHeader";
import PortfolioViewSection from "../components/portfolioViewSection";
import PortfolioViewFooter from "../components/portfolioViewFooter";
import Text from "@/components/text";
import Bullets from "@/components/bullets";
import Footer from "@/components/footer";

const project = {
  title: "Snackable MVP",
  subtitle: "A platform for creating and managing snackable content. ",
  snapshot: [
    {
      label: "Role:",
      copy: "Product Designer (UX, UI, Product Exploration)",
    },
    {
      label: "Company:",
      copy: "Decode",
    },
    {
      label: "Timeline:",
      copy: "2023",
    },
    {
      label: "Delivery:",
      copy: "Figma prototype (no dev)",
    },
    {
      label: "Scope:",
      copy: "Onboarding, course creation, course management, learner flow, quiz creation, markup editor",
    },
  ],

  sections: [
    {
      images: [
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
      ],
    },
    {
      images: [
        {
          src: "/images/projects/snackable/home.png",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/home-create.png",
          alt: "Create a new snackable",
        },
        {
          src: "/images/projects/snackable/editor-split.png",
          alt: "Split the snackable",
        },
        {
          src: "/images/projects/snackable/editor-code.png",
          alt: "Code editor",
        },
        {
          src: "/images/projects/snackable/editor-quiz.png",
          alt: "Quiz editor example",
        },
        {
          src: "/images/projects/snackable/editor-published.png",
          alt: "Published snackable",
        },
      ],
    },
    {
      images: [
        {
          src: "/images/projects/snackable/preview.png",
          alt: "Preview screen",
        },
        {
          src: "/images/projects/snackable/preview-menu-open.png",
          alt: "Preview with menu open",
        },
        {
          src: "/images/projects/snackable/preview-end-screen.png",
          alt: "End screen",
        },
      ],
    },
  ],
};

export default function PortfolioPodcastApp() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-zinc-900">
      <main>
        <section className="py-8 px-8">
          <PortfolioViewHeader
            title={project.title}
            subtitle={project.subtitle}
            snapshot={project.snapshot}
          />

          <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 mt-6 md:mt-10 lg:mt-12 sm:mt-8">
            {/* Section Overview */}
            <PortfolioViewSection
              title="Overview"
              images={project.sections[0]?.images || []}
              caption="Screens showing the onboarding process."
            >
              <Text>
                Snackable is an MVP concept for a platform that helps creators
                build and publish bite-sized courses designed to be completed
                quickly. The goal: reduce overwhelm, increase completion rates
                and help learners build momentum through small, repeatable wins.
              </Text>

              <Text>
                I led all UX and UI design, defining the product structure and
                creating a full prototype covering creator tools and learner
                flows.
              </Text>
            </PortfolioViewSection>

            {/* Section Problem */}
            <PortfolioViewSection
              title="Problem"
              images={project.sections[1]?.images || []}
              caption="S"
            >
              <Text>
                Traditional courses are long, dense and hard to finish. Creators
                struggle with heavy LMS tools, and learners often abandon
                content early.
              </Text>

              <div className="space-y-2">
                <Text>Snackable needed:</Text>
                <Bullets
                  items={[
                    "a lightweight way for creators to build micro-courses, and",
                    "a simple, focused learner experience that encouraged completion.",
                  ]}
                />
              </div>
            </PortfolioViewSection>

            {/* Section Approach */}
            <PortfolioViewSection
              title="Approach"
              images={project.sections[2]?.images || []}
              caption="Ierlay."
            >
              <Text as="h3" size="text-lg">
                1. Define the model
              </Text>
              <Text>
                The product is built around short “nuggets” of content that can
                be completed in minutes, and chained together to form small
                courses.
              </Text>

              <Text as="h3">2. Design creator workflows</Text>
              <div className="space-y-2">
                <Text>I explored flows for:</Text>
                <Bullets
                  items={[
                    "creating courses",
                    "adding and reordering nuggets",
                    "writing content using a markup-based editor",
                    "inserting sections and quizzes",
                    "previewing the learner view",
                  ]}
                />
              </div>
              <Text>
                The markup editor kept creation fast, structured and portable.
                Users can use the Snackable editor or bring in courses created
                from their favourite markdown tool such as Obsidian.
              </Text>

              <Text as="h3">3. Map the learner experience</Text>
              <Text>
                I designed a minimal, focused reading and quiz flow with clear
                progress indicators and momentum cues (“Continue →”) to
                encourage quick wins.
              </Text>

              <Text as="h3">4. Prototype the full MVP</Text>
              <Text>
                A clickable Figma prototype covered onboarding, dashboards,
                nugget creation and the full learner journey. This allowed the
                founder to validate the concept and prioritise build phases.
              </Text>
            </PortfolioViewSection>

            <PortfolioViewSection
              title="Outcomes"
              images={project.sections[3]?.images || []}
              caption="Screens from the batch creation and conflict resolution flows, including job selection, batch details and confirmation steps."
            >
              <Bullets
                items={[
                  "Full MVP UX/UI delivered for validation and pitching",
                  "Clear product structure and content model established",
                  "Lightweight flows for both creators and learners",
                  "A scalable foundation for future development",
                ]}
              ></Bullets>
              <Text>
                This reduced mis-batching and gave operators more confidence
                during peak cycles.
              </Text>
            </PortfolioViewSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
