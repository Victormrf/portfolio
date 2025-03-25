"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useInteractions,
} from "@floating-ui/react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PopoverProps {
  className?: string;
}

const Popover = ({ className }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "right",
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "start" }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="size-12 rounded-full flex items-center justify-center hover:text-teal-500 dark:hover:text-teal-400"
        aria-label="Change language"
        onMouseEnter={() => setIsOpen(true)}
      >
        <Languages className="size-4 text-teal-600 dark:text-teal-500" />
      </button>

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="z-50 min-w-[80px] bg-white/10 dark:bg-black/10 rounded-md border shadow-md border-teal-600/50 dark:border-teal-500/50 "
        >
          <div className="p-1 space-y-1">
            <button
              onClick={() => handleLanguageChange("en")}
              className={cn(
                "w-full text-center px-2 py-1 text-sm rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                i18n.language === "en" && "text-teal-600 dark:text-teal-500"
              )}
            >
              EN-US
            </button>
            <button
              onClick={() => handleLanguageChange("pt")}
              className={cn(
                "w-full text-center px-2 py-1 text-sm rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700",
                i18n.language === "pt" && "text-teal-600 dark:text-teal-500"
              )}
            >
              PT-BR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popover;
