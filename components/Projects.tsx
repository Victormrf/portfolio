import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  link: string;
  code: string;
  previewImage: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "Test Project",
    description: "This is still in development...",
    link: "https://vercel.com/",
    code: "https://github.com/Victormrf",
    previewImage: "/images/WebDevelopmentProjects2.png",
    technologies: ["Nest.js", "TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Test Project",
    description: "This is still in development...",
    link: "https://vercel.com/",
    code: "https://github.com/Victormrf",
    previewImage: "/images/WebDevelopmentProjects2.png",
    technologies: ["Nest.js", "TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Test Project",
    description: "This is still in development...",
    link: "https://vercel.com/",
    code: "https://github.com/Victormrf",
    previewImage: "/images/WebDevelopmentProjects2.png",
    technologies: ["Nest.js", "TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Test Project",
    description: "This is still in development...",
    link: "https://vercel.com/",
    code: "https://github.com/Victormrf",
    previewImage: "/images/WebDevelopmentProjects2.png",
    technologies: ["Nest.js", "TypeScript", "Next.js", "React", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-2 gap-4">
        {projectsData?.map((item, index) => (
          <div
            className="flex flex-col border border-gray-100 rounded-md"
            key={index}
          >
            <Image
              src={item.previewImage}
              alt="Project Image"
              width={600}
              height={400}
              className="w-full h-full rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-ls font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="flex gap-1 flex-wrap">
                {item.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex border border-gray-200 rounded-md px-2 py-1 text-sm bg-gray-200 text-gray-800"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Link href={item.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={item.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
