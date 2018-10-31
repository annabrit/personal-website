import React from 'react';
import { StackSection } from '../../molecules';

const ProjectSection = ({ title, description, techStack }) => {
  return (
    <div>
      <h3>{title}</h3>
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
