import React from 'react';
import { ProjectSection } from '../../organisms';

const ProjectList = ({ projects }) => {
  return (
    <section>
      <h1>Projects</h1>
      {projects.map((project, key) => {
        return (
          <ProjectSection
            title={project.title}
            description={project.title}
            techStack={project.techStack}
            key={key}
          />
        );
      })}
      <ProjectSection />
    </section>
  );
};

export default ProjectList;
