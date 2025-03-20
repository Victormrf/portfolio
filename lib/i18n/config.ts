"use client";

import {
  educationEN,
  projectsEN,
  workExperiencesEN,
} from "@/data/translations/en";
import {
  educationPT,
  projectsPT,
  workExperiencesPT,
} from "@/data/translations/pt";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        greeting: "Hi! I'm",
        intro:
          "As a Software Engineer with 2+ years of experience, i have crafted solutions for backend and frontend development, creating applications from scratch to production-ready. I have experience working with relational and non-relational databases. I also hold a degree in electrical engineering, and currently am a post graduate student in software engineering. As a software development enthusiast, I'm always looking to acquire new knowledge in the field and develop new technical skills.",
        downloadCV: "Download CV",
        projectsTab: "Projects",
        workExperienceTab: "Work Experience",
        educationTab: "Education",
        contactsTab: "Contacts",
        ...workExperiencesEN,
        ...projectsEN,
        clickHereToSeeMore: "Click here to see more",
        view: "View",
        code: "Code",
        ...educationEN,
        contactMe: "Want to chat? Just email me directly at",
      },
    },
    pt: {
      translation: {
        greeting: "Olá! Eu sou",
        intro:
          "Como Engenheiro de Software com mais de 2 anos de experiência, desenvolvi soluções para desenvolvimento backend e frontend, criando aplicações do zero até prontas para produção. Tenho experiência trabalhando com bancos de dados relacionais e não relacionais. Também sou formado em engenharia elétrica e atualmente sou pós-graduando em engenharia de software. Como entusiasta do desenvolvimento de software, estou sempre buscando adquirir novos conhecimentos na área e desenvolver novas habilidades técnicas.",
        downloadCV: "Baixar currículo",
        projectsTab: "Projetos",
        workExperienceTab: "Experiência Profissional",
        educationTab: "Formação",
        contactsTab: "Contatos",
        ...workExperiencesPT,
        ...projectsPT,
        clickHereToSeeMore: "Clique aqui para ver mais detalhes",
        view: "Ir para aplicação",
        code: "Código",
        ...educationPT,
        contactMe: "Bora trocar uma ideia? Meu e-mail é",
      },
    },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
