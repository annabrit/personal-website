import React from 'react';
import './SectionHeadingText.scss';

const SectionHeadingText = ({ children }) => {
  console.log(children);
  return <h2 className="section-heading-text">{children}</h2>;
};

export default SectionHeadingText;
