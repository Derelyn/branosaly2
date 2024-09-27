import { StaticImageData } from "next/image";

export type OneProjectType = {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  mobileImage: StaticImageData;
  linkText?: string;
  redirect?: string;
};

export type ProjectsContentType = {
  id: string;
  title: string;
  otherProjectsTitle: string;
  otherProjectsDescription: string;
  projects: OneProjectType[];
  otherProjects: OneProjectType[];
};
