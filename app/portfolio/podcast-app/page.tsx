import PortfolioView from "../components/portfolioView";
import Footer from "@/components/footer";

const project = {
  title: "Podcast App",
  subtitle: "Bringing social layers to podcasts. ",

  sections: [
    {
      title: "About",
      content:
        "A responsive progressive web app for internal print operations teams to manage production workflows. I led design and front-end implementation from initial user flows to final shipped UI.",
      images: [
        {
          src: "/images/projects/podcast/podcast-screens-1.png",
          alt: "Manual batch creation",
        },
      ],
    },
    {
      title: "Problem",
      content:
        "The original workflow was fragmented across spreadsheets and emails, leading to frequent errors and missed deadlines.",
      images: [
        {
          src: "/images/projects/podcast/podcast-screens-2.png",
          alt: "Print Evolved",
        },
      ],
    },
    {
      title: "Process",
      content:
        "I mapped user journeys with the operations team, defined core actions, and prototyped key flows in Figma. I then translated designs into a reusable component library in React and Storybook.",
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
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-zinc-900">
      <main>
        <PortfolioView project={project} />
      </main>

      <Footer />
    </div>
  );
}
