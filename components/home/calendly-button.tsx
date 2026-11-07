"use client";

import { useState, type ReactNode, type ButtonHTMLAttributes } from "react";
import { PopupModal } from "react-calendly";

const CALENDLY_URL = "https://calendly.com/heypatrick/30min";

type CalendlyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function CalendlyButton({
  children,
  className,
  ...props
}: CalendlyButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        {...props}
      >
        {children}
      </button>
      {open && (
        <PopupModal
          url={CALENDLY_URL}
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={document.body}
        />
      )}
    </>
  );
}
