"use client";

import { useEffect, useState } from "react";
import { FileVideoCameraIcon } from "lucide-react";

export default function CTAFooter({ targetId }: { targetId: string }) {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const target = document.getElementById(targetId);
      if (!target) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true);
            } else if (entry.boundingClientRect.top > 0) {
               setVisible(false);
            }
         },
         { threshold: 0.5 }
      );

      observer.observe(target);
      return () => observer.disconnect();
   }, []);

   return (
      <div
         className={`fixed bottom-3 md:bottom-4 left-0 inline-block right-0 z-50 transition-all duration-300 text-center pointer-events-none ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
      >
         <div
            className={`inline-block rounded-full p-2 bg-stone-50/50 dark:bg-stone-800/50 backdrop-blur-sm shadow-lg- shadow-stone-200/70 dark:shadow-stone-800`}
         >
            <a
               href="https://calendly.com/heypatrick/30min"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 pointer-events-auto font-bold text-indigo-50 dark:text-indigo-900 border border-indigo-700 dark:border-indigo-50 bg-indigo-700 dark:bg-indigo-50 hover:bg-indigo-600 dark:hover:bg-indigo-100 hover:border-indigo-300 hover:-rotate-1 transition-all duration-300 px-5 py-3 rounded-full"
            >
               <FileVideoCameraIcon className="w-6 h-6" /> Book a Discovery Call

            </a>
         </div>
      </div>
   );
}
