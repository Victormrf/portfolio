import { useTranslation } from "react-i18next";
import { projectsData } from "@/data/projects";
import { Project } from "@/types/project";

export const useProjects = () => {
  const { t } = useTranslation();

  const translatedProjects: Project[] = projectsData.map((project) => ({
    ...project,
    title: t(project.title),
    summary: t(project.summary),
    description: project.description.map((desc) => t(desc)),
  }));

  return translatedProjects;
};
