import PortfolioViewHeader from "../components/portfolioViewHeader";
import PortfolioViewSection from "../components/portfolioViewSection";
import PortfolioViewFooter from "../components/portfolioViewFooter";
import Text from "@/components/text";
import Bullets from "@/components/bullets";
import Footer from "@/components/footer";

const project = {
  title: "Podcast App",
  subtitle: "Bringing social layers to podcasts. ",
  snapshot: [
    {
      label: "Timeline",
      copy: "2023",
    },
    {
      label: "Role",
      copy: "Product Designer & Front-End Developer",
    },
    {
      label: "Delivery",
      copy: "UX, UI, Prototyping + React Native implementation",
    },
    {
      label: "Scope",
      copy: "Podcast player, discovery feed, social features (likes, comments, clips, AMAs), queues, community interactions",
    },
  ],

  sections: [
    {
      images: [
        {
          src: "/images/projects/podcast/podcast-screens-1.png",
          alt: "Manual batch creation",
        },
      ],
    },
    {
      images: [
        {
          src: "/images/projects/podcast/podcast-screens-2.png",
          alt: "Print Evolved",
        },
      ],
    },
    {
      images: [
        {
          src: "/images/projects/podcast/podcast-screens-3.png",
          alt: "Print Evolved",
        },
      ],
    },
  ],
};

export default function PortfolioPodcastApp() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-stone-900">
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
              caption=""
            >
              <Text>
                This project explored how to combine podcast listening with a
                lightweight social layer that brings audiences and creators
                together. Alongside standard features like following, listening
                and queueing episodes, the app introduced community interactions
                — comments, likes, clips, AMAs, polls — to help listeners engage
                with each other and with podcasters.
              </Text>

              <Text>
                I led all UX and UI design and built the initial React Native
                prototype.
              </Text>
            </PortfolioViewSection>

            {/* Section Problem */}
            <PortfolioViewSection
              title="Problem"
              images={project.sections[1]?.images || []}
              caption="Screens showing course creation process."
            >
              <Text>
                Podcast discovery is passive and slow. Listeners struggle to
                find new shows, creators struggle to foster community and most
                apps isolate listening from social interaction.
              </Text>

              <div className="space-y-3">
                <Text>The product aimed to solve this by:</Text>
                <Bullets
                  items={[
                    "adding community features directly into the listening experience",
                    "making discovery active and dynamic, powered by social signals",
                    "giving creators a place to interact with their audience",
                    "letting listeners explore podcasts through generated previews",
                  ]}
                />
              </div>
            </PortfolioViewSection>

            {/* Section Approach */}
            <PortfolioViewSection
              title="Approach"
              images={project.sections[2]?.images || []}
              caption="Screens showing the creator preview flows."
            >
              <Text as="h3" size="text-lg">
                1. Define the structure
              </Text>
              <div className="space-y-3">
                <Text>We shaped the product around three pillars:</Text>
                <Bullets
                  items={[
                    "Listen — follow shows, play episodes, build a queue",
                    "Engage - like, comment, vote, ask questions, join AMAs",
                    "Discover — scroll through a feed of episode previews generated from transcripts or metadata",
                  ]}
                />
              </div>
              <Text>
                These pillars guided the app’s navigation, interaction model and
                UI.
              </Text>

              <Text as="h3">2. Design the core listening experience</Text>
              <div className="space-y-3">
                <Text>I designed flows for:</Text>
                <Bullets
                  items={[
                    "following shows and creators",
                    "playing episodes",
                    "queue management",
                    "lightweight interactions (likes, clips, shares) in the player",
                    "episode detail screens with discussion threads",
                  ]}
                />
              </div>
              <Text>
                The player UI was built around clarity and quick actions.
              </Text>

              <Text as="h3">3. Add the community layer</Text>
              <div className="space-y-3">
                <Text>To bring listeners together, I designed:</Text>
                <Bullets
                  items={[
                    "episode-level comment threads",
                    "simple upvotes and reactions",
                    "AMA boards where creators could answer listener questions",
                    "quick clip creation (highlight → clip) for sharing moments",
                    "basic user profiles",
                  ]}
                />
              </div>

              <Text as="h3">4. Build a dynamic discovery feed</Text>
              <div className="space-y-3">
                <Text>
                  The Discovery tab used episode metadata or auto-generated
                  previews to create:
                </Text>
                <Bullets
                  items={[
                    "short audio snippets",
                    "teaser cards",
                    "simple episode summaries",
                    "quick “add to queue” actions",
                  ]}
                />
              </div>

              <Text as="h3">5. Prototype the full app</Text>
              <div className="space-y-3">
                <Text>
                  I created a high-fidelity Figma prototype and a functional
                  React Native front-end to test:
                </Text>
                <Bullets
                  items={[
                    "onboarding",
                    "feed behaviour",
                    "player interactions",
                    "comment flows",
                    "queue management",
                  ]}
                />
              </div>
              <Text>
                This allowed for early testing of engagement ideas and feed
                behaviour.
              </Text>
            </PortfolioViewSection>

            {/* Section Outcomes */}
            <PortfolioViewSection
              title="Outcomes"
              // images={project.sections[3]?.images || []}
              caption=""
            >
              <Bullets
                items={[
                  "Full UX and UI for the MVP",
                  "Working React Native prototype covering core flows",
                  "A cohesive product concept combining listening, discovery and social features",
                  "Clear direction for future feature prioritisation",
                ]}
              ></Bullets>
            </PortfolioViewSection>
          </div>

          <PortfolioViewFooter />
        </section>
      </main>

      <Footer />
    </div>
  );
}
