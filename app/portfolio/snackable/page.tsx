import PortfolioView from "../components/portfolioView";
import Footer from "@/components/footer";

const project = {
  title: "Snackable MVP",
  subtitle: "A platform for creating and managing snackable content. ",

  sections: [
    {
      title: "About",
      content: [
        "A responsive progressive web app for internal print operations teams to manage production workflows. I led design and front-end implementation from initial user flows to final shipped UI.",
      ],
      images: [
        {
          src: "/images/projects/snackable/onboarding/onboarding-1.0.jpg",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/onboarding/onboarding-2.0.jpg",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/onboarding/onboarding-3.0.jpg",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/onboarding/onboarding-4.0.jpg",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/onboarding/onboarding-5.0.jpg",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/onboarding/onboarding-6.0.jpg",
          alt: "Home screen",
        },
        {
          src: "/images/projects/snackable/onboarding/onboarding-7.0.jpg",
          alt: "Home screen",
        },
      ],
    },
    {
      title: "Problem",
      content: [
        "The original workflow was fragmented across spreadsheets and emails, leading to frequent errors and missed deadlines.",
      ],
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
      title: "Process",
      content: [
        "I mapped user journeys with the operations team, defined core actions, and prototyped key flows in Figma. I then translated designs into a reusable component library in React and Storybook.",
      ],
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
        <PortfolioView project={project} />
      </main>

      <Footer />
    </div>
  );
}
