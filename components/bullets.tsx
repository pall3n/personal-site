export default function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside- ml-6 space-y-2 marker:text-stone-300 dark:marker:text-stone-500">
      {items.map((item, index) => (
        <li key={index} className="text-stone-500 dark:text-stone-400">
          {item}
        </li>
      ))}
    </ul>
  );
}
