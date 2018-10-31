import React from 'react';
import { StackIcon } from '../../atoms';

const StackSection = ({ name, techs, notes }) => {
  return (
    <div>
      <StackIcon name={name} />
      <ul>
        {techs.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <p>{notes}</p>
    </div>
  );
};

export default StackSection;
