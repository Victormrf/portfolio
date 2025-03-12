"use client";

import { skillsData } from "@/data/skills";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);

  // Split skills into pages of 12 items
  const pages = Array.from(
    { length: Math.ceil(skillsData.length / itemsPerPage) },
    (_, i) => skillsData.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-teal-800 dark:text-teal-300">
        Tech Stack
      </h1>
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-6 gap-4 w-full"
          >
            {pages[currentPage]?.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 border-4 rounded-md p-4 text-base text-gray-500/30 border-gray-500/30 hover:dark:border-teal-600 hover:text-white aspect-square"
              >
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  width={20}
                  height={20}
                  className="w-10 h-10"
                />
                {skill.name}
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
  );
};

export default Skills;
