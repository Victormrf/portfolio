"use client";

import { skillsData } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  // Split skills into pages of 12 items
  const pages = Array.from(
    { length: Math.ceil(skillsData.length / itemsPerPage) },
    (_, i) => skillsData.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h1 className="text-2xl font-bold text-teal-800 dark:text-teal-300">
          Tech Stack
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-5 gap-y-4 w-full"
            >
              {pages[currentPage]?.map((skill, index) => (
                <div
                  key={index}
                  className="h-24 w-48 group flex flex-col items-center justify-center gap-2 border rounded-md p-4 text-sm border-gray-500/30 hover:border-teal-600 transition-colors duration-300 aspect-square"
                >
                  <skill.icon className="w-10 h-10 text-gray-400/30 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300" />
                  <span className="text-gray-500/30 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-4">
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
