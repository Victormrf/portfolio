import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

const skillsData: Skill[] = [
  { name: "JavaScript", icon: "/images/svg_icons/javascript.svg" },
  { name: "TypeScript", icon: "/images/svg_icons/typescript.svg" },
  { name: "Python", icon: "/images/svg_icons/python.svg" },
  { name: "Go", icon: "/images/svg_icons/golang.svg" },
  { name: "HTML", icon: "/images/svg_icons/html.svg" },
  { name: "CSS", icon: "/images/svg_icons/css.svg" },
  { name: "Node.js", icon: "/images/svg_icons/nodejs.svg" },
  { name: "Nest.js", icon: "/images/svg_icons/nestjs.svg" },
  { name: "Express", icon: "/images/svg_icons/express.svg" },
  { name: "React", icon: "/images/svg_icons/react.svg" },
  { name: "Next.js", icon: "/images/svg_icons/nextjs.svg" },
  { name: "MongoDB", icon: "/images/svg_icons/mongodb.svg" },
  { name: "Elasticsearch", icon: "/images/svg_icons/elasticsearch.svg" },
  { name: "PostgreSQL", icon: "/images/svg_icons/postgresql.svg" },
  { name: "MySQL", icon: "/images/svg_icons/mysql.svg" },
  { name: "Git", icon: "/images/svg_icons/git.svg" },
  { name: "Docker", icon: "/images/svg_icons/docker.svg" },
  { name: "AWS", icon: "/images/svg_icons/aws.svg" },
  { name: "Apache Kafka", icon: "/images/svg_icons/kafka.svg" },
  { name: "RESTful APIs", icon: "/images/svg_icons/api.png" },
];

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
