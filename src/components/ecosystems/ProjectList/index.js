import React from 'react';
import { ProjectSection } from '../../organisms';
import './ProjectList.scss';

const ProjectList = ({ projects }) => {
  return (
    <section className="ProjectList">
      <div>
        <h1>Projects</h1>
      </div>
      {projects.map((project, key) => {
        return (
          <ProjectSection
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            key={key}
          />
        );
      })}
    </section>
  );
};

export default ProjectList;
