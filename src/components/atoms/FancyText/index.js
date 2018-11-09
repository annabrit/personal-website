import React from 'react';
import './FancyText.scss';

const FancyText = ({ children }) => {
  return <p className="FancyText">{children}</p>;
};

export default FancyText;
