import React from 'react';
import './BigGradientText.scss';

const BigGradientText = ({ children }) => {
  console.log(children);
  return <h2 className="big-gradient-text">{children}</h2>;
};

export default BigGradientText;
