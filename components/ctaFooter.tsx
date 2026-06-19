"use client";

import { useEffect, useState } from "react";
import { FileVideoCameraIcon } from "lucide-react";

export default function CTAFooter() {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const target = document.getElementById("leverage");
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
            className={`inline-block rounded-full p-1.5 bg-stone-50/50 dark:bg-stone-800/50 backdrop-blur-sm shadow-lg shadow-stone-200/70 dark:shadow-stone-800`}
         >
            <a
               href="https://calendly.com/heypatrick/30min"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-4 pointer-events-auto text-indigo-700 dark:text-indigo-100 border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-800 hover:border-indigo-300 hover:text-indigo-800 hover:dark:text-indigo-100 transition-all duration-300 px-5 py-3 rounded-full"
            >
               Book a Discovery Call
               <FileVideoCameraIcon className="w-5 h-5" />
            </a>
         </div>
      </div>
   );
}
