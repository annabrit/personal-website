import React from 'react';
import { StackIcon, SubHeadingText } from '../../atoms';
import './StackSummary.scss';

const StackSummary = ({ name, techs, notes }) => {
  return (
    <div className="StackSummary">
      <div className="container">
        <StackIcon name={name} />
      </div>
      <div className="container">
        <ul>
          {techs.map((tech, idx) => (
            <li key={idx}>
              <SubHeadingText>{tech}</SubHeadingText>
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

export default StackSummary;
