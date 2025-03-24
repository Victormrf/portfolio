"use client";

import { useRef, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
} from "@floating-ui/react";
import Portal from "./Portal";
import MenuIcon from "./MenuIcon";

// Dropdown component
const Dropdown = ({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-start",
    middleware: [offset(5), flip(), shift()],
    elements: {
      reference: buttonRef.current,
    },
    whileElementsMounted: autoUpdate,
  });

  return (
    <div className="mb-4 relative">
      {" "}
      {/* Add relative positioning */}
      <button
        ref={refs.setReference}
        className="w-full p-4 text-2xl font-bold text-center text-teal-800 dark:text-teal-500 border-b-2 border-teal-800 dark:border-teal-500 rounded-t-lg flex items-center justify-center gap-2"
        onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown visibility
        aria-expanded={isOpen}
      >
        {tabs.find((tab) => tab.id === activeTab)?.label}
        {/* Dropdown icon */}
        <MenuIcon
          className={`w-6 h-6 transition-colors duration-200 ${
            isOpen ? "text-teal-600" : "text-teal-800 dark:text-teal-500"
          }`}
        />
      </button>
      {/* Render dropdown menu */}
      {isOpen && (
        <Portal>
          <ul
            ref={refs.setFloating} // Attach ref for floating positioning
            style={floatingStyles} // Apply dynamic styles
            className="mt-2 border border-gray-200 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 absolute z-50 w-full shadow-lg overflow-visible"
          >
            {" "}
            {/* Add absolute positioning, z-index, background, and overflow-visible */}
            {tabs.map((tab) => (
              <li key={tab.id} role="presentation">
                <button
                  className={`w-full p-4 text-left text-gray-300 dark:text-zinc-600 hover:text-teal-600 dark:hover:text-teal-100 ${
                    activeTab === tab.id
                      ? "text-teal-800 dark:text-teal-500"
                      : ""
                  }`}
                  onClick={() => {
                    onTabChange(tab.id); // Change tab
                    setIsOpen(false); // Close dropdown
                  }}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </Portal>
      )}
    </div>
  );
};

export default Dropdown;
