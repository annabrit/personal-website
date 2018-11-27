import React from 'react';
import { Card } from '../../atoms';
import { StackSummary } from '../../molecules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectDescription.scss';

const ProjectDescription = ({ title, description, techStack }) => {
  return (
    <div className="Project-section-wrapper">
      <Card>
        <div className="ProjectSection">
          <div className="project-section-header">
            <h3>{title}</h3>
            <div className="external-project-links">
              <a href="http://localhost:3000/">
                <FontAwesomeIcon
                  className="project-icon"
                  icon={['fa', 'code']}
                  mask={['fa', 'circle']}
                  transform="shrink-9"
                />
              </a>
              <FontAwesomeIcon
                className="project-icon"
                icon={['fas', 'external-link-alt']}
                transform="shrink-9 right-0.7"
                mask={['fa', 'circle']}
              />
            </div>
          </div>
          <p>{description}</p>
          {techStack.map((stack, idx) => {
            return (
              <StackSummary
                name={stack.name}
                techs={stack.techs}
                notes={stack.notes}
                key={idx}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default ProjectDescription;
