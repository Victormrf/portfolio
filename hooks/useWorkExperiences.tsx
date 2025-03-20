import { useTranslation } from "react-i18next";
import { workExperienceData } from "@/data/workExperiences";
import { WorkExperienceItem } from "@/types/workExperience";

export const useWorkExperiences = () => {
  const { t } = useTranslation();

  const translatedExperiences: WorkExperienceItem[] = workExperienceData.map(
    (experience) => ({
      ...experience,
      startDate: t(experience.startDate),
      endDate: t(experience.endDate),
      companyName: t(experience.companyName),
      jobTitle: t(experience.jobTitle),
      description: experience.description.map((key) => t(key)),
    })
  );

  return translatedExperiences;
};
