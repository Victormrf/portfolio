"use client";

import { skillsData } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  // Split skills into pages of 12 items
  const pages = Array.from(
    { length: Math.ceil(skillsData.length / itemsPerPage) },
    (_, i) => skillsData.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h1 className="text-2xl font-bold text-teal-800 dark:text-teal-300">
          Tech Stack
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-7xl flex items-center gap-4">
          <button
            onClick={handlePrevPage}
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200/10 hover:bg-teal-600/10 text-gray-400 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-5 gap-4"
              >
                {pages[currentPage]?.map((skill, index) => (
                  <div key={index}>
                    <div className="h-24 w-48 group flex flex-col items-center justify-center gap-2 border-2 rounded-md p-4 text-sm border-gray-500/30 hover:border-teal-600 transition-colors duration-300 aspect-square">
                      <skill.icon className="w-10 h-10 text-gray-400/30 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300" />
                      <span className="text-gray-500/30 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNextPage}
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-200/10 hover:bg-teal-600/10 text-gray-400 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
            aria-label="Next page"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-4 absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full ${
                  currentPage === index
                    ? "bg-teal-600 dark:bg-teal-400"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
