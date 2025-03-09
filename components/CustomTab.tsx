"use client";

import { useState } from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const CustomTab = () => {
  const [activeTab, setActiveTab] = useState("projects");

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

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-2xl font-bold text-center">
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-teal-600 hover:border-teal-600 dark:hover:border-teal-100 dark:hover:text-teal-100 ${
                  activeTab === tab.id
                    ? "text-teal-800 border-teal-800 dark:text-teal-500 dark:border-teal-500"
                    : "border-transparent text-gray-300 dark:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
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

      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-2  ${activeTab === tab.id ? "block" : "hidden"}`}
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
