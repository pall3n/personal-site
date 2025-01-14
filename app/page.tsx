import Image from "next/image";

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
    price: "£400 +VAT per day.",
  },
  {
    headline: "Fixed Price:",
    body: "For projects with clear scope of work, and clearly defined timeline a fixed price project can make sense.",
    price: "From £2,000 +VAT.",
  },
];

export default function Home() {
  return (
    <div className="">
      <main>
        <section className="py-16 px-8 max-w-screen-sm mx-auto">
          <div className="flex flex-col">
            <Image
              src="/images/avatar.jpg"
              alt="Patrick Allen"
              width={84}
              height={84}
              className="rounded-full"
            />
            <h1 className="text-2xl font-bold text-zinc-800 mt-4">
              Patrick Allen
            </h1>
            <div className="lg:text-lg text-zinc-500">
              Senior Frontend Developer and UI Designer.
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 mt-6 sm:mt-8">
            {about.map((item, index) => (
              <div
                key={index}
                className=" lg:text-lg lg:leading-snug text-zinc-500"
              >
                <span className="text-zinc-800 font-medium">
                  {item.headline}&nbsp;
                </span>
                {item.body}
              </div>
            ))}
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
          <h2 className="text-2xl font-bold text-zinc-800">Pricing</h2>

          <div className="flex flex-col gap-8 md:gap-10 mt-4 sm:mt-6">
            {pricing.map((item, index) => (
              <div key={index}>
                <div className=" lg:text-lg lg:leading-snug text-zinc-500">
                  <span className="text-zinc-800 font-medium">
                    {item.headline}&nbsp;
                  </span>
                  {item.body}
                </div>

                <div className="text-zinc-800 font-medium mt-2">
                  {item.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-12">
            <a
              href="https://calendly.com/heypatrick/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 font-bold border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-300 hover:text-indigo-800 transition-all duration-300 px-5 py-3 rounded-md"
            >
              Request a Discovery Call
            </a>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-4 sm:py-6 px-8 mt-6 md:mt-12 border-t border-zinc-200">
        <div className="text-sm text-zinc-500">
          Copyright © {new Date().getFullYear()} Patrick Allen. All rights
          reserved.
        </div>

        <a
          href="https://www.x.com/patrickallenxyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_15_4)">
              <path
                d="M10.7142 7.62262L17.4162 0H15.8286L10.0068 6.61726L5.3604 0H0L7.0278 10.0074L0 17.9999H1.5876L7.7316 11.0104L12.6396 17.9999H18M2.1606 1.17142H4.5996L15.8274 16.8861H13.3878"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_15_4">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </footer>
    </div>
  );
}
