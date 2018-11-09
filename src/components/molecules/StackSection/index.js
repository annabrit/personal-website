import React from 'react';
import { StackIcon, FancyText } from '../../atoms';
import './StackSection.scss';

const StackSection = ({ name, techs, notes }) => {
  return (
    <div className="StackSection">
      <div className="container">
        <StackIcon name={name} />
      </div>
      <div className="container">
        <ul>
          {techs.map((tech, idx) => (
            <li key={idx}>
              <FancyText>{tech}</FancyText>
            </li>
          ))}
        </ul>
      </div>
      <div className="container text">
        <p>{notes}</p>
      </div>
    </div>
  );
};

export default StackSection;
