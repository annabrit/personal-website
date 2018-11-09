import React from 'react';
import { ColorDrip } from '../../atoms';
import './ColorFall.scss';

const ColorFall = () => {
  return (
    <div className="color-fall">
      <div className="stack">
        <ColorDrip colors={['#6A9907', '#A2CC49']} length={400} width={60} />
        <ColorDrip colors={['#95C147', '#BDD693']} length={150} width={60} />
      </div>
      <div className="stack">
        <ColorDrip
          colors={['#47E5BC', '#81E2C8', '#ADDDD0']}
          length={300}
          width={60}
        />
      </div>
      <div className="stack">
        <ColorDrip
          colors={['#6B8DC4', '#80A4DD', '#AEC7EF']}
          length={350}
          width={60}
        />
        <ColorDrip colors={['#A5D1CE', '#BEF4F2']} length={200} width={60} />
      </div>
    </div>
  );
};

export default ColorFall;
