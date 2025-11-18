import PortfolioView from "../components/portfolioView";
import Footer from "@/components/footer";
import PortfolioViewHeader from "../components/portfolioViewHeader";
import PortfolioViewSection from "../components/portfolioViewSection";
import PortfolioViewFooter from "../components/portfolioViewFooter";
import Text from "@/components/text";
import Bullets from "@/components/bullets";

const project = {
  title: "Print Evolved - Internal Production Tools",
  subtitle:
    "Designing and building multiple web apps to streamline high-volume print operations.",

  snapshot: [
    {
      label: "Role:",
      copy: "Product Designer & Front-End Engineer",
    },
    {
      label: "Company:",
      copy: "Print Evolved (B2B print and fulfilment)",
    },
    {
      label: "Timeline:",
      copy: "2024 – ongoing",
    },
    {
      label: "Team:",
      copy: "Designer & frontend engineer (me), backend engineer, operations manager",
    },
    {
      label: "My contribution:",
      copy: "UX, UI, design system, front-end implementation",
    },
  ],

  sections: [
    {
      title: "About",
      content: [
        "A responsive web app for internal print operations teams to manage production workflows, batching and dispatch. I led design and front-end implementation from initial user journeys through to shipped UI and reusable components.",
        "The goal was to replace ad-hoc spreadsheets and email threads with a single, reliable interface where operators could create batches, resolve conflicts and track jobs in real time.",
      ],
      images: [
        {
          src: "/images/projects/print-evolved/sku/SKU-step-1.png",
          alt: "SKU creation wizard step 1",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-2.png",
          alt: "SKU creation wizard step 2",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-3.png",
          alt: "SKU creation wizard step 3",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-4.png",
          alt: "SKU creation wizard step 4",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-5.png",
          alt: "SKU creation wizard step 5",
        },
        {
          src: "/images/projects/print-evolved/sku/SKU-step-6.png",
          alt: "SKU creation wizard step 6",
        },
      ],
      caption:
        "Screens from the batch creation and conflict resolution flows, including job selection, batch details and confirmation steps.",
    },

    {
      title: "Problem",
      content: [
        "The original process for managing production and dispatch was spread across multiple older systems. This meant:",
        "- Operators had to constantly context-switch between tools",
        "- Jobs were easy to miss or duplicate",
        "- There was no single view of what was in a batch or where it was in the process",

        "As volume increased, this led to avoidable errors, late batches and a lot of stress for the operations team.",
      ],
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

      caption: "",
    },

    {
      title: "Process",
      content: [
        "I started by shadowing operators on live jobs and mapping end-to-end journeys: from a job entering the system, through batching and printing, to final dispatch. We identified the core actions operators performed dozens of times a day (create batch, add/remove jobs, resolve conflicts, print paperwork) and the common points of friction.",
        "From there, I sketched and prototyped the core flows in Figma, with a particular focus on:",
        "- Manual batch creation (grouping jobs by destination, due date or production constraints)",
        "- Conflict handling (when a job doesn’t fit a batch or has missing data)",
        "- Dispatch and handover (clear status of what’s printed, packed and shipped)",
        "We iterated these flows with the operations team to make sure the interface matched their mental model rather than forcing them to adapt to the tool.",

        "Once the flows were validated, I formalised the UI into a small design system: table patterns, filters, batch cards, confirmation modals and status indicators. I implemented these as React components, documented in Storybook, so we could reuse them across new tools as the product expanded.",

        "I implemented the frontend using Next.js, TypeScript and modern CSS, working closely with backend engineers to integrate APIs and handle edge cases. We refined the UI based on feedback from real-world usage, especially around error states and conflicts.",
      ],
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
      title: "Results",
      content: [
        "Reduction in dispatch errors reported by the operations team.",
        "A modern, single interface replacing duplicate systems for batching, printing and dispatch.",
        "The UI components became the foundation for future internal tools, improving consistency and speed of development.",

        "Designing for internal tools is as much about reducing cognitive load as it is about features. Spending time on edge cases, empty states and conflict handling early on led to a smoother rollout and fewer surprises in production.",
      ],
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
        {/* <PortfolioView project={project} /> */}
        <section className="py-8 px-8">
          <PortfolioViewHeader
            title={project.title}
            subtitle={project.subtitle}
            snapshot={project.snapshot}
          />

          <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 mt-6 md:mt-10 lg:mt-12 sm:mt-8">
            {/* Section About */}
            <PortfolioViewSection
              title={project.sections[0]?.title || ""}
              images={project.sections[0]?.images || []}
              caption={project.sections[0]?.caption || ""}
            >
              {project.sections[0]?.content.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </PortfolioViewSection>

            {/* Section Problem */}
            <PortfolioViewSection
              title="Problem"
              images={project.sections[1]?.images || []}
              caption={project.sections[1]?.caption || ""}
            >
              <Text>
                The original process for managing production and dispatch was
                spread across multiple older systems. This meant:
              </Text>

              <Bullets
                items={[
                  "Operators had to constantly context-switch between tools",
                  "Jobs were easy to miss or duplicate",
                  "There was no single view of what was in a batch or where it was in the process",
                  "As volume increased, this led to avoidable errors, late batches and a lot of stress for the operations team.",
                ]}
              />
            </PortfolioViewSection>

            {/* Section Process */}
            <PortfolioViewSection
              title={project.sections[2]?.title || ""}
              images={project.sections[2]?.images || []}
              caption={project.sections[2]?.caption || ""}
            >
              {project.sections[2]?.content.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </PortfolioViewSection>

            {/* Section Results */}
            <PortfolioViewSection
              title={project.sections[3]?.title || ""}
              images={project.sections[3]?.images || []}
              caption={project.sections[3]?.caption || ""}
            >
              {project.sections[3]?.content.map((item, index) => (
                <Text key={index}>{item}</Text>
              ))}
            </PortfolioViewSection>
          </div>

          <PortfolioViewFooter />
        </section>
      </main>

      <Footer />
    </div>
  );
}
