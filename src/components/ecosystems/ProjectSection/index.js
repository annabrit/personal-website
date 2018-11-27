import React from 'react';
import { ProjectDescription } from '../../organisms';
import { SectionHeadingText } from '../../atoms';
import './ProjectSection.scss';

const ProjectSection = ({ projects }) => {
  return (
    <section className="project-section">
      <div>
        <SectionHeadingText>projects</SectionHeadingText>
      </div>
      {projects.map((project, key) => {
        return (
          <ProjectDescription
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

export default ProjectSection;
