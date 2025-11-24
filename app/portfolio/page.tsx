import ProjectList from "./components/projectList";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-stone-900">
      <main>
        <section className="py-16 px-8 max-w-screen-sm mx-auto">
          <ProjectList showHeader={true} />
        </section>
      </main>

      <Footer />
    </div>
  );
}
