import PortfolioViewHeader from "../components/portfolioViewHeader";
import PortfolioViewSection from "../components/portfolioViewSection";
import PortfolioViewFooter from "../components/portfolioViewFooter";
import Text from "@/components/text";
import Bullets from "@/components/bullets";
import Footer from "@/components/footer";
import CTAFooter from "@/components/ctaFooter";

const project = {
  title: "Mity V2",
  subtitle: "Communities built on decentralised rails.",
  image: "/images/projects/mity/preview.png",
  snapshot: [
    {
      label: "Timeline",
      copy: "2022-2023 (Personal Project)",
    },
    {
      label: "Role",
      copy: "Product Designer & Full Stack Developer",
    },
    {
      label: "Scope",
      copy: "UX, UI, product strategy, architecture, end-to-end MVP",
    },
    {
      label: "Features",
      copy: "Communities, feeds, posting, reactions, creator coin purchase, wallet flows, profiles, App Store concept",
    },
  ],

  sections: [
    {
      images: [
        {
          src: "/images/projects/mity/user-profile.png",
          alt: "User profile screen",
          className: "col-span-2",
        },
        {
          src: "/images/projects/mity/user-profile-invite.png",
          alt: "Invite screen",
        },
        {
          src: "/images/projects/mity/user-profile-buy.png",
          alt: "Buy screen",
        },
      ],
    },
    {
      images: [
        {
          src: "/images/projects/mity/feed.png",
          alt: "Feed screen",
        },
        {
          src: "/images/projects/mity/feed-comment.png",
          alt: "Feed screen",
        },
      ],
    },
    {
      images: [
        {
          src: "/images/projects/mity/apps.png",
          alt: "App store page",
          className: "col-span-2 rounded-xl",
        },
        {
          src: "/images/projects/mity/post-follow.png",
          alt: "Follow post example",
          className: "rounded-xl",
        },
        {
          src: "/images/projects/mity/post-unlockable.png",
          alt: "Unlockable post example",
          className: "rounded-xl",
        },
      ],
    },
  ],
};

export default function PortfolioPodcastApp() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-stone-900">
      <main>
        <section className="py-16 px-8">
          <PortfolioViewHeader
            title={project.title}
            subtitle={project.subtitle}
            snapshot={project.snapshot}
            image={project.image}
          />

          <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 mt-20 md:mt-30 lg:mt-40">
            {/* Section Overview */}
            <PortfolioViewSection
              id="overview"
              title="Overview"
              imageGrid={project.sections[0]?.images || []}
              caption="Screens showing the user profile with community invite and coin buy screens."
            >
              <Text>
                Mity is a decentralised community platform built on the DeSo
                blockchain. The goal was to create a place where communities can
                form, grow and share value — with digital money features built
                directly into the core experience, not added as an afterthought.
              </Text>

              <Text>
                Unlike traditional platforms where investors capture most of the
                upside, Mity explored a model where creators, communities and
                developers share in the success they generate.
              </Text>

              <Text>
                I owned the full product exploration: UX, UI, front-end
                development and the first working MVP.
              </Text>
            </PortfolioViewSection>

            {/* Section Problem */}
            <PortfolioViewSection
              title="Problem"
              imageGrid={project.sections[1]?.images || []}
              caption="Screens showing the feed with comment view."
            >
              <Text>
                Community platforms are centralised, ad-driven and extractive.
                Creators have little ownership, members don’t share in the
                success, and developers can’t easily extend the platform.
              </Text>

              <div className="space-y-3">
                <Text>Mity aimed to solve this by:</Text>
                <Bullets
                  items={[
                    "giving communities ownership and portability of their data",
                    "embedding wallets, tipping and community incentives at the core",
                    "enabling developers to build extensions on top of a shared social graph",
                    "making crypto-powered features accessible without deep technical knowledge",
                  ]}
                />
              </div>
            </PortfolioViewSection>

            {/* Section Approach */}
            <PortfolioViewSection
              title="Approach"
              imageGrid={project.sections[2]?.images || []}
              caption="Screens showing the app store concept and follow/unlockable post examples."
            >
              <Text as="h3" size="text-lg">
                1. Define the core experience
              </Text>

              <Text>The platform was structured around:</Text>
              <Bullets
                items={[
                  "Communities — joinable spaces with posts, discussions and shared ownership",
                  "Feeds — personalised timelines mixing posts, reactions and community updates",
                  "Profiles — creator identities with social and economic data",
                  "Digital money — tipping, tokenised support and reward mechanisms",
                  "Follow Post — a feature to track specific conversations you care about",
                  "Invites — frictionless ways to onboard new members",
                ]}
              />

              <Text as="h3">2. Build creator-friendly economic flows</Text>
              <Text>I designed simple, frictionless interactions for:</Text>
              <Bullets
                items={[
                  "purchasing creator coins",
                  "tipping and micro-support",
                  "viewing social/economic reputation",
                  "connecting wallets without overwhelming users",
                ]}
              />
              <Text>
                The focus was on making crypto feel invisible — powerful but
                approachable.
              </Text>

              <Text as="h3">3. App Store concept</Text>
              <Text>
                I designed an early concept for a community-level App Store,
                enabling developers to build modular extensions — from voting
                tools to premium access tiers — using shared DeSo primitives.
              </Text>
              <Text>
                This reinforced the long-term vision of Mity as a platform, not
                just a social app.
              </Text>

              <Text as="h3">4. Build the v1 MVP</Text>
              <div className="space-y-3">
                <Text>
                  I implemented a working MVP using Nuxt.js (Vue) as a
                  progressive web app (PWA), integrating:
                </Text>
                <Bullets
                  items={[
                    "wallet authentication",
                    "feed creation",
                    "posting & reactions",
                    "community creation/management",
                    "profiles",
                  ]}
                />
              </div>
              <Text>
                This allowed early validation of a much simpler user experience
                and the economic model, which was later refined in v2.
              </Text>
            </PortfolioViewSection>
          </div>

          <PortfolioViewFooter hideProjectIndex={3} inline={true} />
        </section>
      </main>

      <CTAFooter targetId="overview" />
      <Footer />
    </div>
  );
}
