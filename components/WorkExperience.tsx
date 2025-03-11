import { workExperienceData } from "@/data/workExperiences";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="pl-3">
        <ol className="relative border-s border-teal-800/80 dark:border-cyan-900">
          {workExperienceData.map((item, index) => (
            <li className="mb-10 ms-8" key={index}>
              <div className="absolute w-10 h-10 bg-teal-800 rounded-full mt-1.5 -start-5 border border-teal-800 dark:border-cyan-700 dark:bg-cyan-700 flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={"College icon"}
                  width={40}
                  height={40}
                  className="rounded-full h-max w-max"
                />
              </div>
              <time className="mb-1 text-sm font-normal leading-none text-teal-800/80 dark:text-cyan-600">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">
                {item.jobTitle} at {item.companyName}
              </h3>
              <ol className="text-base text-gray-800 dark:text-gray-100">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
