interface WorkExperienceItem {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}

const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "October 2024",
    endDate: "Present",
    companyName: "LEVTY",
    jobTitle: "Software Engineer",
    description: [
      "Development and maintenance of applications based on Node.js, following architectural (MVC) and software design principles, such as SOLID and object orientation (OOP).",
      "Experience in operations with non-relational databases (MongoDB), with a focus on using Elasticsearch to create advanced queries and complex aggregations, enabling the management of large volumes of data in scalable applications.",
      "Configuration of endpoints and documented RESTful APIs with Swagger for efficient integration between different environments",
      "Maintenance of front-end interfaces using markup languages (HTML), styling (CSS) and frameworks (React.js).",
      "Translation of business rules into CRM, Billing, BPM and Service Desk solutions",
      "Participation in meetings with clients for project alignments and requirements gathering.",
      "Working on a wide range of projects, including public, financial, educational and health sectors, bringing customized solutions to different contexts and demands.",
    ],
  },
];

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
