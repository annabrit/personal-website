import React from 'react';
import { ColorDrip } from '../../atoms';
import './ColorFall.scss';

const ColorFall = () => {
  let drips = Array.from({ length: 5 }, (place, num) => {
    return (
      <div className="stack">
        <ColorDrip
          key={`color-drip-${num}-under`}
          className={`color-drip-${num}-under`}
        />
        <ColorDrip
          key={`color-drip-${num}-over`}
          className={`color-drip-${num}-over`}
        />
      </div>
    );
  });
  return <div className="color-fall">{drips}</div>;
};

export default ColorFall;
