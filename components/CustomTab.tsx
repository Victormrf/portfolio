"use client";

import { useEffect, useState } from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Dropdown from "./Dropdown";

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState<string>("projects"); // Explicitly define type
  const [isMobile, setIsMobile] = useState(false); // Initialize with a fallback value

  // Update isMobile state on window resize (client-side only)
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 5000);
      };

      // Set initial value
      handleResize();

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listener
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const tabs = [
    {
      id: "projects",
      label: "Projects",
      content: <Projects />,
    },
    {
      id: "experience",
      label: "Work Experience",
      content: <WorkExperience />,
    },
    {
      id: "education",
      label: "Education",
      content: <Education />,
    },
    {
      id: "contacts",
      label: "Contacts",
      content: <ContactMe />,
    },
  ];

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tabs for larger screens */}
      {!isMobile && (
        <div className="mb-4 border-b border-gray-200 dark:border-zinc-600">
          <ul className="flex flex-wrap -mb-px text-2xl font-bold text-center">
            {tabs.map((tab) => (
              <li key={tab.id} className="me-2" role="presentation">
                <button
                  className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-600 hover:border-teal-600 dark:hover:border-teal-100 dark:hover:text-teal-100 ${
                    activeTab === tab.id
                      ? "text-teal-800 border-teal-800 dark:text-teal-500 dark:border-teal-500"
                      : "border-transparent text-gray-300 dark:text-zinc-600"
                  }`}
                  onClick={() => handleTabChange(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dropdown for smaller screens */}
      {isMobile && (
        <Dropdown
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
      )}

      {/* Tab Content */}
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-2 ${activeTab === tab.id ? "block" : "hidden"}`}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTab;
