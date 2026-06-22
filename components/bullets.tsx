export default function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside- ml-6 space-y-3 md:space-y-4 marker:text-stone-300 dark:marker:text-stone-500">
      {items.map((item, index) => (
        <li key={index} className="text-stone-500/70 dark:text-stone-400 text-md md:text-lg lg:text-xl !leading-normal tracking-tighter font-semibold">
          {item}
        </li>
      ))}
    </ul>
  );
}
