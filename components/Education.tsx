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
      <h1 className="text-2xl font-bold">Education</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationData.map((item, index) => (
            <li className="mb-10 ms-4" key={index}>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.courseName} at {item.collegeName}
              </h3>
              <h5 className="text-sm text-gray-400">{item.courseType}</h5>
              <h4 className="text-base text-gray-700 dark:text-gray-300">
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
