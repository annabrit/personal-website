import React from 'react';

const ColorDrip = ({ colors, length, width, depth }) => {
  let style = {
    backgroundImage: `linear-gradient(${colors.join(', ')})`,
    height: `${length}px`,
    width: `${width}px`,
    borderRadius: `0px 0px ${Number(width) / 2}px ${Number(width) / 2}px`,
    display: 'inline-block',
    position: 'absolute'
  };
  return <div style={style} />;
};

export default ColorDrip;
