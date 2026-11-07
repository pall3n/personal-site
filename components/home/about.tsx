import Image from "next/image";
import ArrowIcon from "./arrow-icon";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-h">
      <div className="about-side">
        <p className="label">About</p>
        <Image
          className="portrait"
          src="/images/avatar.jpg"
          alt="Patrick Allen"
          width={160}
          height={192}
          loading="lazy"
        />
      </div>
      <div className="about-main">
        <h2 id="about-h" className="h2">
          A designer&apos;s eye. An engineer&apos;s toolkit.
        </h2>
        <div className="stack">
          <p>I&apos;m Patrick, an independent product engineer based in the UK.</p>
          <p>
            I enjoy getting into the details of how products work. Understanding the people
            using them, figuring out where things get frustrating and finding ways to make
            the experience better.
          </p>
          <p>
            I&apos;m equally comfortable sketching out an improved user journey, working
            through an interaction in Figma or building it in the codebase.
          </p>
          <p>
            I work directly with the people behind the product. No account managers,
            unnecessary process or elaborate handoffs.
          </p>
        </div>
        <p className="tech">
          I work across product design and frontend engineering, mostly with{" "}
          <span>React · Next.js · TypeScript · Figma</span>
        </p>
        <aside className="studio" aria-labelledby="studio-h">
          <div>
            <p className="label">A note for studios</p>
            <h3 id="studio-h">Need an extra pair of hands?</h3>
            <p>
              I also work with small design and product studios that need experienced
              frontend support. From turning detailed designs into polished interfaces to
              helping with complex components, responsive layouts and interaction work.
            </p>
          </div>
          <a
            className="text-link"
            href="mailto:hey@patrickallen.xyz?subject=Studio%20support"
          >
            Ask about studio support
            <ArrowIcon size={14} />
          </a>
        </aside>
      </div>
    </section>
  );
}
