import PortfolioViewHeader from "../components/portfolioViewHeader";
import PortfolioViewSection from "../components/portfolioViewSection";
import PortfolioViewFooter from "../components/portfolioViewFooter";
import Text from "@/components/text";
import Bullets from "@/components/bullets";
import Footer from "@/components/footer";
import CTAFooter from "@/components/ctaFooter";

const project = {
  title: "Print Evolved - Internal Production Tools",
  subtitle:
    "Designing and building multiple web apps to streamline high-volume print operations.",
  image: "/images/projects/print-evolved/preview.png",

  snapshot: [
    {
      label: "Company",
      copy: "Print Evolved (B2B print and fulfilment)",
    },
    {
      label: "Timeline",
      copy: "2024 – ongoing",
    },
    {
      label: "Role",
      copy: "Product Designer & Front-End Engineer",
    },
    {
      label: "Team",
      copy: "Me + backend engineer & operations manager",
    },
    {
      label: "My contribution",
      copy: "UX, UI, design system, front-end implementation",
    },
  ],

  sections: [
    {
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
    },

    {
      images: [
        {
          src: "/images/projects/print-evolved/orders/orders-1.png",
          alt: "Orders list",
          className: "col-span-2",
        },
        {
          src: "/images/projects/print-evolved/orders/orders-2.png",
          alt: "Batch create invoices",
        },
        {
          src: "/images/projects/print-evolved/orders/orders-3.png",
          alt: "Batch create invoices - preview invoices",
        },
      ],
    },

    {
      images: [
        {
          src: "/images/projects/print-evolved/invoice/invoices-01.png",
          alt: "Invoices list",
        },
        {
          src: "/images/projects/print-evolved/invoice/invoices-02.png",
          alt: "Add credit overlay",
        },
        {
          src: "/images/projects/print-evolved/invoice/invoices-03.png",
          alt: "Send invoice popover",
        },
        {
          src: "/images/projects/print-evolved/invoice/invoices-04.png",
          alt: "Paid invoice",
        },
      ],
    },

    {
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
  ],
};

export default function PortfolioPrint() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-stone-900">
      <main>
        {/* <PortfolioView project={project} /> */}
        <section className="py-16 px-8">
          <PortfolioViewHeader
            title={project.title}
            subtitle={project.subtitle}
            snapshot={project.snapshot}
            image={project.image}
          />

          <div className="flex flex-col gap-24 md:gap-32 lg:gap-48 mt-20 md:mt-30 lg:mt-40">
            {/* Section About */}
            <PortfolioViewSection
              id="overview"
              title="Overview"
              images={project.sections[0]?.images || []}
              caption="Screens from the SKU creation wizard."
            >
              <Text>
                Print Evolved relied on several ageing internal systems that
                split logic across multiple tools. Operators had to jump between
                interfaces depending on the customer, carrier or product —
                creating confusion, inconsistent data and frequent
                batching/dispatch errors.
              </Text>

              {/* <div className="space-y-3"> */}
              <Text>
                I redesigned and rebuilt the internal platform as three modern,
                responsive apps with clear responsibilities:
              </Text>

              <Bullets
                items={[
                  "Production → batching, conflict handling, printing, packing, dispatch",
                  "Print → SKU creation, order management, customer rules, invoicing",
                  "Admin → user management, role based access, shared configuration",
                ]}
              />
              {/* </div> */}

              <Text>
                My role covered end-to-end UX, UI, prototyping, design systems
                and React/Next.js implementation.
              </Text>
            </PortfolioViewSection>

            {/* Section Problem */}
            <PortfolioViewSection
              id="problem"
              title="Problem"
              imageGrid={project.sections[1]?.images || []}
              caption="Screens from the orders list with and batch invoice creation."
            >
              {/* <div className="space-y-3"> */}
              <Text>
                Legacy systems had grown fragmented over time. Different parts
                of the workflow lived in different tools, meaning:
              </Text>

              <Bullets
                items={[
                  "Operators had to memorise exceptions and routing rules",
                  "Dispatch flows changed depending on which system a job came from",
                  "Data was duplicated or inconsistent",
                  "Training new staff took too long",
                  "Errors during batching and dispatch were common",
                ]}
              />
              {/* </div> */}

              <Text>
                Teams needed a single, predictable workflow and a modern UI that
                matched how they actually work.
              </Text>
            </PortfolioViewSection>

            {/* Section Process */}
            <PortfolioViewSection
              title="Approach"
              imageGrid={project.sections[2]?.images || []}
              caption="Invoices list with and add credit overlay."
            >
              <Text as="h3">1. Map real workflows</Text>
              <Text>
                I shadowed operators on live jobs and mapped end-to-end journeys
                from a job entering the system, through batching and printing,
                to final dispatch. This helped me understand the core actions
                operators performed dozens of times a day (create batch,
                add/remove jobs, resolve conflicts, print paperwork) and the
                common points of friction.
              </Text>

              <Text as="h3">2. Define a clear system boundary</Text>
              <Text>Three apps with distinct responsibilities:</Text>
              <Bullets
                items={[
                  "Production = operational workflow",
                  "Print = product, order and commercial logic",
                  "Admin = user management, role based access, shared configuration",
                ]}
              />
              <Text>This removed the need to jump between systems.</Text>

              <Text as="h3">3. Design high-frequency flows</Text>
              <Text>In Figma, I designed:</Text>
              <Bullets
                items={[
                  "Job selection & filtering",
                  "Manual batch creation",
                  "Conflict detection & resolution",
                  "Dispatch steps",
                  "SKU creation & editing",
                  "Order & invoicing screens",
                ]}
              />
              <Text>
                The focus was always on speed, clarity and reducing cognitive
                load.
              </Text>

              <Text as="h3">4. Build a reusable component system</Text>
              <Text>
                I created a shared design system used across both apps: tables,
                filters, batch cards, forms, status badges, modals. Implemented
                in React + Storybook.
              </Text>

              <Text as="h3">5. Front-end implementation</Text>
              <Text>
                Built the interfaces in Next.js, TypeScript and Tailwind,
                collaborating closely with backend engineers to ensure business
                logic and UI behaviour aligned.
              </Text>
            </PortfolioViewSection>

            <PortfolioViewSection
              title="Outcomes"
              images={project.sections[3]?.images || []}
              caption="Screens from the batch creation and conflict resolution flows, including job selection, batch details and confirmation steps."
            >
              <Bullets
                items={[
                  "Reduction in dispatch errors",
                  "Operators now complete workflows inside one app, not three",
                  "Faster onboarding and fewer mistakes",
                  "A unified, modern UI for both production and commercial teams",
                  "Reusable components accelerate future internal tools",
                ]}
              ></Bullets>
              <Text>
                This reduced mis-batching and gave operators more confidence
                during peak cycles.
              </Text>
            </PortfolioViewSection>
          </div>

          <PortfolioViewFooter hideProjectIndex={0} inline={true} />
        </section>
      </main>

      <CTAFooter targetId="overview" />
      <Footer />
    </div>
  );
}
