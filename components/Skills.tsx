import { skillsData } from "@/data/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-teal-800 dark:text-teal-300">
        Skills
      </h1>
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-teal-800/80 text-white"
          >
            <Image
              src={skill.icon}
              alt={`${skill.name} icon`}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
