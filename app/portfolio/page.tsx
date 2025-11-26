import Image from "next/image";
import ProjectList from "./components/projectList";
import Footer from "@/components/footer";
import Text from "@/components/text";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-stone-900">
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

          <div className="mt-8 space-y-4">
            <Text as="p">
              I’m a design engineer with a focus on clear thinking, strong
              visual systems and shipping real products. I work end-to-end:
              research, UX architecture, UI design, prototyping, and front-end
              implementation in React, TypeScript and modern CSS.
            </Text>
            <Text as="p">
              I enjoy working in small, independent teams where designers own
              their process from concept to production.
            </Text>
          </div>

          <div className="mt-12">
            <ProjectList showHeader={true} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
