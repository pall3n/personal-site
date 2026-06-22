import Image from "next/image";
import ProjectList from "./components/projectList";
import Footer from "@/components/footer";
import Text from "@/components/text";
import Skills from "@/components/skills";
import CTAFooter from "@/components/ctaFooter";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-stone-900 font-semibold">
      <main>
        <section className="py-16 px-8 max-w-[920px] mx-auto">
          <Skills />

          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20 mt-20 md:mt-30 lg:mt-40">
            <Text as="p" type="heading">
              I’m Patrick <img src="/images/avatar.jpg" alt="Patrick Allen" className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-full inline-block" />, a design engineer with a focus on user focused design, strong
              visual systems and shipping real products. I work end-to-end:
              research, UX architecture, UI design, prototyping, and front-end
              eng.
            </Text>
            <Text as="p" type="subheading" className="text-stone-500/70 dark:text-stone-400">
              I enjoy working in small, independent teams where designers own
              their process from concept to production.
            </Text>
          </div>

          <div id="leverage" className="flex flex-col gap-6 border-t-4 border-stone-100/60 dark:border-stone-700 py-16 md:py-20 lg:py-24 my-16 md:my-20 lg:my-24">
            <Text as="p" type="heading">
              Recent Work.
            </Text>

            <ProjectList showHeader={false} />
          </div>
        </section>
      </main>

      <CTAFooter targetId="work" />
      <Footer />
    </div>
  );
}
