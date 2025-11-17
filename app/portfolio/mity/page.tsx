import PortfolioView from "../components/portfolioView";
import Footer from "@/components/footer";

const project = {
  title: "Mity V2",
  subtitle: "Communities built on decentralised rails.",

  sections: [
    {
      title: "About",
      content:
        "A responsive progressive web app for internal print operations teams to manage production workflows. I led design and front-end implementation from initial user flows to final shipped UI.",
      images: [
        {
          src: "/images/projects/mity/user-profile.png",
          alt: "User profile screen",
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
      title: "Problem",
      content:
        "The original workflow was fragmented across spreadsheets and emails, leading to frequent errors and missed deadlines.",
      images: [
        {
          src: "/images/projects/mity/feed.png",
          alt: "Feed screen",
        },
        {
          src: "/images/projects/mity/feed-scroll.png",
          alt: "Feed screen",
        },
      ],
    },
    {
      title: "Process",
      content:
        "I mapped user journeys with the operations team, defined core actions, and prototyped key flows in Figma. I then translated designs into a reusable component library in React and Storybook.",
      images: [
        {
          src: "/images/projects/mity/apps.png",
          alt: "App store page",
        },
        {
          src: "/images/projects/mity/post-follow.png",
          alt: "Follow post example",
        },
        {
          src: "/images/projects/mity/post-unlockable.png",
          alt: "Unlockable post example",
        },
      ],
    },
  ],
};

export default function PortfolioPodcastApp() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-zinc-900">
      <main>
        <PortfolioView project={project} />
      </main>

      <Footer />
    </div>
  );
}
