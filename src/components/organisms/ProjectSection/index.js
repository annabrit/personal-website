import React from 'react';
import { StackSection } from '../../molecules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectSection.scss';

const ProjectSection = ({ title, description, techStack }) => {
  return (
    <div className="ProjectSection">
      <div className="project-section-header">
        <h3>{title}</h3>
        <div className="external-project-links">
          <FontAwesomeIcon color="#2780c4" icon={['fa', 'code']} />
          <FontAwesomeIcon
            color="#2780c4"
            icon={['fas', 'external-link-alt']}
          />
        </div>
      </div>
      <p>{description}</p>
      {techStack.map((stack, idx) => {
        return (
          <StackSection
            name={stack.name}
            techs={stack.techs}
            notes={stack.notes}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default ProjectSection;
