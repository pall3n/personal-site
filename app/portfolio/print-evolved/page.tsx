import PortfolioView from "../components/portfolioView";
import Footer from "@/components/footer";

const project = {
  title: "Print Evolved",
  subtitle:
    "Print Evolved is a print company that prints on a variety of materials.",

  sections: [
    {
      title: "About",
      content:
        "A responsive progressive web app for internal print operations teams to manage production workflows. I led design and front-end implementation from initial user flows to final shipped UI.",
      images: [
        {
          src: "/images/projects/print-evolved/batch/manual-batch-1.png",
          alt: "Manual batch creation",
        },
        {
          src: "/images/projects/print-evolved/batch/manual-batch-2.png",
          alt: "Manual batch creation selected",
        },
        {
          src: "/images/projects/print-evolved/batch/manual-batch-3.png",
          alt: "Manual batch creation details",
        },
        {
          src: "/images/projects/print-evolved/batch/manual-batch-4.png",
          alt: "Manual batch creation confirmation",
        },
        {
          src: "/images/projects/print-evolved/batch/manual-batch-6.png",
          alt: "Manual batch creation conflict",
        },
      ],
    },
    {
      title: "Problem",
      content:
        "The original workflow was fragmented across spreadsheets and emails, leading to frequent errors and missed deadlines.",
      images: [
        {
          src: "/images/projects/print-evolved/sku/SKU-step-1.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-2.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-3.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-4.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-5.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-6.png",
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
          src: "/images/projects/print-evolved/invoice/invoices-1.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/invoice/invoices-2.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/invoice/invoices-3.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/invoice/invoices-4.png",
          alt: "Print Evolved",
        },
      ],
    },
    {
      content:
        "The new interfaces reduced dispatch errors by ~40% and became the foundation for future internal tools. I learned the value of designing around edge cases early in the process.",
      images: [
        {
          src: "/images/projects/print-evolved/orders/orders-1.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/orders/orders-2.png",
          alt: "Print Evolved",
        },
        {
          src: "/images/projects/print-evolved/orders/orders-3.png",
          alt: "Print Evolved",
        },
      ],
    },
  ],
};

export default function PortfolioPrint() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-zinc-900">
      <main>
        <PortfolioView project={project} />
      </main>

      <Footer />
    </div>
  );
}
