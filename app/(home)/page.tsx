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
    <div className="bg-white dark:bg-stone-900">
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
            <h1 className="text-3xl font-bold text-stone-800 dark:text-stone-50 mt-4">
              Patrick Allen
            </h1>
            <div className="lg:text-xl mt-1 text-stone-500 dark:text-stone-400">
              Senior Frontend Developer and UI Designer.
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 mt-6 sm:mt-8">
            {about.map((item, index) => (
              <div
                key={index}
                className=" lg:text-lg- lg:leading-snug- text-stone-500 dark:text-stone-400"
              >
                <span className="text-stone-800 dark:text-stone-50 font-medium">
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
          <h2 className="text-2xl font-bold text-stone-800 dark:text-stone-50">
            Pricing
          </h2>

          <div className="flex flex-col gap-8 md:gap-10 mt-4 sm:mt-6">
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
          </div>

          <div className="mt-8 md:mt-12">
            <a
              href="https://calendly.com/heypatrick/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 dark:text-indigo-100 font-bold border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 hover:border-indigo-300 hover:text-indigo-800 hover:dark:text-indigo-100 transition-all duration-300 px-5 py-3 rounded-md"
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
