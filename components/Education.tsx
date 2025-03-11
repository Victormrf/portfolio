import { educationData } from "@/data/educations";
import Image from "next/image";

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="pl-3">
        <ol className="relative border-s border-teal-800/80 dark:border-cyan-900">
          {educationData.map((item, index) => (
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
              <time className="mb-1 text-sm font-normal leading-none text-teal-800/80 dark:text-cyan-700">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-300">
                {item.courseName} at {item.collegeName}
              </h3>
              <h5 className="text-sm text-gray-400 dark:text-cyan-600">
                {item.courseType}
              </h5>
              <h4 className="text-base text-gray-800 dark:text-gray-100">
                {item.address}
              </h4>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
