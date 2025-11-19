export default function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside- ml-6 space-y-2 marker:text-zinc-300 dark:marker:text-zinc-500">
      {items.map((item, index) => (
        <li key={index} className="text-lg text-zinc-500 dark:text-zinc-400">
          {item}
        </li>
      ))}
    </ul>
  );
}
