interface EducationItem {
  startDate: string;
  endDate: string;
  collegeName: string;
  courseName: string;
  courseType: string;
  address: string;
}

const educationData: EducationItem[] = [
  {
    startDate: "March 2018",
    endDate: "June 2024",
    collegeName: "Federal University of Juiz de Fora (UFJF)",
    courseName: "Electrical Engineering",
    courseType: "Graduation",
    address: "Juiz de Fora, Minas Gerais, Brazil.",
  },
  {
    startDate: "November 2024",
    endDate: "Present",
    collegeName: "Pontifical Catholic University of Minas Gerais (PUC Minas)",
    courseName: "Software Engineering",
    courseType: "Post-graduation",
    address: "Belo Horizonte, Minas Gerais, Brazil.",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-1">
        <ol className="relative border-s border-teal-800/80 dark:border-cyan-900">
          {educationData.map((item, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-teal-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-cyan-700"></div>
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
