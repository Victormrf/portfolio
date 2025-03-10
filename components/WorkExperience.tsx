import { workExperienceData } from "@/data/workExperiences";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-1">
        <ol className="relative border-s border-teal-800/80 dark:border-cyan-900">
          {workExperienceData.map((item, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-teal-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-cyan-700"></div>
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
