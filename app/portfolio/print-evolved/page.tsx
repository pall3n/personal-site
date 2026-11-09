import type { Metadata } from "next";
import CaseStudyShell from "@/components/portfolio/case-study-shell";
import CaseHero from "@/components/portfolio/case-hero";
import CaseSection from "@/components/portfolio/case-section";
import NextProjects from "@/components/portfolio/next-projects";

export const metadata: Metadata = {
  title: "Print Evolved | Patrick Allen",
  description:
    "Designing and building internal production tools to streamline high-volume print operations.",
};

const snapshot = [
  { label: "Company", copy: "Print Evolved (B2B print and fulfilment)" },
  { label: "Timeline", copy: "2024 – ongoing" },
  { label: "Role", copy: "Product Designer & Front-End Engineer" },
  { label: "Team", copy: "Me + backend engineer & operations manager" },
  { label: "My contribution", copy: "UX, UI, design system, front-end implementation" },
];

export default function PortfolioPrintEvolved() {
  return (
    <CaseStudyShell>
      <CaseHero
        title="Print Evolved — Internal Production Tools"
        subtitle="Designing and building multiple web apps to streamline high-volume print operations."
        snapshot={snapshot}
      />

      <CaseSection
        id="overview"
        label="01"
        title="Overview"
        caption="Screens from the SKU creation wizard."
        carousel={[
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
        ]}
      >
        <p>
          Print Evolved relied on several ageing internal systems that split logic across
          multiple tools. Operators had to jump between interfaces depending on the
          customer, carrier or product — creating confusion, inconsistent data and frequent
          batching/dispatch errors.
        </p>
        <p>
          I redesigned and rebuilt the internal platform as three modern, responsive apps
          with clear responsibilities:
        </p>
        <ul>
          <li>Production → batching, conflict handling, printing, packing, dispatch</li>
          <li>Print → SKU creation, order management, customer rules, invoicing</li>
          <li>Admin → user management, role based access, shared configuration</li>
        </ul>
        <p>
          My role covered end-to-end UX, UI, prototyping, design systems and React/Next.js
          implementation.
        </p>
      </CaseSection>

      <CaseSection
        id="problem"
        label="02"
        title="Problem"
        caption="Orders list and batch invoice creation screens."
        grid={[
          {
            src: "/images/projects/print-evolved/orders/orders-1.png",
            alt: "Orders list",
            span2: true,
          },
          {
            src: "/images/projects/print-evolved/orders/orders-2.png",
            alt: "Batch create invoices",
          },
          {
            src: "/images/projects/print-evolved/orders/orders-3.png",
            alt: "Batch create invoices — preview invoices",
          },
        ]}
      >
        <p>
          Legacy systems had grown fragmented over time. Different parts of the workflow
          lived in different tools, meaning:
        </p>
        <ul>
          <li>Operators had to memorise exceptions and routing rules</li>
          <li>Dispatch flows changed depending on which system a job came from</li>
          <li>Data was duplicated or inconsistent</li>
          <li>Training new staff took too long</li>
          <li>Errors during batching and dispatch were common</li>
        </ul>
        <p>
          Teams needed a single, predictable workflow and a modern UI that matched how they
          actually work.
        </p>
      </CaseSection>

      <CaseSection
        id="approach"
        label="03"
        title="Approach"
        caption="Invoices list and add credit overlay."
        grid={[
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
        ]}
      >
        <h3>1. Map real workflows</h3>
        <p>
          I shadowed operators on live jobs and mapped end-to-end journeys from a job
          entering the system, through batching and printing, to final dispatch. This helped
          me understand the core actions operators performed dozens of times a day (create
          batch, add/remove jobs, resolve conflicts, print paperwork) and the common points
          of friction.
        </p>
        <h3>2. Define a clear system boundary</h3>
        <p>Three apps with distinct responsibilities:</p>
        <ul>
          <li>Production = operational workflow</li>
          <li>Print = product, order and commercial logic</li>
          <li>Admin = user management, role based access, shared configuration</li>
        </ul>
        <p>This removed the need to jump between systems.</p>
        <h3>3. Design high-frequency flows</h3>
        <p>In Figma, I designed:</p>
        <ul>
          <li>Job selection &amp; filtering</li>
          <li>Manual batch creation</li>
          <li>Conflict detection &amp; resolution</li>
          <li>Dispatch steps</li>
          <li>SKU creation &amp; editing</li>
          <li>Order &amp; invoicing screens</li>
        </ul>
        <p>
          The focus was always on speed, clarity and reducing cognitive load.
        </p>
        <h3>4. Build a reusable component system</h3>
        <p>
          I created a shared design system used across both apps: tables, filters, batch
          cards, forms, status badges, modals. Implemented in React + Storybook.
        </p>
        <h3>5. Front-end implementation</h3>
        <p>
          Built the interfaces in Next.js, TypeScript and Tailwind, collaborating closely
          with backend engineers to ensure business logic and UI behaviour aligned.
        </p>
      </CaseSection>

      <CaseSection
        id="outcomes"
        label="04"
        title="Outcomes"
        caption="Batch creation and conflict resolution flows, including job selection, batch details and confirmation."
        carousel={[
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
        ]}
      >
        <ul>
          <li>Reduction in dispatch errors</li>
          <li>Operators now complete workflows inside one app, not three</li>
          <li>Faster onboarding and fewer mistakes</li>
          <li>A unified, modern UI for both production and commercial teams</li>
          <li>Reusable components accelerate future internal tools</li>
        </ul>
        <p>
          This reduced mis-batching and gave operators more confidence during peak cycles.
        </p>
      </CaseSection>

      <NextProjects currentSlug="print-evolved" />
    </CaseStudyShell>
  );
}
