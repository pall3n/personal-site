"use client";

import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { useState } from "react";

const items = [
   {
      q: "Who owns the work?",
      a: "You do. Day one. It's in your repo, your design files, under your licence, no strings.",
   },
   {
      q: "What kinds of engagement do you take?",
      a: "A 1 to 2 week sprint to ship one specific thing, a flow, a new feature, or embedded by the week. If you are not sure which? Book a call and we'll work it out.",
   },
   {
      q: "Do you work with people already on the team?",
      a: "Yes, often. I pair well. I can also work alone if that's what you need.",
   },
   {
      q: "What's your stack?",
      a: "TypeScript across Next.js, React, and React Native. Comfortable in most modern frontend stacks and design systems.",
   },
];

export default function FAQ() {
   const [open, setOpen] = useState<number | null>(null);
   const toggle = (index: number) => {
      setOpen(open === index ? null : index);
   };

   return (
      <div className="flex flex-col md:gap-12 gap-8">
         {items.map((item, index) => (
            <div key={index} className="group" onClick={() => toggle(index)}>
               <div className=" flex gap-2 md:gap-4 text-xl md:text-3xl lg:text-4xl !leading-normal tracking-tighter py-1">
                  <span className=" group-hover:text-stone-500/70 group-hover-dark:text-stone-400 transition-all duration-300 block mt-1 md:mt-2">{open === index ? <CircleMinusIcon className="w-6 h-6 md:w-9 md:h-9" /> : <CirclePlusIcon className="w-6 h-6 md:w-9 md:h-9" />}</span>{item.q}
               </div>
               <p className={`text-xl md:text-3xl lg:text-4xl !leading-normal tracking-tighter text-stone-500/70 dark:text-stone-400 ${open === index ? 'block' : 'hidden'}`}>
                  {item.a}
               </p>
            </div>
         ))}
      </div>
   );
}