import React from 'react';
import { ProjectSection } from '../../organisms';
import { BigGradientText } from '../../atoms';
import './ProjectList.scss';

const ProjectList = ({ projects }) => {
  return (
    <section className="ProjectList">
      <div>
        <BigGradientText>Projects</BigGradientText>
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
