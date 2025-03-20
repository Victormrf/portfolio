import { useTranslation } from "react-i18next";
import { EducationData } from "@/data/educations";
import { EducationItem } from "@/types/education";

export const useEducation = () => {
  const { t } = useTranslation();

  const translatedEducation: EducationItem[] = EducationData.map((project) => ({
    logo: project.logo,
    startDate: t(project.startDate),
    endDate: t(project.endDate),
    collegeName: t(project.collegeName),
    courseName: t(project.courseName),
    courseType: t(project.courseType),
    address: t(project.address),
  }));

  return translatedEducation;
};
