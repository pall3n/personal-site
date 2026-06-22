import Image from "next/image";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import CTAFooter from "@/components/ctaFooter";
import Text from "@/components/text";
import Skills from "@/components/skills";
import AvailableNow from "@/components/availableNow";


const work = [
  "/images/projects/print-evolved/preview.png",
  "/images/work/image-2.png",
  "/images/work/image-3.png",
  "/images/work/image-4.png",
  "/images/work/image-5.png",
  "/images/work/image-6.png",
];

const pricing = [
  {
    headline: "Day Rate / Monthly Retainer:",
    body: "For projects where the scope is loosely defined or if you are looking for an ongoing monthly contractor this could make the most sense.",
    price: "£450 +VAT per day.",
  },
  {
    headline: "Fixed Price:",
    body: "For projects with clear scope of work, and clearly defined timeline a fixed price project can make sense.",
    price: "From £2,000 +VAT.",
  },
];

export default function Home() {
  return (
    <div className="bg-stone-50/50 dark:bg-stone-800 text-stone-800 dark:text-stone-400 font-semibold">
      <main>
        <section className="py-16 px-8 max-w-[920px] mx-auto">
          <div className="flex  justify-between">
            {/* <Image
              src="/images/avatar.jpg"
              alt="Patrick Allen"
              width={84}
              height={84}
              className="rounded-full"
            /> */}
            {/* <h1 className="text-4xl text-stone-800 dark:text-stone-50 mt-4">
              Patrick Allen <span className="font-normal- text-stone-500/80 dark:text-stone-400">
                Design Engineer
              </span>
            </h1> */}
            {/* <div className="lg:text-xl mt-1 text-stone-500 dark:text-stone-400">
              Senior Frontend Developer and UI Designer.
            </div> */}
            {/* <div className="flex gap-3 md:gap-5 text-[13px] md:text-md lg:text-lg font-bold text-stone-500/70 dark:text-stone-400">
              <div className="text-stone-800 dark:text-stone-50">Design Engineer</div>
              <div className="">TypeScript</div>
              <div className="">Next.js</div>
              <div className="">Figma</div>
              <div className="">AI</div>
            </div> */}
            <Skills />

            <AvailableNow />
          </div>

          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 mt-20 md:mt-30 lg:mt-40">
            {/* <p
              className="text-2xl md:text-4xl lg:text-5xl !leading-normal tracking-tighter"
            >
              I'm Patrick Allen, for a decade I've designed and built delightful products in small teams.
            </p> */}
            <Text as="p" type="heading">I'm Patrick <img src="/images/avatar.jpg" alt="Patrick Allen" className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full inline-block" />, for a decade I've designed and built delightful products in small teams.</Text>

            <Text as="p" type="heading">
              Building a great product takes more than design and code. Research. The right problem. A solution that fits. Performance that holds. And the bit of joy that brings people back.
            </Text>

            <Text as="p" type="heading">
              Pulling all of that together pulls a small team off its roadmap. That's where I come in. I work in your team, or beside it, and own a piece of it end to end, so the rest of you keep focus.
            </Text>

            {/* <p
                className="text-2xl md:text-4xl lg:text-5xl !leading-normal tracking-tighter"
              >
                I move fast, and I treat design as problem solving, not decoration.
              </p> */}

            <div id="leverage" className="flex flex-col gap-6 border-y-4 border-stone-100/60 dark:border-stone-700 py-16 md:py-20 lg:py-24 my-6 md:my-8 lg:my-10">
              <Text as="p" type="heading">
                Leverage.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 lg:text-xl !leading-normal">
                <div className="">
                  <Text as="h3" type="copy">AI-paired, human-owned.</Text>
                  <Text as="p" type="copy" colour="text-stone-500/70 dark:text-stone-400">Claude drafts, I review and edit. That's 2 to 3x output without the slop, and every line of code gets read by me before it gets committed.</Text>
                </div>
                <div className="">
                  <Text as="h3" type="copy">Design and build in one brain.</Text>
                  <Text as="p" type="copy" colour="text-stone-500/70 dark:text-stone-400">No Figma-to-Jira tax, no handoff meetings, no "that's not quite what I meant." The person making the pixel decisions is the person writing the JSX.</Text>
                </div>
              </div>
            </div>

            <Text as="p" type="heading" colour="text-stone-500/70 dark:text-stone-400">
              <span className="text-stone-800 dark:text-stone-50">Recently.</span> Building internal platforms running key parts of a £20m+ business, and <a href="https://pontus.fm" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-800 dark:hover:text-stone-50">pontus.fm</a>, my own product.
            </Text>
          </div>
        </section>

        <section className="max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 px-2 md:px-3 md:mt-4">
          {work.map((item, index) => (
            <div className="rounded-lg overflow-hidden" key={index}>
              <img
                src={item}
                alt="Work example"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </section>

        <section className="py-16 px-8 max-w-[920px] mx-auto">
          <div className="flex flex-col gap-10 md:gap-16 mt-20 md:mt-40">
            <Text as="p" type="heading">
              Working together. Two ways in. Shipped features either way.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
              <div className="">
                <Text as="h3" type="copy">Start with a sprint.</Text>
                <Text as="p" type="copy" colour="text-stone-500/70 dark:text-stone-400">Scoped deliverable. Simplest way to try working together.</Text>

                <dl className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-8">
                  <div className="flex gap-2">
                    <dt className="min-w-24">Scope</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">Agree what "done" looks like</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-24">Build</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">Heads-down, no distractions</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-24">Handoff</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">Your team owns everything</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-24">Price</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">From £2,750 +VAT</dd>
                  </div>
                </dl>
              </div>

              <div className="">
                <Text as="h3" type="copy">Embed for a stretch.</Text>
                <Text as="p" type="copy" colour="text-stone-500/70 dark:text-stone-400">An extra senior pair of hands on your roadmap.</Text>

                <dl className="flex flex-col gap-2 md:gap-3 mt-4 md:mt-8">
                  <div className="flex gap-2">
                    <dt className="min-w-24">Embed</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">Learn the team and the product</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-24">Ship</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">Weekly delivery, async-first</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-24">Handoff</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">Your team owns everything</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-24">Price</dt>
                    <dd className="text-stone-500/70 dark:text-stone-400">£450 +VAT per day.</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="flex flex-col gap-10 md:gap-12 border-y-4 border-stone-100/60 dark:border-stone-700 py-16 md:py-20 lg:py-20 my-6 md:my-8 lg:my-14">
              <Text as="p" type="heading">
                Right fit.
              </Text>

              <Text as="p" type="subheading" colour="text-stone-500/70 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">01.</span> You're a small software team shipping fast, and the "we'll get to it" backlog never gets got to.
              </Text>

              <Text as="p" type="subheading" colour="text-stone-500/70 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">02.</span> You've got a conversion or growth problem that's really a UX problem in disguise.
              </Text>

              <Text as="p" type="subheading" colour="text-stone-500/70 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">03.</span> You're in audio, podcasting, or creator tools and want someone who already knows the space.
              </Text>

              <Text as="p" type="subheading" colour="text-stone-500/70 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">04.</span> You need design and engineering in one brain, without a hire or an agency layer.
              </Text>

              <Text as="p" type="subheading" colour="text-stone-500/70 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">05.</span> You've got a specific feature or flow that needs to ship, not eventually.
              </Text>
            </div>

            <div className="flex flex-col gap-10 md:gap-12">
              <Text as="h3" type="heading">
                Questions.
              </Text>

              <FAQ />
            </div>
          </div>
        </section>
      </main >

      <CTAFooter targetId="leverage" />
      <Footer />
    </div >
  );
}
