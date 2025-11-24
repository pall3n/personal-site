import ProjectList from "./projectList";

export default function PortfolioViewFooter() {
  return (
    <div className="mt-16 md:mt-24 lg:mt-32 pt-12 px-8 mx-auto border-t border-stone-100 dark:border-stone-800">
      <div className="max-w-screen-sm mx-auto px-6">
        <ProjectList />
      </div>
    </div>
  );
}
