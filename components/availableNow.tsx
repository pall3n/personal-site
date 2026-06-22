"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";

export default function AvailableNow() {
   const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

   return (
      <>
         <button
            onClick={() => setIsCalendlyOpen(true)}
            className="hidden md:flex items-center gap-2 cursor-pointer"
         >
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block"></span>
            Available Now
         </button>

         {isCalendlyOpen && (
            <PopupModal
               url="https://calendly.com/heypatrick/30min"
               onModalClose={() => setIsCalendlyOpen(false)}
               open={isCalendlyOpen}
               rootElement={document.body}
            />
         )}
      </>
   );
}
