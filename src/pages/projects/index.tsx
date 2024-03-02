import { projectsContent } from "@/content/projectsContent";
import ProjectCard from "@/views/pages/projects/ProjectCard";

const Projects = () => {
  return (
    <div className="mx-auto w-full p-3 md:p-6 lg:p-12">
      <div className="mb-6">
        <h2 className="-mx-3 -mt-3 ps-4 pt-4 text-white md:m-0">
          {projectsContent.title}
        </h2>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-600 via-mgreen-base to-mlime-base md:bg-none"></div>
      </div>
      <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
        {projectsContent.projects.map((project, index) => (
          <ProjectCard key={index} item={project} />
        ))}
      </div>
      <div className="mb-6">
        <h2 className="-mx-3 -mt-3 ps-4 pt-4 text-white md:m-0">
          {projectsContent.otherProjectsTitle}
        </h2>
        <p className="-mx-3 -mt-3 w-3/4 ps-4 pt-4 text-white md:m-0">
          {projectsContent.otherProjectsDescription}
        </p>
        <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-600 via-mgreen-base to-mlime-base md:bg-none"></div>
      </div>
      <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
        {projectsContent.otherProjects.map((project, index) => (
          <ProjectCard key={index} item={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
