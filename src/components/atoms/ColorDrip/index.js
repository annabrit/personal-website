import React from 'react';
import './ColorDrip.scss';

const ColorDrip = ({ colors, length }) => {
  let style = {
    backgroundImage: `linear-gradient(${colors.join(', ')})`,
    height: `${length}px`
  };
  return <div className="color-drip" style={style} />;
};

export default ColorDrip;
