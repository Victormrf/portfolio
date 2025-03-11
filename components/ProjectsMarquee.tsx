"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { Project } from "@/types/project";
import { projectsData } from "@/data/projects";
import { Button } from "./ui/button";

const ProjectCard = ({
  title,
  summary,
  description,
  link,
  code,
  previewImage,
  technologies,
}: Project) => {
  const { openModal } = useModal();

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal(
      <div className="flex flex-col gap-4">
        <Image
          src={previewImage}
          alt={title}
          width={600}
          height={400}
          className="w-full rounded-lg"
        />
        <div className="flex gap-1 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex border border-teal-800 dark:border-teal-300 rounded-md px-2 py-1 text-sm bg-gray-200 dark:bg-cyan-900 text-teal-800 dark:text-teal-300"
            >
              {tech}
            </div>
          ))}
        </div>
        <p>{description}</p>
        <div className="flex gap-2 mt-2">
          <Link href={link}>
            <Button variant="default">View</Button>
          </Link>
          <Link href={code}>
            <Button variant="outline">Code</Button>
          </Link>
        </div>
      </div>,
      title
    );
  };

  return (
    <div className="flex flex-col border hover:shadow-md border-gray-100  dark:border-gray-800 rounded-md">
      <Image
        src={previewImage}
        alt="Project Image"
        width={300}
        height={200}
        className="w-full h-full rounded-t-md"
      />
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-ls font-bold text-teal-800 dark:text-teal-300">
          {title}
        </h2>
        <p className="text-base text-teal-800 dark:text-gray-100">{summary}</p>
        <div className="flex gap-1 flex-wrap">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex border border-teal-800 dark:border-teal-300 rounded-md px-2 py-1 text-sm bg-gray-200 dark:bg-cyan-900 text-teal-800 dark:text-teal-300"
            >
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <Link
            href={link}
            onClick={handleOpenModal}
            className="flex items-center gap-1 text-teal-800 dark:text-teal-300 underline"
          >
            <span>Click here to see more</span>
            <SquareArrowOutUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export function ProjectsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:40s]">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
  );
}
