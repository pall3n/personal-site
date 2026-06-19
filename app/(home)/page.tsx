import Image from "next/image";
import Footer from "@/components/footer";

const about = [
  {
    headline: "Frontend Developer with Next.js Expertise:",
    body: "I specialise in building high-performance web applications using Next.js and modern JavaScript frameworks.",
  },
  {
    headline: "UI/UX Designer:",
    body: "I create intuitive, visually engaging interfaces that prioritise user experience.",
  },
  {
    headline: "Diverse Industry Experience:",
    body: "I’ve worked with startups, web3 projects, banks, and everything in between to deliver tailored solutions.",
  },
  {
    headline: "End-to-End Approach:",
    body: "Bridging development and design, I craft cohesive, seamless digital experiences.",
  },
  {
    headline: "Reliable and Professional:",
    body: "Committed to delivering high-quality work, on time, with clear communication.",
  },
];

const work = [
  "/images/work/image-1.png",
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
    <div className="bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-400 font-semibold">
      <main>
        <section className="py-16 px-8 max-w-[768px] mx-auto">
          <div className="flex flex-col">
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
            <div className="flex gap-5 lg:text-lg text-stone-500/70 dark:text-stone-400">
              <div className="text-stone-800 dark:text-stone-50">Design Engineer</div>
              <div className="">TypeScript</div>
              <div className="">Next.js</div>
              <div className="">Figma</div>
              <div className="">AI</div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 mt-20 sm:mt-32">
            <div className="flex flex-col gap-8 md:gap-12">
              <p
                className="text-2xl md:text-3xl lg:text-4xl !leading-normal"
              >
                I'm Patrick Allen, I design and build, which means no handoff, no "waiting on dev", and nothing lost in translation. Whether that's a focused Build Week or something longer, I work fast and deliver something real.
              </p>

              <p
                className="text-2xl md:text-3xl lg:text-4xl !leading-normal"
              >
                Building a great product takes more than design and code. Research. The right problem. A solution that fits. Performance that holds. And the bit of joy that brings people back.
              </p>

              <p
                className="text-2xl md:text-3xl lg:text-4xl !leading-normal"
              >
                Pulling all of that together pulls a small team off its roadmap. That's where I come in. I work in your team, or beside it, and own a piece of it end to end, so the rest of you keep shipping.
              </p>

              {/* <p
                className="text-2xl md:text-3xl lg:text-4xl !leading-normal"
              >
                I move fast, and I treat design as problem solving, not decoration.
              </p> */}

              <p className="text-2xl md:text-3xl lg:text-4xl !leading-normal text-stone-500/70 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">Recently.</span> Building internal platforms running key parts of a £20m+ business, and pontus.fm, my own product.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 px-2 md:px-3">
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

        <section className="py-16 px-8 max-w-screen-sm mx-auto">
          <h2 className="text-2xl text-stone-800 dark:text-stone-50">
            Pricing
          </h2>

          {/* <div className="flex flex-col gap-8 md:gap-10 mt-4 sm:mt-6">
            {pricing.map((item, index) => (
              <div key={index}>
                <div className=" lg:text-lg- lg:leading-snug- text-stone-500 dark:text-stone-400">
                  <span className="text-stone-800 dark:text-stone-50 font-medium">
                    {item.headline}&nbsp;
                  </span>
                  {item.body}
                </div>

                <div className="text-stone-800 dark:text-stone-50 font-medium mt-2">
                  {item.price}
                </div>
              </div>
            ))}
          </div> */}

          <div className="flex flex-col gap-8 md:gap-10 mt-4 sm:mt-6">
            <div className="flex flex-col gap-4 md:gap-6 lg:text-lg lg:leading-snug-">
              <div className="text-stone-500 dark:text-stone-400">
                <span className="text-stone-800 dark:text-stone-50">
                  Build Week:&nbsp;
                </span>
                You probably know exactly what the problem is. The flow that confuses users. The page that never converted. The feature that shipped but never quite landed.
              </div>

              <div className="text-stone-500 dark:text-stone-400">
                I take one focused problem, design the solution and build it — in a single week. No lengthy project, no slow back-and-forth. And because I design and build, nothing gets lost in handoff. You end the week with something working, not something waiting.
              </div>

              <div className="flex flex-col gap-2  text-stone-500 dark:text-stone-400">
                <div className="text-stone-800 dark:text-stone-50">
                  This works well if you're:
                </div>
                <ul className="list-disc list-inside- ml-6 space-y-2 marker:text-stone-300 dark:marker:text-stone-500">
                  <li>
                    Sitting on a UX problem you keep de-prioritising
                  </li>
                  <li>
                    Not happy with something AI shipped and nobody knows how to improve
                  </li>
                  <li>
                    A growing product where the experience hasn't kept up with the features
                  </li>
                  <li>A founder or small team that needs to move fast</li>
                </ul>
              </div>

              <div className="text-stone-800 dark:text-stone-50 mt-2">
                From £2,500 +VAT
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <a
              href="https://calendly.com/heypatrick/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 hover:border-indigo-300 hover:text-indigo-800 hover:dark:text-indigo-100 transition-all duration-300 px-5 py-3 rounded-md"
            >
              Request a Discovery Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
